import axios from "axios"
import { API_PATH } from "../config/api.config"
import { CART_URL } from "../config/url.config"
import { DISCOUNT_URL } from "../config/url.config"
import { MESSAGE } from "../config/message.config"

export const getListCart = (setCarts, setTotal) => {
    axios.get(API_PATH.cart)
        .then((res) => {
            setCarts(res.data)
            const amount = res.data?.map(cart => cart.tshirt.price * cart.quantity)
            setTotal(amount.reduce((a, b) => a + b, 0))
        })

        .catch(error => console.error(error))
}

export const getDiscount = (id, dayjs, form) => {
    axios.get(API_PATH.discount + `/${id}`)
        .then((res) => {
            const date = dayjs(res.data.expired_at);
            form.setFieldsValue({
                percent: res.data.percent,
                date: date,
            });
        })
}

export const createDiscount = (discount, navigate) => {
    axios.post(API_PATH.discount, discount)
        .then(
            navigate(DISCOUNT_URL.INDEX, {
                state: { message: MESSAGE.CREATE_SUCCESS }
            })
        )
        .catch(error => {
            console.log(error)
        })
}

export const editCart = (id, cart, setTotalAmount) => {
    axios.put(API_PATH.cart + `/${id}`, cart)
        .then((res) => {
            const updatedCart = res.data;
            const totalAmount = updatedCart.tshirt.price * updatedCart.quantity;
            setTotalAmount(totalAmount)
        })
        .catch(error => {
            console.log(error)
        })
}