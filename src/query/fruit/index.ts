import { useQuery } from "@tanstack/react-query";

/**
 * The FruityVice API is a free API service that gives you all kinds of data on fruits: https://www.fruityvice.com/#1
 * 
 * Let's implement a query that:
 * - Retrieve all fruits.
 * 
 * Display this list in the main page in whatever design that you deem user-friendly.
 * 
 * ***BONUS POINT 🎗***: make this list paginatable on the front-end by pages of 5.
 */
export const useFruits = <T>() => {
  return useQuery({
    queryKey: ["fruits"],
    retry: 2,
    queryFn: async () => {
      try {
        const response = await fetch(
          "https://www.fruityvice.com/api/fruit/all"
        );
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json() as T;
        return data;
      } catch (err) {
        throw new Error('Error');
      }

    },
  });
}