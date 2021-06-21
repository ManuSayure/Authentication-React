import { AxiosResponse } from 'axios';
import { IPageRequest } from '../models/page-request.model';
import { IPageResponse } from '../models/page-response.model';
import api from './api';

function URLParamsParser(params: {}): string {
    const paramsParser = new URLSearchParams('');
    if (params) {
        Object.entries(params).forEach(pair => paramsParser.set(pair[0], String(pair[1])));
    }
    return paramsParser.toString();
}

export class CrudBaseService<T> {

    constructor(private controllerPath: string) {}

    page(params: IPageRequest): Promise<AxiosResponse<IPageResponse<T>>> {
        const urlParams = URLParamsParser(params);
        return api.get<IPageResponse<T>>(`${this.controllerPath}?${urlParams}`);
    }

    get(id: number): Promise<AxiosResponse<T>> {
        return api.get<T>(`${this.controllerPath}/${id}`);
    }

    getAll(): Promise<AxiosResponse<T>> {
      return api.get<T>(`${this.controllerPath}`);
    }

    create(data: T): Promise<AxiosResponse<T>> {
        return api.post<T>(this.controllerPath, data);
    }

    update(id: number, data: T): Promise<AxiosResponse<T>> {
        return api.put<T>(`${this.controllerPath}/${id}`, data);
    }

    delete(id: number): Promise<AxiosResponse<T>> {
        return api.delete<T>(`${this.controllerPath}/${id}`);
    }
}
