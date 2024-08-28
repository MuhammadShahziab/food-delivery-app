"use client";
import { getData, updateData } from "@app/services";
import Box from "@components/Box";
import CategoryForm from "@components/dashboard/CategoryForm";
import EditableImage from "@components/dashboard/EditableImage";
import React, { useEffect, useState } from "react";

const CategoryEditPage = ({ params }) => {
  const { id } = params;
  const [category, setCategory] = useState();
  const [image, setImage] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const getCategories = async () => {
    try {
      const categories = await getData("category");
      console.log(categories.data, "check category");

      const getSingleCategory = categories?.data.find(
        (item) => item._id === id
      );

      setCategory(getSingleCategory);
      setImage(getSingleCategory?.image || "");
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const updateCategory = async (e, data) => {
    e.preventDefault();
    try {
      const { name, slug } = data;
      setLoading(true);
      await updateData("category", { name, slug, image, id });
      setLoading(false);
    } catch (error) {
      console.error("Failed to update category:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      getCategories();
    }
  }, [id]); // Updated to include `id` dependency

  return (
    <Box>
      <div className="flex gap-6">
        <div className="flex-1 justify-center flex">
          <EditableImage
            imageLoading={imageLoading}
            setImageLoading={setImageLoading}
            setImage={setImage}
            image={image}
            name="Upload"
          />
        </div>
        <CategoryForm
          handleSubmit={updateCategory}
          category={category}
          loading={loading}
        />
      </div>
    </Box>
  );
};

export default CategoryEditPage;
