import {CategoriesType} from "../../entities/category/model/types.ts";

export interface IFilters {
    page_number: number;
    page_size: number;
    category: CategoriesType | null;
    keywords: string;
}
export type ParamsType = Partial<IFilters>

export type SkeletonType = 'banner' | 'item'
