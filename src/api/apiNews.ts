// noinspection JSAnnotator

import {createLogger} from "vite";
import axios from "axios";

// `baseURL` будет добавляться `url`, если `url` не является абсолютным.
// Может быть удобно установить `baseURL` для экземпляра axios для передачи относительных URL-адресов
// к методам этого экземпляра.
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY; //будем отправлять в params с запросом

// `params` - это URL-параметры, которые отправляются вместе с запросом
// Должно быть обычным объектом или объектом URLSearchParams
// Примечание: параметры, которые являются нулевыми или неопределенными, не отображаются в URL-адресе.
export const getNews = async () => { //эту функцию будем вызывать при запросе на сервер
    try { //для импортирования данных используем метод get
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY
            }
        })
        return response.data
    }
    catch (error){
        console.log(error)
    }
}
