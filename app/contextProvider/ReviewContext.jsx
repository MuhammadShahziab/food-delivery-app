"use client";
import { addData, getSingleData } from "@app/services";
import { createContext, useCallback, useEffect, useState } from "react";

export const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRating, setTotalRating] = useState(0);

  // useCallback to memoize calculateRating
  const calculateRating = useCallback(() => {
    if (!reviews || reviews.length === 0) {
      return setTotalRating(0);
    }
    let totalRating = 0;
    reviews.forEach((item) => {
      totalRating += item.rating;
    });

    const averageRating = (totalRating / reviews.length).toFixed(1);

    setTotalRating(Math.min(averageRating, 5));
  }, [reviews]);

  const getReviews = async (id) => {
    try {
      const res = await getSingleData("foodItem", id);
      setReviews(res?.data.reviews || []);
    } catch (error) {
      console.log(error);
    }
  };

  const addReview = async (foodId, comment, rating) => {
    try {
      setLoading(true);
      const res = await addData("review", { foodId, comment, rating });
      if (res?.success) {
        setReviews((prevReview) => [...prevReview, res.review]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    calculateRating();
  }, [calculateRating]);

  return (
    <ReviewContext.Provider
      value={{ getReviews, reviews, addReview, loading, totalRating }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
