import { requestPost } from "../utils/request";
import { LOGIN } from "../utils/endpoints";


// AUTH
export function fetchLogin(body) {
  console.log('--body--', body);
  return requestPost(LOGIN, body);
}

