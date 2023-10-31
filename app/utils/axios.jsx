import axios from "axios";
import { BACKEND_URL } from "../Constants/Constants";

export const axiosClient = axios.create();

axiosClient.defaults.baseURL = BACKEND_URL;
