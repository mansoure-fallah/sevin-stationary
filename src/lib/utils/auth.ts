import { compare, hash } from "bcrypt";
import { sign, verify } from "jsonwebtoken";

const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword: string = await hash(password, 12);
  return hashedPassword;
};

const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isValid: boolean = await compare(password, hashedPassword);
  return isValid;
};

const generateAccessToken = (data: any): string => {
  const token: string = sign(
    { ...data },
    process.env.AccessTokenSecretKey as string,
    {
      expiresIn: "60s",
    }
  );
  return token;
};

const verifyAccessToken = (token: string): any | false => {
  try {
    const tokenPayload: any = verify(
      token,
      process.env.AccessTokenSecretKey as string
    );
    return tokenPayload;
  } catch (err) {
    console.log("Verify Access Token Error ->", err);
    return false;
  }
};

const generateRefreshToken = (data: any): string => {
  const token: string = sign(
    { ...data },
    process.env.RefreshTokenSecretKey as string,
    {
      expiresIn: "15d",
    }
  );
  return token;
};

export {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
};
