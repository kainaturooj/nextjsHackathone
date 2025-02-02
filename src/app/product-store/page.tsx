"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProductPage = () => {
  const [filtersVisible, setFiltersVisible] = useState(true);
  const [genderDropdownOpen, setGenderDropdownOpen] = useState(false);
  const [kidsDropdownOpen, setKidsDropdownOpen] = useState(false);
 

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <h1 className="text-xl font-bold">New (500)</h1>
      </header>
      <div className="flex">
        {/* Sidebar Filters */}
        {filtersVisible && (
          <aside className="w-1/4 bg-white p-4 shadow">
            <h2 className="font-bold mb-4">Filters</h2>
            <ul className="space-y-2">
              <li> <a href="#" className="text-gray-700">Shoes</a></li>
              <li> <a href="#" className="text-gray-700">Sports Bras</a></li>
              <li> <a href="#" className="text-gray-700">Tops & T-Shirts</a></li>
              <li> <a href="#" className="text-gray-700">Hoodies & Sweatshirts</a></li>
              <li> <a href="#" className="text-gray-700">Jackets</a></li>
              <li> <a href="#" className="text-gray-700">Trousers & Tights</a></li>
              <li> <a href="#" className="text-gray-700">Shorts</a></li>
              <li> <a href="#" className="text-gray-700">Tracksuits</a></li>
              <li> <a href="#" className="text-gray-700">Jumpsuits & Rompers</a></li>
              <li> <a href="#" className="text-gray-700">Skirts & Dresses</a></li>
              <li> <a href="#" className="text-gray-700">Socks</a></li>
              <li> <a href="#" className="text-gray-700">Accessories & Equipment</a></li>
            </ul>

            <div className="mt-6">
              {/* Gender Dropdown */}
              <div>
                <button
                  onClick={() => setGenderDropdownOpen(!genderDropdownOpen)}
                  className="flex items-center justify-between w-full font-bold mb-2 focus:outline-none">
                  Gender
                  <span className={genderDropdownOpen ? 'transform rotate-180' : ''}>
                    ▼
                  </span>
                </button>
                {genderDropdownOpen && (
                  <div className="space-y-4 pl-4">
                    <div>
                      <input type="checkbox" id="men" className="mr-2" />
                      <label htmlFor="men">Men</label>
                    </div>
                    <div>
                      <input type="checkbox" id="women" className="mr-2" />
                      <label htmlFor="women">Women</label>
                    </div>
                    <div>
                      <input type="checkbox" id="unisex" className="mr-2" />
                      <label htmlFor="unisex">Unisex</label>
                    </div>
                  </div>
                )}
              </div>

              {/* Kids Dropdown */}
              <div className="mt-6">
                <button
                  onClick={() => setKidsDropdownOpen(!kidsDropdownOpen)}
                  className="flex items-center justify-between w-full font-bold mb-2 focus:outline-none">
                  Kids
                  <span className={kidsDropdownOpen ? 'transform rotate-180' : ''}>
                    ▼
                  </span>
                </button>
                {kidsDropdownOpen && (
                  <div className="space-y-4 pl-4">
                    <div>
                      <input type="checkbox" id="boys" className="mr-2" />
                      <label htmlFor="boys">Boys</label>
                    </div>
                    <div>
                      <input type="checkbox" id="girls" className="mr-2" />
                      <label htmlFor="girls">Girls</label>
                    </div>
                  </div>
                )}
              </div>

              {/* Vertical Slider */}
              <div className="mt-6">
                <h3 className="font-bold mb-2">Price Range</h3>
                
                <div className="text-sm mt-2">
                  <span>₹0</span> - <span>₹5000</span>
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* Product Grid */}
        <main className="flex-1 p-4">
          <div className="flex justify-between items-center mb-4">
            
            <div>
              <label htmlFor="sort" className="mr-2">Sort By</label>
              <select id="sort" className="border border-gray-300 rounded px-2 py-1">
                <option value="">Default</option>
                <option value="price">Price</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product Cards */}
            <ProductCard
              title="Nike Air Force 1 Mid '07"
              price="₹10,795.00"
              imgSrc="/images/shoe_1-removebg.png"
              gender="Men's Shoes"
            />
            <ProductCard
              title="Nike Court Vision Low Next Nature"
              price="₹4,995.00"
              imgSrc="/images/shoe_1-removebg.png"
              gender="Men's Shoes"
            />
            <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/shoe_1-removebg.png"
              gender="Women's Shoes"
            />
             <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/shoe_1-removebg.png"
              gender="Women's Shoes"
            />
             <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/shoe_1-removebg.png"
              gender="Women's Shoes"
            />
             <ProductCard
              title="Nike Air Force 1 PLT.AF.ORM"
              price="₹8,695.00"
              imgSrc="/images/shoe_1-removebg.png"
              gender="Women's Shoes"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

interface ProductCardProps {
  title: string;
  price: string;
  imgSrc: string;
  gender: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imgSrc, gender }) => {
  return (
    <>
    <div className="bg-white shadow rounded overflow-hidden">
     
     <Link href="/product-detail">
    
      <Image
        src={imgSrc}
        alt={title}
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500">{gender}</p>
        <p className="text-xl font-bold mt-2">{price}</p>
      </div>
      </Link>
    </div>
    
    </>
  
  );
};

export default ProductPage;
