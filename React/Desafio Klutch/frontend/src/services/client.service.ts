import {CrudBaseService} from "./crud-base.service";
import {IClient} from "../models/client.model";

const clientService = new CrudBaseService<IClient>('ContractAttachments');

export default clientService;