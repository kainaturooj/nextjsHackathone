'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const ProductDetail = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12 bg-slat-400">
      {/* Image Section */}
      <div className='bg-slat-400 flex gap-11 ml-[230px]'>
      <div className="bg-gray-100 p-6 rounded-lg ">
        <Image
          src="/images/shoe_1-removebg.png" 
          alt="Nike Air Force 1"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Product Info Section */}
      <div className="max-w-md">
        <h1 className="text-2xl font-bold">Nike Air Force 1</h1>
        <h2 className="text-xl font-semibold text-gray-600">PLT.AF.ORM</h2>
        <p className="mt-4 text-gray-600">
          Turn style on its head with the crafted take on the Air Jordan 1 Mid. Its "inside-out" inspired construction,
          including unique layering and exposed foam accents, up the ante on this timeless Jordan Brand silhouette.
          Details from the deco stitching on the Swoosh add coveted appeal, while the unexpected mix of materials and aged
          midsole aesthetic give the sneaker an artisan finish.
        </p>
        
        <p className="mt-6 text-xl font-bold">₹ 8 695.00</p>

        <Link href="/product-cart">
        <Button className="mt-4 bg-black text-white px-6 py-2 rounded-lg flex items-center gap-2">
          🛒 Add to Cart
        </Button>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ProductDetail;
