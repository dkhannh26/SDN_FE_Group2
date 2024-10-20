import axios from "axios"
import { API_PATH } from "../config/api.config"
import { ORDER_URL } from "../config/url.config"
import { MESSAGE } from "../config/message.config"

export const getListOrder = (setOrders) => {
    axios.get(API_PATH.order)
        .then((res) => {
            setOrders(res.data)
        })
        .catch(error => console.error(error))
}

export const getOrder = (id, form) => {
    axios.get(API_PATH.order + `/${id}`)
        .then((res) => {
            form.setFieldsValue({
                percent: res.data.percent,
            });
        })
}

export const createOrder = (order, navigate) => {
    axios.post(API_PATH.order, order)
        .then(
            navigate(ORDER_URL.INDEX, {
                state: { message: MESSAGE.CREATE_SUCCESS }
            })
        )
        .catch(error => {
            console.log(error)
        })
}

export const editOrder = (id, order, navigate) => {
    axios.put(API_PATH.order + `/${id}`, order)
        .then(
            navigate(ORDER_URL.INDEX, {
                state: { message: MESSAGE.UPDATE_SUCCESS }
            })
        )
        .catch(error => {
            console.log(error)
        })
}

export const getOrderDetails = (id, setOrderDetails) => {
    axios.get(API_PATH.orderDetails + `/${id}`)
        .then((res) => {
            setOrderDetails(res.data)
        })
}

export const confirmOrder = (id, messageApi, getListOrder, setOrders) => {
    axios.put(API_PATH.confirmOrder + `/${id}`)
        .then(() => {
            success('Confirm Succesfully', messageApi)
        })
        .then(() => {
            getListOrder(setOrders)
        })
        .catch(error => console.error(error))
}

export const cancelOrder = (id, messageApi, getListOrder, setOrders) => {
    axios.put(API_PATH.cancelOrder + `/${id}`)
        .then(() => {
            success('Cancel Succesfully', messageApi)
        })
        .then(() => {
            getListOrder(setOrders)
        })
        .catch(error => console.error(error))
}

export const success = (message, messageApi) => {
    messageApi.open({
        type: 'success',
        content: message,
    });
};