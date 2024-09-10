import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CategoriesApiResponse} from "../model/types.ts";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY; //будем отправлять в params с запросом

export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: builder => ({
        getCategoriesNews: builder.query<CategoriesApiResponse, null>({
            query: () => {
                return {
                    url: "available/categories",
                    params: {
                        apiKey: API_KEY,
                    },
                };
            },
        }),
    }),
})

export const {useGetCategoriesNewsQuery} = categoriesApi
