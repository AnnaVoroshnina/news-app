import {useEffect, useState} from "react";

export interface FetchFunction <P, T> {
    (params?: P): Promise<T>;
}
export interface UseFetchResult <T> {
    data: T | null | undefined,
    isLoading: boolean,
    error: Error | null
}
export const useFetch = <P, T> (fetchFunction: FetchFunction<P, T>, params?: P): UseFetchResult<T> => {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState <boolean>(true)
    const [error, setError] = useState<Error | null>(null)


    //преобразовываем зараметры из массива в строку, чтобы легче было сравнивать в зависимости у useEffect
    const stringParams = params ? new URLSearchParams(params).toString() : ''
    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)

                const result = await fetchFunction(params)
                setData(result)
            } catch (error) {
                setError(error as Error)
            } finally {
                setIsLoading(false)
            }
        })()

    }, [fetchFunction, stringParams]);
    return {data, isLoading, error}
}