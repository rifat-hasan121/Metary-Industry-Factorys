import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions";
import AddProductForm from "./components/AddProductForm";

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);
  console.log("this is session",session);

  if (!session?.user?.email) {
    redirect("/login");
  }
  return (
    <div className="min-h-screen ">
      <div className=" bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Add New Product
        </h1>
        <AddProductForm />
      </div>
    </div>
  );
}
