import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import axios from "axios";
import { API_PATH } from "../config/api.config";
import moment from "moment";
const { confirm } = Modal;

export const showDeleteConfirm = (
  id,
  messageApi,
  getListDiscount,
  setDiscounts,
  API_URL
) => {
  confirm({
    title: "Are you sure delete?",
    icon: <ExclamationCircleFilled />,
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      axios
        .delete(API_URL + `/${id}`)
        .then(() => {
          success("Deleted Succesfully", messageApi);
        })
        .then(() => {
          getListDiscount(setDiscounts);
        })
        .catch((error) => console.error(error));
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

export const showDeleteVoucherConfirm = (
  id,
  messageApi,
  getListVoucher,
  setVouchers
) => {
  confirm({
    title: "Are you sure delete this voucher?",
    icon: <ExclamationCircleFilled />,
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      axios
        .delete(API_PATH.voucher + `/${id}`)
        .then(() => {
          success("Deleted Succesfully", messageApi);
        })
        .then(() => {
          getListVoucher(setVouchers);
        })
        .catch((error) => console.error(error));
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

export const showDeleteImportConfirm = (
  id,
  messageApi,
  getListImport,
  setImports
) => {
  confirm({
    title: "Are you sure delete this import?",
    icon: <ExclamationCircleFilled />,
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      axios
        .delete(API_PATH.import + `/${id}`)
        .then(() => {
          success("Deleted Succesfully", messageApi);
        })
        .then(() => {
          getListImport(setImports);
        })
        .catch((error) => console.error(error));
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

export const success = (message, messageApi) => {
  messageApi.open({
    type: "success",
    content: message,
  });
};

export const formatDate = (dateString) => {
  return moment(dateString).format("DD/MM/YYYY");
};
