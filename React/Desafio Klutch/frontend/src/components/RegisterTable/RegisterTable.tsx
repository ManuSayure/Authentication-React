import { FC, memo, useEffect, useState } from "react";
import { DeleteFilled, EditFilled, EyeFilled, SearchOutlined } from "@ant-design/icons";
import * as S from "./styles";
import Table from '../Table/Table';
import { ColumnsType } from "antd/lib/table";
import { FilterValue, SorterResult, TableCurrentDataSource } from "antd/lib/table/interface";
import { IPageRequest } from "../../models/page-request.model";
import { CrudBaseService } from "../../services/crud-base.service";

interface IRegisterTable<RecordType> {
    columns: ColumnsType<RecordType>;
    crudServiceApi: CrudBaseService<RecordType>
    actionsRender?: (value: any, record: RecordType, index: number) => React.ReactNode
    onVisualize?: (value: any, record: RecordType, index: number) => void;
    onEdit?: (value: any, record: RecordType, index: number) => void;
    onDelete?: (value: any, record: RecordType, index: number) => void;
}
const RegisterTable: FC<IRegisterTable<any>> = memo((props: IRegisterTable<any>) => {
    const [apiPageRequest, setApiPageRequest] = useState<IPageRequest>({
        pageIndex: 0,
        order: 'asc',
        pageSize: 10,
        sort: 'id'
    })

    const [dataSource, setDataSource] = useState<any[]>([])   
     
    const Delete =  ({onDelete}:any) => {

        const [isvisible, setIsvisible] = useState(false)      
        const showModal = () => {
            setIsvisible(true)
        };      
        const hideModal = () => {
            setIsvisible(false)
        };
        const onOk = () => {                  
            hideModal();
            onDelete();
        };  
        
        return (
            <>
              <DeleteFilled onClick={() => showModal() } />
              <S.StyledModal
                title={false}
                visible={isvisible}
                onOk={onOk}
                onCancel={hideModal}
                okText="Confirmar"
                cancelText="Cancelar"
              >
                <p className={'modalText'}> Deseja excluir esse item? </p>
              </S.StyledModal>
            </>
        );        
      }
    
    const defaultActions = (value: any, record: any, index: number) =>{       
                      
        return(
            <S.StyledIcons>
                {props.onVisualize && <EyeFilled onClick={() => props.onVisualize ? props.onVisualize(value, record, index) : null} />}
                {props.onEdit && <EditFilled onClick={() => props.onEdit ? props.onEdit(value, record, index) : null} />}
                {props.onDelete && <Delete  onDelete={() => props.onDelete ? props.onDelete(value, record, index) : null}/> }
            </S.StyledIcons>
         )
    }

    const actions = {
        title: "Ações",
        dataIndex: "actions",
        key: "actions",
        width: 130,
        render: (props?.actionsRender || defaultActions)
    };

    const appendActionColumn = () => props.columns.concat([actions]);


    const onTableChange = (
        
        filters: Record<string, FilterValue | null>,
        sorter: SorterResult<any> | SorterResult<any>[],
        extra: TableCurrentDataSource<any>
    ) => {
        let order = (sorter as any)?.order;
        order = order ? (order === 'ascend' ? 'asc' : 'desc') : 'asc';
        const field = (sorter as any)?.field ? (sorter as any)?.field : 'id';
        
       
    };

    const addObjTableKeyProperty = (resdata: any[]) => {
        for (let item of resdata) {
            item["key"] = item.id;
        }
        return resdata;
    }

    useEffect(() => {
        props.crudServiceApi.page(apiPageRequest)
            .then(res => {
                //TODO new paging structure adapted by the new formatting of the backend
                const pagedResponse = res.data;
                const pageIndex = pagedResponse.pageIndex ? pagedResponse.pageIndex : res.data?.metadata?.page;
                const totalCount = pagedResponse.totalCount ? pagedResponse.totalCount : res.data?.metadata?.totalCount;
                
                setDataSource(addObjTableKeyProperty(pagedResponse.results))
                
            })
            .catch(console.error)
    }, [props, apiPageRequest]);

    return (<>   
       {/*  <S.StyledInput placeholder="Buscar" prefix={<SearchOutlined />} /> */}
        <Table dataSource={dataSource}  columns={appendActionColumn()} onChange={onTableChange}
         title={() => (<S.StyledTitle>Tabela Padrão</S.StyledTitle>)} />
       
    </>)
})
export default RegisterTable;

