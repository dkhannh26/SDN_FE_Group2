const baseURL = "http://localhost:3000/";

export const API_PATH = {
  user: baseURL + 'users',
  discount: baseURL + 'discount',
  voucher: baseURL + 'voucher',
  tshirt: baseURL + 'product/tshirt',
  shoes: baseURL + 'product/shoes',
  accessory: baseURL + 'product/accessory',
  pant: baseURL + 'product/pant',
  image: baseURL + 'images/upload',
  pantShirtSize: baseURL + 'size/pantShirtSize',
  shoesSize: baseURL + 'size/shoesSize',
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
