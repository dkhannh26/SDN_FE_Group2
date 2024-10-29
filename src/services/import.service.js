import axios from "axios";
import { API_PATH } from "../config/api.config";
import { DISCOUNT_URL, IMPORT_URL } from "../config/url.config";
import { MESSAGE } from "../config/message.config";

export const getListImport = (setImports) => {
  axios
    .get(API_PATH.import + `/list`)
    .then((res) => {
      setImports(
        res.data.map((item, index) => ({
          ...item,
          key: index,
        }))
      );
    })
    .catch((error) => console.error(error));
};

export const getDiscount = (id, dayjs, form) => {
  axios.get(API_PATH.discount + `/${id}`).then((res) => {
    const date = dayjs(res.data.expired_at);
    form.setFieldsValue({
      percent: res.data.percent,
      date: date,
    });
  });
};

export const createImport = (importList, navigate) => {
  axios
    .post(API_PATH.import + `/createDetail`, importList)
    .then(
      navigate(IMPORT_URL.INDEX, {
        state: { message: MESSAGE.CREATE_SUCCESS },
      })
    )
    .catch((error) => {
      console.log(error);
    });
};

export const editDiscount = (id, discount, navigate) => {
  axios
    .put(API_PATH.discount + `/${id}`, discount)
    .then(
      navigate(DISCOUNT_URL.INDEX, {
        state: { message: MESSAGE.UPDATE_SUCCESS },
      })
    )
    .catch((error) => {
      console.log(error);
    });
};

export const getDetailImport = (setImportDetail, _id) => {
  axios.get(API_PATH.import + `/${_id}`).then((res) => {
    res.data.forEach((e) => {
      console.log(e);
    });
    setImportDetail(
      res.data.map((item, index) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        key: index,
      }))
    );
  });
};

export const confirmImport = (_id, navigate) => {
  axios
    .put(API_PATH.import + `/${_id}`)
    .then(
      navigate(IMPORT_URL.INDEX, {
        state: { message: MESSAGE.UPDATE_SUCCESS },
      })
    )
    .catch((error) => {
      console.log(error);
    });
};
