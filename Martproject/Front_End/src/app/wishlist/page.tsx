import Link from "next/link";
import React from "react";
import Image from "next/image";
import prod1 from "../assets/products/prod-1.png";
import deleteicon from "../assets/icons/delete-icon.png";


export default function WishList() {
  return (
    <>
      {/* WishList ======================================================= */}
      <div className="items-center">
        <div className="text-center space-x-96">
          <Link href="#">
            <a className="text-1xl left-5 ml-20">WishList(4)</a>
          </Link>
          <button className="border bottom-2 p-5 right-5">Move all to Bag</button>
        </div>

        <div className="flex justify-center items-center space-4">
          {/* card-1----------------------------------- */}
          <div className="w-[270px] h-[322px] m-5 text-center shadow-lg font-sans">
            {/* Percentage ---------- */}
            <div className="flex">
              <div className="w-[55px] h-[26px] my-2 flex items-center justify-center bg-red-500 text-white rounded-md text-xl font-semibold">
                -35%
              </div>
              {/* Delete icon -------------------- */}
              <Image
                className="mx-48 my-2"
                src={deleteicon}
                alt="Delete Icon"
                width={24}
                height={24}
              />
            </div>
            {/* image ----------------------- */}
            <Image
              className="mx-6 my-4"
              src={prod1}
              alt="Product Image"
              width={180}
              height={130}
            />
            <p>
              <button className="w-[270px] h-[40px] py-3 text-white bg-black text-center text-lg hover:opacity-70 focus:outline-none border-none">
                Add to Cart
              </button>
            </p>
            <div className="text-left">
              <h1 className="text-black text-[16px] font-medium my-2">
                Heading 1
              </h1>
              <p className="text-[#db4444] text-xl my-2">283 $</p>
            </div>
          </div>
          {/* card-1 Ends ----------------------------------- */}
        </div>
      </div>
      {/* WishList Ends ======================================================= */}
    </>
  );
}
