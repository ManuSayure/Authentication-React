export interface IAttachmentFile {
    id: number;
    filePath: string;
    fileName: string;
    contentType: string;
    fileContent: File;
}