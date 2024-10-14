import axios from "axios"
import { API_PATH } from "../config/api.config"
import { DISCOUNT_URL } from "../config/url.config"
import { MESSAGE } from "../config/message.config"

export const getListAccount = (setAccounts) => {
    axios.get(API_PATH.account)
        .then((res) => {
            setAccounts(res.data)
        })
        .catch(error => console.error(error))
}

// export const getAccount = (id, form) => {
//     axios.get(API_PATH.account + `/${id}`)
//         .then((res) => {
//             form.setFieldsValue({
//                 username: res.data.username,
//                 date: date,
//             });
//         })
// }

export const createDiscount = (account, navigate) => {
    axios.post(API_PATH.account, account)
        .then(
            navigate(DISCOUNT_URL.INDEX, {
                state: { message: MESSAGE.CREATE_SUCCESS }
            })
        )
        .catch(error => {
            console.log(error)
        })
}

export const editDiscount = (id, account, navigate) => {
    axios.put(API_PATH.discount + `/${id}`, account)
        .then(
            navigate(DISCOUNT_URL.INDEX, {
                state: { message: MESSAGE.UPDATE_SUCCESS }
            })
        )
        .catch(error => {
            console.log(error)
        })
}