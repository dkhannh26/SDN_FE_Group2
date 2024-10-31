import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import axios from "axios";
import moment from "moment";
const { confirm } = Modal;

export const showDeleteConfirm = (id, messageApi, getList, setItem, URL) => {
  confirm({
    title: "Are you sure delete?",
    icon: <ExclamationCircleFilled />,
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      axios
        .delete(URL + `/${id}`)

        .then(() => {
          success("Deleted Succesfully", messageApi);
        })
        .then(() => {
          getList(setItem);
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
