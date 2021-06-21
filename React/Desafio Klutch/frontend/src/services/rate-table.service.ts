import {CrudBaseService} from "./crud-base.service";
import {IRateTable} from "../models/rate-table.model";

const rateTableService = new CrudBaseService<IRateTable>('ContractAttachments');

export default rateTableService;