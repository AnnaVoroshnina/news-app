// noinspection JSAnnotator

import axios from "axios";
import {CategoriesApiResponse, NewsApiResponse, ParamsType} from "../interfaces";

// `baseURL` будет добавляться `url`, если `url` не является абсолютным.
// Может быть удобно установить `baseURL` для экземпляра axios для передачи относительных URL-адресов
// к методам этого экземпляра.
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY; //будем отправлять в params с запросом

export const getNews= async (params?: ParamsType): Promise<NewsApiResponse>=> { //эту функцию будем вызывать при запросе на сервер
    try {
        const {
            page_number = 1,
            page_size= 10,
            category,
            keywords} = params || {}
        const response  = await axios.get(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number,
                page_size,
                category,
                keywords
            }
        })
        return response.data
    }
    catch (error){
        console.log(error)
        return {news: [], page: 1, status: "error"}
    }
}

export const getLatestNews = async (): Promise<NewsApiResponse>=> { //эту функцию будем вызывать при запросе на сервер
    try { //для импортирования данных используем метод get
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY,
            }
        })
        return response.data
    }
    catch (error){
        console.log(error)
        return {news: [], page: 1, status: "error"}

    }
}
export const getCategories = async (): Promise<CategoriesApiResponse> => { //эту функцию будем вызывать при запросе на сервер
    try { //для импортирования данных используем метод get
        const response = await axios.get(`${BASE_URL}available/categories`, {
            params: {
                apiKey: API_KEY,
            }
        })
        return response.data
    }
    catch (error){
        console.log(error)
        return {categories: [], description: '', status: "error"}
    }
}
