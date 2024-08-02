import React from "react";
import { IoPeopleSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'
import Modal from "https://cdn.skypack.dev/react-modal@3.16.1";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '80%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '1px 2px #888888',
  },
};

const Header = ({ length, cart }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex justify-between container items-center">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to={"/"}>
          <a
            href="#"
            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
            aria-current="page"
          >
            Home
          </a>

          </Link>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Shop
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          >
            Contact
          </a>
        </li>
      </ul>
      <ul className="flex gap-10 items-center">
        <li><IoPeopleSharp /></li>
        <li><CiSearch /></li>
        <li><CiHeart /></li>
        <li>
          <div>
            <button onClick={openModal} className="bg-white px-4 py-3 rounded border-2 shadow-md shadow-red-600 hover:bg-gray-200">
              <BsCart2 />{length}
            </button>

            <div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Cart Modal"
                className="w-[650px] mt-16 ml-auto mr-auto border-2 border-black"
              >
                <div className="bg-yellow-300">
                  <button onClick={closeModal} className="relative float-right text-red-600 pr-2 font-bolder text-xl">X</button>
                  <h2 className="text-center text-lg">Cart Items</h2>
                  <div >
                    {cart.length > 0 ? (
                      <ul className="">
                        {cart.map((item, index) => (
                          <li key={index} className="flex justify-between items-center p-2 border-b border-gray-200">
                            <span><img className="rouded-lg w-24" src={item.image} alt="" /></span>
                            <span>{item.name}</span>
                            <span>{item.price}rubl</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-center">Your cart is empty.</p>
                    )}
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
