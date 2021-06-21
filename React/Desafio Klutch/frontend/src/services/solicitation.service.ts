import {CrudBaseService} from "./crud-base.service";
import {ISolicitation} from "../models/solicitation.model";

const rateTableService = new CrudBaseService<ISolicitation>('solicitation');

export default rateTableService;