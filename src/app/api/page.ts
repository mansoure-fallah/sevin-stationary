import { NextApiRequest, NextApiResponse } from "next";
import connectToDB from "@/configs/db";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToDB();
  return res?.json({ message: "Welcome to Next.js API" });
};

export default handler;
