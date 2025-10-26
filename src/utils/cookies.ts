// utils/cookies.ts
import Cookies from 'js-cookie';

import {
  ACCESS_TOKEN_EXPIRY_KEYWORD,
  ACCESS_TOKEN_KEYWORD,
} from "./appConstants";
import { getCookie } from './helpers';
interface MyToken {
  exp?: number;
  iat?: number;
  iss?: string;
  sub?: string;
  unique_name: string;
}

/**
 * Save authentication tokens to cookies
 * @param accessToken - The JWT access token
 * @param refreshToken - The refresh token
 */
export const setSession = (accessToken: string, refreshToken: string) => {
  Cookies.set('accessToken', accessToken, { expires: 7, secure: true });
  Cookies.set('refreshToken', refreshToken, { expires: 7, secure: true });
};

/**
 * Retrieve the session from cookies
 * @returns Parsed user data and tokens or null if session doesn't exist
 */
export const getSession = () => {
  const accessToken = Cookies.get('accessToken');
  if (!accessToken) return null;

  const user = parseJwt(accessToken);
  return user ? { accessToken, user } : null;
};

/**
 * Clear session by removing cookies
 */
export const removeSession = (clearLocalStore: boolean = true) => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  if (clearLocalStore) {
    localStorage.clear();
  }
};

/**
 * Decode JWT token to extract user information
 * @param token - JWT token string
 * @returns Parsed user object or null if token is invalid
 */
const parseJwt = (token: string) => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Failed to parse JWT:', error);
    return null;
  }
};

// return the token from the session storage
export const getToken = () => {
  try {
    let accessToken = "";
    const cookieString = getCookie(ACCESS_TOKEN_KEYWORD);
    if (cookieString) {
      const decodedTokenObj = atob(cookieString);
      const tokenObjs = decodedTokenObj.split("#");
      const jwtAccessToken = tokenObjs[2];

      if (jwtAccessToken) accessToken = jwtAccessToken;
    }

    return accessToken;
  } catch (err) {
    console.info("Error:", err);
  }
};