
import { FC } from "react";
import Image from "next/image"
import Link from "next/link";

const CartPage: FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-5xl mx-auto p-4 bg-white shadow-md rounded-md">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Free Delivery</h2>
          <p className="text-sm text-gray-600">Applies to orders of ₹14,000.00 or more. <a href="#" className="text-blue-500 underline">View details</a></p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Bag Section */}
          <div className="flex-1 md:mr-6">
            <h3 className="text-xl font-semibold mb-4">Bag</h3>
            
            {/* Product 1 */}
            <div className="flex items-center mb-6">
              <Image width={50} height={50} src="/images/cloth_1-men.png" alt="Nike Dri-FIT ADV TechKnit Ultra" className="w24 h-24 object-cover rounded" />
              <div className="ml-4 flex-1">
                <h4 className="text-lg font-medium">Nike Dri-FIT ADV TechKnit Ultra</h4>
                <p className="text-sm text-gray-600">Men's Short-Sleeve Running Top</p>
                <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
                <p className="text-sm text-gray-600">Size: L</p>
                <p className="text-sm text-gray-600">Quantity: 1</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold mt-[-50px]">MRP: ₹3,895.00</p>
                <button className="text-red-500 hover:text-red-700 mt-2">🗑️ </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex items-center">
              <Image width={50} height={50} src="/images/cloth_1-women.png" alt="Nike Air Max 97 SE" className="w24 h-24 object-cover rounded" />
              <div className="ml-4 flex-1">
                <h4 className="text-lg font-medium">Nike Air Max 97 SE</h4>
                <p className="text-sm text-gray-600">Men's Shoes</p>
                <p className="text-sm text-gray-600">Flat Pewter/Light Bone/Black/White</p>
                <p className="text-sm text-gray-600">Size: 8</p>
                <p className="text-sm text-gray-600">Quantity: 1</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">MRP: ₹16,995.00</p>
                <button className="text-red-500 hover:text-red-700 mt-2">🗑️ </button>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gray-100 p-4 rounded-md w-full md:w-80 mt[-100px] mb[500px] relative bottom-[80px] md:mt-0">
            <h3 className="text-xl font-semibold mb-4">Summary</h3>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-600">Subtotal</span>
              <span className="text-sm font-medium">₹20,890.00</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-600">Estimated Delivery & Handling</span>
              <span className="text-sm font-medium">Free</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="text-lg font-semibold">Total</span>
              <span className="text-lg font-semibold">₹20,890.00</span>
            </div>
            <Link href="/check-out">
            <button className=" mt-[50px] bg-black text-white py-2 w-full rounded-md hover:bg-gray-800">Member Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;



