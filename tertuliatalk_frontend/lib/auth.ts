import { jwtVerify } from 'jose';

const SECRET_KEY = 'JWTAuthenticationHIGHsecuredPasswordVVVp1OH7Xzyr';

export const verifyJwtToken = async (token: string) => {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY));
    return payload;
  } catch (error) {
    return null;
  }
};
