import Cookie from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { userAccessTokenName } from "../constants";

const tokenExpireTime = (token) => {
    const decoded = jwt_decode(token);
    const tokenExpireTime = decoded.exp;

    const tokenAvailableTime = (tokenExpireTime * 1000 - 5 * 3600 * 1000) - Date.now();

    return tokenAvailableTime > 0 ? true : false;
}

export const checkJWTToken = () => {
    const myCookie = Cookie.get(userAccessTokenName);

    if (!myCookie) {
        return false;
    }

    try {
        /** token expired logic */
        const isTokenExpired = !!myCookie ? tokenExpireTime(myCookie) : false;

        if (!isTokenExpired) {
            Cookie.remove(userAccessTokenName);
        }
    } catch (error) {
        Cookie.remove(userAccessTokenName);
        return false;
    } finally {
        if (tokenExpireTime(myCookie)) {
            return true;
        } else {
            return false;
        }
    }
}