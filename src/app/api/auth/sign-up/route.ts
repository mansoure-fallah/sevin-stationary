import { NextApiRequest, NextApiResponse } from "next";
import connectToDB from "@/configs/db";
import UserModel, { UserInterface } from "@/models/user";
import { generateAccessToken, hashPassword } from "@/lib/utils/auth";
import { roles } from "@/lib/utils/constansts";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  connectToDB();
  try {
    if (req.method === "POST") {
      const { name, phone, email, password } = req.body;

      // Validation

      const isUserExist: UserInterface | null = await UserModel.findOne({
        $or: [{ name }, { email }, { phone }],
      });

      if (isUserExist) {
        return res.status(422).json({
          message: "The username or email or phone exist already !!",
        });
      }

      const hashedPassword = await hashPassword(password);
      const accessToken = generateAccessToken({ name });

      const users = await UserModel.find({});

      await UserModel.create({
        name,
        email,
        phone,
        password: hashedPassword,
        role: users.length > 0 ? roles.USER : roles.ADMIN,
      });

      res.setHeader("Set-Cookie", `token=${accessToken};path=/;httpOnly=true`);

      return res.status(201).json({
        message: "User signed up successfully :))",
      });
    } else {
      return res.status(405).json({
        message: "Method Not Allowed",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
