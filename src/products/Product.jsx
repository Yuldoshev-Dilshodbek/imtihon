import React, { useState } from 'react';
import { MdOutlineDepartureBoard } from 'react-icons/md';

const Product = ({ addToCart }) => {
  const [selectedColor, setSelectedColor] = useState('yellow');
  const items = [
    {
      id: 1,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      length: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id: 2,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      length: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id: 3,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      length: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
    {
      id: 4,
      name: "Мезофильная закваска Danisco CHOOZIT MM...",
      price: 1300,
      price1e: 1800,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLugOZwOLFTxjpAmC5XJuxIBqIijozWxdHCMLalPJR5XOL0bs6Y75Se0TSj1cjCAW_cc&usqp=CAU",
    },
  ];

  const product = items[0]; // Assuming you want to display the first item as the main product

  return (
    <div className="min-h-screen bg-gray-100 p-8 container">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-2">
            <div className="grid grid-cols-1 gap-2 mt-4">
              {items.slice(0, 3).map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.name}
                  className="w-32 border border-gray-300 rounded-lg"
                />
              ))}
            </div>
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-[490px] h-auto rounded-lg"
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
            <p className="text-2xl font-bold mb-4">Rs. {product.price1e}</p>
            <div className="flex items-center mb-4">
              <span className="flex text-yellow-500 mr-2">
                {'★★★★★'}
              </span>
              <span className="text-gray-600">(1 customer review)</span>
            </div>
            <p className="mb-4">
              Sitting at the top end of the Isolator spectrum is Black. The
              Kilburn is compact yet produces a clear midrange and extended
              highs for a sound that is both articulate and pronounced.
            </p>
            <div className="mb-4">
              <label className="mr-4">Size</label>
              <button className="border border-gray-300 px-4 py-2 rounded-lg mr-2">XL</button>
              <button className="border border-gray-300 px-4 py-2 rounded-lg">XXL</button>
            </div>
            <div className="mb-4">
              <label className="mr-4">Color</label>
              <button
                onClick={() => setSelectedColor('yellow')}
                className={`w-6 h-6 rounded-full border-2 mr-2 ${
                  selectedColor === 'yellow' ? 'border-black' : ''
                }`}
                style={{ backgroundColor: 'yellow' }}
              ></button>
              <button
                onClick={() => setSelectedColor('brown')}
                className={`w-6 h-6 rounded-full border-2 mr-2 ${
                  selectedColor === 'brown' ? 'border-black' : ''
                }`}
                style={{ backgroundColor: 'brown' }}
              ></button>
              <button
                onClick={() => setSelectedColor('blue')}
                className={`w-6 h-6 rounded-full border-2 ${
                  selectedColor === 'blue' ? 'border-black' : ''
                }`}
                style={{ backgroundColor: 'blue' }}
              ></button>
            </div>
            <div className="mb-4">
              <button onClick={() => addToCart(product)} className="bg-black text-white px-6 py-2 rounded-lg">
                Add To Cart
              </button>
            </div>
            <div className="text-sm text-gray-600">
              <p>SKU: 58091</p>
              <p>Category: Sofas</p>
              <p>Tags: Sofa, Chair, Home, Shop</p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <ul className="flex border-b border-gray-300 justify-evenly pb-4">
            <li className="mr-6">
              <a className="text-gray-600 hover:text-black" href="#description">
                Description
              </a>
            </li>
            <li className="mr-6">
              <a
                className="text-gray-600 hover:text-black"
                href="#additional-information"
              >
                Additional Information
              </a>
            </li>
            <li className="mr-6">
              <a className="text-gray-600 hover:text-black" href="#reviews">
                Reviews [5]
              </a>
            </li>
          </ul>
          <div id="description" className="mt-4">
            <p>
              Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
              portable stereo speaker takes the unmistakable look and sound of
              Marshall, unplugs the chords, and takes the show on the road.
            </p>
          </div>
          <div id="additional-information" className="mt-4">
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage-styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is compact, stout-hearted and
              yet a well-balanced audio machine boasting a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
            </p>
          </div>
          <div id="reviews" className="mt-4">
            <p>Customer Reviews</p>
          </div>
        </div>
      </div>
      <div className='flex gap-5 mt-10'>
        {items.slice(0, 2).map((item) => (
          <img
            key={item.id}
            className='w-[550px] h-96 rounded-lg'
            src={item.image}
            alt={item.name}
          />
        ))}
      </div>
      <div className='flex mt-10 flex-wrap justify-between rounded-lg'>
        {items.map((item) => (
          <div key={item.id} style={{ marginBottom: '20px' }}>
            <img src={item.image} alt={item.name} width="100%" />
            <h3 className='w-64'>{item.name}</h3>
            <p className='mt-2'>{item.price1e} руб.</p>
          </div>
        ))}
      </div>
      <button className='border-b border-black ml-[500px] mt-10 text-2xl'>Read More</button>
    </div>
  );
}

export default Product;
