import { attachmentFile } from "./attachmentFile.model";

export interface Iaddendum {
  id: number;
  signatureDate: string;
  effectiveDate: string;
  attachmentFile: attachmentFile
}

