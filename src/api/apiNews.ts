import axios from "axios";

// `baseURL` будет добавляться `url`, если `url` не является абсолютным.
// Может быть удобно установить `baseURL` для экземпляра axios для передачи относительных URL-адресов
// к методам этого экземпляра.
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY; //будем отправлять в params с запросом

type TypeGetNewsProps = {
    page_number: number,
    page_size: number,
    category: string | null
}

export const getNews = async (props: TypeGetNewsProps)=> { //эту функцию будем вызывать при запросе на сервер
    try { //для импортирования данных используем метод get
        const response = await axios.get(`${BASE_URL}search`, {
            params: {
                apiKey: API_KEY,
                page_number: props.page_number,
                page_size: props.page_size,
                category: props.category
            }
        })
        return response.data
    }
    catch (error){
        console.log(error)
    }
}
export const getCategories = async () => { //эту функцию будем вызывать при запросе на сервер
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
    }
}
