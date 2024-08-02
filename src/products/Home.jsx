import React from "react";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import divan1Img from "../assets/images/divan1.svg";
import divan2Img from "../assets/images/divan2.svg";
import divan3Img from "../assets/images/divan3.svg";

const Home = ({ addToCart }) => {
  return (
    <React.Fragment>
      <main>
        <section className="section-one">
          <div className="container">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[64px] font-semibold">
                  Rocket single <br />
                  seater
                </h1>
                <a
                  className="text-[20px] underline hover:text-red-300"
                  href="#"
                >
                  Shop Now
                </a>
              </div>
              <div>
                <img className="w-[600px]" src={divan1Img} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="section-two">
          <div className="container flex items-center">
            <div>
              <img className="mt-[10rem]" src={divan3Img} alt="" />
              <div className="-mt-[7rem] ml-[10rem]">
                <h3 className="text-[30px] font-semibold">Side table</h3>
                <p className="underline">
                  <a href="#">View More</a>
                </p>
              </div>
            </div>
            <div>
              <img className="mt-[10rem]" src={divan2Img} alt="" />
              <div className="-mt-[7rem] ml-[10rem]">
                <h3 className="text-[30px] font-semibold">Side table</h3>
                <p className="underline">
                  <a href="#">View More</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="container">
            <div className="text-center">
              <h2 className="text-[40px] font-semibold">Top Picks For You</h2>
              <p className="opacity-70 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                sint quasi et ducimus cupiditate eaque expedita, laboriosam nam
                suscipit deserunt!
              </p>
            </div>
            <Link to={"/product"}>
              <div className="flex items-center justify-between">
                <div>
                  <img
                    src="data:image/jpeg;base64,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
                            efez4H9CNHJYWrUm73Cz2mnfrcK9Ff0n3wAAABzfpB6F2e2Wmhaqs6qnQxMWEXFQliTx1jpxb06bmsx0gAxirUYxFqJACOItQxFqJACOItSGItSJACOItSGItSJACOItSGItSJACOTWpDJrUiQAjk1qQya1IkAI5NakYya1LcTAEMnHUtwyUdS3EwBDJR1LcMlHUtxMAQyUdS3DJR1LcTAEMjHUtwyMdS3EwBz+DfQ2x0LZUt1KEo16qnjPHk4vKSUptRbuTbimdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k="
                    alt=""
                  />
                  <div>
                    <p>Trenton modular sofa-3</p>
                    <h5>Rs. 25,000.00</h5>
                  </div>
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguEeQw9ZxpyhG9O4F-neigdMCtYCFlT3OCEU6cYu0qACV5K-UuOJVWZmSGiqLtcNaH8o&usqp=CAU"
                    alt=""
                  />
                  <div className="pt-10">
                    <p>Granite dining table with dining chair</p>
                    <h5>Rs. 25,000.00</h5>
                  </div>
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4N9xqFRdURTmxsM-96BONRHqaBozKS4SRNuRvShJZs0nbPvcZ_MUv1mPlgi7NwPBjxw&usqp=CAU"
                    alt=""
                  />
                  <div>
                    <p>Outdoor bar table and stool</p>
                    <h5>Rs. 25,000.00</h5>
                  </div>
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4N9xqFRdURTmxsM-96BONRHqaBozKS4SRNuRvShJZs0nbPvcZ_MUv1mPlgi7NwPBjxw&usqp=CAU"
                    alt=""
                  />
                  <div>
                    <p>Plain console with teak mirror</p>
                    <h5>Rs. 25,000.00</h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
      <section className="section-three mt-[10rem]">
        <div className="container flex justify-between items-center">
          <div>
            <img
              className="w-[700px]"
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </div>
          <div className="text-center">
            <h6 className="text-[25px]">New Arivalls</h6>
            <h1 className="font-bold text-[50px]">Asgaard sofa</h1>
            <div className="mt-4">
              <button className="border border-black h-[35px] w-[150px]">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[15rem]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[40px] font-semibold">Our Blogs</h2>
            <p className="opacity-75 mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              error.
            </p>
          </div>
          <div className="flex justify-between mt-20">
            <div className="w-[380px] h-[540px]">
              <img
                className="w-[380px]"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div className="text-center mt-4">
                <p className="text-[20px]">
                  Going all-in with millenail design
                </p>
                <p className="mt-4">
                  <a href="" className="underline font-semibold text-[20px] ">
                    Read More
                  </a>
                </p>
              </div>
            </div>

            <div className="w-[380px] h-[540px]">
              <img
                className="w-[380px]"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div className="text-center mt-4">
                <p className="text-[20px]">
                  Going all-in with millenail design
                </p>
                <p className="mt-4">
                  <a href="" className="underline font-semibold text-[20px] ">
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="w-[380px] h-[540px]">
              <img
                className="w-[380px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw7p2GSN6YX1Pt-SgBbxQ1bwFNkP3jyBsnOA&s"
                alt=""
              />
              <div className="text-center mt-4">
                <p className="text-[20px]">
                  Going all-in with millenail design
                </p>
                <p className="mt-4">
                  <a href="" className="underline font-semibold text-[20px] ">
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container">
          <div className="text-center">
            <h2 className="text-[40px] font-semibold">Our Instagram</h2>
            <p className=" mt-2">Follow our store on Instagram</p>
            <div>
              <button className="w-[140px] h-[30px] mt-8 border border-black">
                Follow Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
