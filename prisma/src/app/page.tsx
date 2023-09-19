import React from "react";
import { PrismaClient } from "@prisma/client";
import { categorias } from "../../prisma/data/catgeorias";

interface Page {
  categories: object[];
}

export default function Page({ categories }: Page) {
  return (
    <ol>
      {categorias.map((category, idx) => (
        <li key={idx}>{JSON.stringify(category)}</li>
      ))}
    </ol>
  );
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categories = await prisma.categoria.findMany();

  return {
    props: {
      categories,
    },
  };
};
