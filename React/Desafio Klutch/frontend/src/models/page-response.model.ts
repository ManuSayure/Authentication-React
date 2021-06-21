export interface IPageResponse<T> {
    metadata: any;
    pageIndex: number;
    page:number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    results: T[];
}
