import { useMutation, useQueryClient } from "@tanstack/react-query";
import request from "../../../config/axios";
import { HTTP_METHOD } from "../../../constants/http";
import { QUERY_KEY } from "../../../constants/queryKey";
import { ENDPOINT } from "../../../constants/endpoint";

export const useUpdateProduct = (detailId) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await request({
        method: HTTP_METHOD.PUT,
        url: `http://localhost:8000/api/products/${detailId}`,
        data,
      });

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY.DETAILS,
      });
    },
  });
};
