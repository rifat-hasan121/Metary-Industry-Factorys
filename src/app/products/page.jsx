"use server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
export default async function ServicesCards() {
  // const res = await fetch("/services.json");
  const serviceCollection = dbConnect(collectionNameObj.serviceCollection);
  const data = await serviceCollection.find({}).toArray();
  return (
    <div className="text-center py-16">
      <h3 className="text-orange-500 text-xl md:text-2xl lg:text-5xl font-bold">
        Our Services
      </h3>
      <p className="text-gray-500 mb-8">
        Explore our wide range of professional services designed to meet your{" "}
        <br />
        needs. Quality, reliability, and satisfaction guaranteed.
      </p>
      <div className="grid grid-cols-12 gap-4 container mx-auto">
        {data.map((item) => {
          return (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-4 p-4 h-full border"
              key={item._id}
            >
              <figure className="w-full h-3/4 flex justify-center items-center">
                <Image
                  className="w-full h-full object-fit"
                  src={item.img}
                  width={314}
                  height={108}
                  alt={item.title}
                />
              </figure>
              <div className="flex justify-between items-center mt-4">
                <div>
                  <h2 className="font-bold text-xl">{item.title}</h2>
                  <p className="font-bold text-xl text-orange-500">
                    Price : ${item.price}
                  </p>
                </div>
                <div>
                  <Link
                    href={`/services/${item._id}`}
                    className="text-orange-500"
                  >
                    <div className="flex items-center gap-2  bg-orange-500 text-white px-4 py-2 rounded">
                      <div>
                        <button className="text-xl">Details</button>
                      </div>
                      <div>
                        <FaArrowRight />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
