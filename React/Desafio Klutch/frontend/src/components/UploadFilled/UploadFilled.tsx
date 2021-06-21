import React, { FC, useState } from "react";
import { Upload } from "antd";
import { ContainerOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

interface UploadFilledProps {
  buttonText: string;
  supportedFormats: string[];
  accept: string;
  setValue: any;
}

const UploadFilled: FC<UploadFilledProps> = ({
  buttonText,
  supportedFormats,
  accept,
  setValue,
}: UploadFilledProps) => {
  const [fileList, setFileList] = useState<any>([]);
  const props = {
    onRemove: (file: any) => {
      setFileList((fileList: any) => {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        console.log("n ->", newFileList);
        return newFileList;
      });
    },
    beforeUpload: (file: any) => {
      if (fileList.length > 0) {
        props.onRemove(file);
      }
      setFileList((fileList: any) => [...fileList, file]);
      setValue(file);
      return false;
    },
    fileList,
  };

  return (
    <>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <ContainerOutlined />
        </p>
        <p className="ant-upload-text">{buttonText}</p>
        <p className="ant-upload-hint">
          Formatos:
          {supportedFormats.map((format) => (
            <> {format}</>
          ))}
        </p>
      </Dragger>
    </>
  );
};

export default UploadFilled;
