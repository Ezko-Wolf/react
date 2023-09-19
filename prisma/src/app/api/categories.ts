import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

export default async function categoriesApi(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const categories = await prisma.categoria.findMany();

  res.status(200).json(categories);
}
