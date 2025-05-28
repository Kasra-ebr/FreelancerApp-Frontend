import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategoryApi } from "../Server/ProjectService";

interface Category {
  _id: string;
  title: string;
  englishTitle: string;
}

function useCategories() {
  const { data, isLoading } = useQuery<{ categories: Category[] }>({
    queryKey: ["categories"], 
    queryFn: getCategoryApi,
  });

  const rawCategories = data?.categories ?? [];

  // Map with _id as value
  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  // Map with englishTitle as value
  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { isLoading, categories, transformedCategories };
}

export default useCategories;
