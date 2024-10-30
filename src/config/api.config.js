const baseURL = "http://localhost:3000/";

export const API_PATH = {
  user: baseURL + 'users',
  discount: baseURL + 'discount',
  voucher: baseURL + 'voucher',
  cart: baseURL + 'cart',
  order: baseURL + 'order',
  confirmOrder: baseURL + 'order/confirm',
  cancelOrder: baseURL + 'order/cancel',
  orderDetails: baseURL + 'order/details',
  pendingOrder: baseURL + 'order/pending',
  doneOrder: baseURL + 'order/done',
  payment: baseURL + 'payment'
}
export const PATH = {
  user: baseURL + "users",
  discount: baseURL + "discount",

  login: baseURL + "account/login",

  checkAuth: baseURL + "account/check-auth",

  register: baseURL + "account/register",

  forgotPassword: baseURL + "account/forgot-password",

  resetPassword: baseURL + "account/reset-password",

  updateProfile: baseURL + "account/update",

  profile: baseURL + "account",
};

