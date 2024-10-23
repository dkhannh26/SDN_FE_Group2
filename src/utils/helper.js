import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import axios from "axios";
import { API_PATH } from "../config/api.config";
import moment from "moment";
import { getListAccount } from "../services/account.service";
const { confirm } = Modal;

export const showDeleteConfirm = (
  id,
  messageApi,
  getListDiscount,
  setDiscounts
) => {
  confirm({
    title: "Are you sure delete this discount?",
    icon: <ExclamationCircleFilled />,
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      axios
        .delete(API_PATH.discount + `/${id}`)
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

export const showRecoveryAccount = (
  id,
  messageApi,
  getListAccount,
  setAccount
) => {
  confirm({
    title: "Are you sure recovery this account?",
    icon: <ExclamationCircleFilled />,
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      axios
        .post(API_PATH.account + `/recovery/${id}`)
        .then(() => {
          success("Deleted Successfully", messageApi);
        })
        .then(() => {
          getListAccount(setAccount);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

export const showDeleteAccountConfirm = (
  id,
  messageApi,
  getListAccount,
  setAccount
) => {
  confirm({
    title: "Are you sure delete this account?",
    icon: <ExclamationCircleFilled />,
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      axios
        .delete(API_PATH.account + `/${id}`)
        .then(() => {
          success("Deleted Succesfully", messageApi);
        })
        .then(() => {
          getListAccount(setAccount);
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

export const showDeletePermanently = (
  id,
  messageApi,
  getListAccount,
  setAccount
) => {
  confirm({
    title: "Are you sure delete permanently this account?",
    icon: <ExclamationCircleFilled />,
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      axios
        .delete(API_PATH.account + `/permanentlyDelete/${id}`)
        .then((res) => {
          console.log(res);

          success("Deleted Successfully", messageApi);
        })
        .then(() => {
          getListAccount(setAccount);
        })
        .catch((error) => console.error(error));
    },
    onCancel() {
      console.log("Cancel");
    },
  });
};

export const formatDate = (dateString) => {
  return moment(dateString).format("DD/MM/YYYY");
};
