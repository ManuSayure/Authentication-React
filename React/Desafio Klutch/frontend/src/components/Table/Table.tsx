import { SpinProps } from "antd";
import { TableProps } from 'rc-table/lib/Table';
import { ColumnsType } from "antd/lib/table";
import { TableLocale, FilterValue, SorterResult, TableCurrentDataSource, TableRowSelection, GetPopupContainer, SortOrder } from "antd/lib/table/interface";
import { FC, useState } from "react";
import * as S from "./styles";


interface ITableProps<RecordType> extends Omit<TableProps<RecordType>, 'transformColumns' | 'internalHooks' | 'internalRefs' | 'data' | 'columns' | 'scroll' | 'emptyText'> {
    dropdownPrefixCls?: string;
    dataSource?: TableProps<RecordType>['data'];
    columns?: ColumnsType<RecordType>;
    loading?: boolean | SpinProps;
    bordered?: boolean;
    locale?: TableLocale;
    onChange?: (filters: Record<string, FilterValue | null>, sorter: SorterResult<RecordType> | SorterResult<RecordType>[], extra: TableCurrentDataSource<RecordType>) => void;
    rowSelection?: TableRowSelection<RecordType>;
    getPopupContainer?: GetPopupContainer;
    scroll?: TableProps<RecordType>['scroll'] & {
        scrollToFirstRowOnChange?: boolean;
    };
    sortDirections?: SortOrder[];
    // new parameters
    rowHeight?: string;

}
const Table: FC<ITableProps<any>> = (props: ITableProps<any>) => {
    const [filters, setFilters] = useState<any>(null);
    const [sorter, setSorter] = useState<any>(null);
    const [extra, setExtra] = useState<any>(null);

    const onChange = (pag: any, filters: Record<string, FilterValue | null>, sorter: SorterResult<any> | SorterResult<any>[], extra: TableCurrentDataSource<any>) => {
        setFilters(filters)
        setSorter(sorter)
        setExtra(extra)
        if (props.onChange)
            props.onChange(filters, sorter, extra);
    }

    const onCustomPaginationChange = (curr: number, pageSize: number) => {
    
        const newExtra: TableCurrentDataSource<any> = { currentDataSource: extra?.currentDataSource || Object.assign([], props?.dataSource) as any[], action: 'paginate' }
        if (props.onChange)
            props.onChange( filters, sorter, newExtra);
    }

    const overrideProps = () => {
        const newProps = Object.assign({}, props)
        delete newProps.onChange;
        return newProps;
    }

    

    return (
        <>
            <S.StyledTable {...overrideProps()} onChange={onChange} showSorterTooltip={false} pagination= {false} />
            
        </>
    )
}

export default Table;