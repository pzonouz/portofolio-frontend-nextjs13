import axios from "axios";
import { BACKEND_URL } from "../Constants/Constants";

export const axiosClient = axios.create();

axiosClient.defaults.baseURL = BACKEND_URL;

// axiosClient.defaults.headers = {
//   "Access-Control-Allow-Origin": "*",
//   "Content-Type": "application/json",
// };
