export interface IPageRequest {
    order: 'asc' | 'desc';
    sort: string;
    pageIndex: number;
    pageSize: number;
}