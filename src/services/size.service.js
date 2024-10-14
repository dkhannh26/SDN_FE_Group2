// import axios from "axios"
// import { API_PATH } from "../config/api.config"
// import { SIZE_URL } from "../config/url.config"
// import { MESSAGE } from "../config/message.config"

// export const getListSize = (setSize) => {
//     axios.get(API_PATH.size)
//         .then((res) => {
//             setSize(res.data)
//         })
//         .catch(error => console.error(error))
// }

// export const getSize = (id, dayjs, form) => {
//     axios.get(API_PATH.size + `/${id}`)
//         .then((res) => {
//             const date = dayjs(res.data.expired_at);
//             form.setFieldsValue({
//                 percent: res.data.percent,
//                 date: date,
//             });
//         })
// }

// export const createSize = (size, navigate) => {
//     axios.post(API_PATH.size, size)
//         .then(
//             navigate(SIZE_URL.INDEX, {
//                 state: { message: MESSAGE.CREATE_SUCCESS }
//             })
//         )
//         .catch(error => {
//             console.log(error)
//         })
// }

// export const editSize = (id, size, navigate) => {
//     axios.put(API_PATH.size + `/${id}`, size)
//         .then(
//             navigate(SIZE_URL.INDEX, {
//                 state: { message: MESSAGE.UPDATE_SUCCESS }
//             })
//         )
//         .catch(error => {
//             console.log(error)
//         })
// }