"use client";
import { getData } from "@app/services";
import Box from "@components/Box";
import Loading from "@components/Loading";
import OrderList from "@components/orders/OrderList";
import PaginationButton from "@components/orders/PaginationButton";
import React, { useEffect, useState, useCallback } from "react";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchOrders, setSearchOrders] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOrder, setFilterOrder] = useState("All");

  const totalPages = Math.ceil(orders.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, orders.length);
  const currentData = [...searchOrders].reverse().slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) {
      return;
    }
    setCurrentPage(newPage);
  };

  const getOrders = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getData("order");
      setOrders(res?.orders || []);
      setSearchOrders(res?.orders || []);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleFilterChange = useCallback(
    (type) => {
      setFilterOrder(type);
      let filterOrders;
      switch (type) {
        case "All":
          filterOrders = orders;
          break;
        case "Making":
          filterOrders = orders.filter((item) => item.status === "making");
          break;
        case "On way":
          filterOrders = orders.filter((item) => item.status === "on way");
          break;
        case "Unread":
          filterOrders = orders.filter((item) => item.isNewOrder);
          break;
        default:
          filterOrders = orders;
      }
      setSearchOrders(filterOrders);
    },
    [orders]
  );

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  useEffect(() => {
    if (search === "") {
      handleFilterChange(filterOrder);
    } else {
      setSearchOrders(
        orders.filter((item) => {
          return (
            item.orderId?.toLowerCase().includes(search.toLowerCase()) ||
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.phone.toLowerCase().includes(search.toLowerCase())
          );
        })
      );
    }
  }, [search, orders, filterOrder, handleFilterChange]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box>
      <div className="flex justify-between items-center">
        <h2 className="font-medium mb-3">
          Orders{" "}
          <span className="text-sm text-softtext">({orders?.length})</span>
        </h2>
        <div>
          <input
            type="text"
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Orders"
          />
        </div>
      </div>
      <div className="mt-4 flex flex-wrap md:justify-start justify-center gap-y-3 space-x-4">
        <button
          onClick={() => handleFilterChange("All")}
          className={`${
            filterOrder === "All"
              ? "bg-yellow-100 text-yellow-500 font-semibold"
              : "bg-gray-50 text-black"
          } px-5 py-2 border-none rounded-full`}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("Making")}
          className={`${
            filterOrder === "Making"
              ? "bg-yellow-100 text-yellow-500 font-semibold"
              : "bg-gray-50 text-black"
          } px-5 py-2 border-none rounded-full`}
        >
          Making
        </button>
        <button
          onClick={() => handleFilterChange("On way")}
          className={`${
            filterOrder === "On way"
              ? "bg-yellow-100 text-yellow-500 font-semibold"
              : "bg-gray-50 text-black"
          } px-5 py-2 border-none rounded-full`}
        >
          On Way
        </button>
        <button
          onClick={() => handleFilterChange("Unread")}
          className={`${
            filterOrder === "Unread"
              ? "bg-yellow-100 text-yellow-500 font-semibold"
              : "bg-gray-50 text-black"
          } px-5 py-2 border-none rounded-full`}
        >
          UnRead
        </button>
      </div>
      <div className="mt-11">
        {searchOrders.length > 0 ? (
          currentData.map((order) => (
            <OrderList order={order} key={order._id} admin={true} />
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
      <PaginationButton
        startIndex={startIndex}
        endIndex={endIndex}
        totalPages={totalPages}
        pageSize={pageSize}
        setPageSize={setPageSize}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </Box>
  );
};

export default OrdersPage;
