import React from "react";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGlobe, BsCalendarDay, BsThreeDots } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  MdFlightLand,
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
  MdSlowMotionVideo,
} from "react-icons/md";

function Home() {
  return (
    <>
      {/* firstnav */}
      <div className="flex justify-around items-center  text-sm h-10 bg-[#121e7e]">
        <div className="flex gap-10">
          <a className="text-gray-200 hover:text-gray-100">
            Saturday,sep 10, 2022
          </a>

          <a href="#" className="px-2 text-gray-200 hover:text-gray-100">
            Hollywood,America
          </a>
          <a href="#" className="px-2 text-gray-200 hover:text-gray-100">
            Mon-fri:10am-5pm
          </a>
        </div>
        <div className="flex">
          <a href="#" className="px-2 text-gray-200 hover:text-gray-100">
            <ImFacebook className="mt-1" />
          </a>
          <a href="#" className="px-2 text-gray-200 hover:text-gray-100">
            <ImTwitter className="mt-1" />
          </a>
          <a href="#" className="px-2 text-gray-200 hover:text-gray-100">
            <GrInstagram className="mt-1" />
          </a>
          <a href="#" className="px-2 text-gray-200 hover:text-gray-100">
            <FaLinkedinIn className="mt-1" />
          </a>
        </div>
        <div className="flex">
          <a className="flex gap-1 px-2 text-gray-200 hover:text-gray-100">
            <BsGlobe className="mt-1" />
            English(US)
          </a>
          <a className="flex gap-1 px-2 text-gray-200 hover:text-gray-100">
            <BiUser className="mt-1" />
            Sreejith
          </a>
        </div>
      </div>
      {/* firstnav */}
      {/* secondnav */}
      <div className="flex justify-around items-center bg-white text-sm h-20">
        <div className="flex">
          <a className=" hover:text-gray-100 text-3xl font-extrabold text-blue-900">
            Travel Site
          </a>
        </div>
        <div className="flex gap-5">
          <a
            href="#"
            className="px-2  hover:text-gray-100 text-black font-semibold"
          >
            Home
          </a>
          <a
            href="#"
            className="px-2  hover:text-gray-100 text-black font-semibold"
          >
            My Bookings
          </a>
          <a
            href="#"
            className="px-2  hover:text-gray-100 text-black font-semibold"
          >
            About Us
          </a>
          <a
            href="#"
            className="px-2  hover:text-gray-100 text-black font-semibold"
          >
            Booking Support
          </a>
          <a
            href="#"
            className="px-2  hover:text-gray-100 text-black font-semibold"
          >
            Agent Login
          </a>
        </div>
      </div>
      {/* secondnav */}
      {/* thirdnav */}
      <div className=" justify-center ">
        <img
          className="h-96 w-full rounded-xl object-cover absolute bg-banner1"
          // src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        />
        <div className="flex justify-around  ">
          <div className="rounded-lg border border-white bg-white w-2/3 relative mt-80 h-28 shadow-md">
            <div className="flex gap-5 mt-2 px-2">
              <a className="px-2 flex gap-1 text-black font-semibold">
                <MdFlightLand className="mt-1" />
                Flights
              </a>
              <a href="#" className="px-2 flex text-black font-semibold">
                <MdOutlineRadioButtonChecked className="mt-1" />
                Round-trip
              </a>
              <a href="#" className="px-2 flex text-black font-semibold">
                <MdOutlineRadioButtonUnchecked className="mt-1" />
                One-way
              </a>
              <a href="#" className="px-2 flex text-black font-semibold">
                <MdOutlineRadioButtonUnchecked className="mt-1" />
                Multi-city
              </a>
              <a href="#" className="px-2 flex text-black font-semibold">
                Economy
                <RiArrowDropDownLine className="mt-1" />
              </a>
              <a href="#" className="px-2 flex text-black font-semibold">
                1 adult
                <RiArrowDropDownLine className="mt-1" />
              </a>
            </div>
            <div className="flex justify-around px-2 ">
              <button className="mt-6 w-60  rounded-md bg-[#f2f4ff] px-2 py-2.5 text-center text-sm font-medium">
                <span className="font-bold">COK</span> Cochin International
                Airport
              </button>
              <button className="mt-6 w-60  rounded-md bg-[#f2f4ff] px-2 py-2.5 text-center text-sm font-medium">
                <span className="font-bold">COK</span> Cochin International
                Airport
              </button>
              <button className="mt-6 w-48  rounded-md bg-[#f2f4ff] px-2 py-2.5 text-center text-sm font-medium">
                {/* <BsCalendarDay className="" /> */}
                Sat,Nov 12
              </button>
              <button className="mt-6 w-48  rounded-md bg-[#f2f4ff] px-2 py-2.5 text-center text-sm font-medium">
                {/* <BsCalendarDay className="" /> */}
                Sat,Nov 12
              </button>
              <button className="mt-6 w-auto rounded-md bg-[#1045a4] px-6 py-2.5 text-center text-sm font-medium">
                search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* thirdnav */}
      {/* fouthnav */}
      <div className="flex justify-center items-center mt-10">
        <a className=" hover:text-gray-100 text-2xl font-extrabold text-black">
          Choose Your
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a className=" hover:text-gray-100 text-5xl font-extrabold text-blue-900">
          Perfect Holiday
        </a>
      </div>
      <div className="flex justify-center items-center mt-5">
        <p className="text-sm font-bold text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia,
        </p>
      </div>
      <div className="">
        <div className="bg-white mt-28">
          <div className="flex justify-around w-3/4 mx-auto">
            <div
              className="w-60 h-60 bg-blue-300 rounded-full bg-img1"
              style={{
                // backgroundImage:
                  // "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
                backgroundSize: "cover",
              }}
            ></div>
            <div
              className="w-60 h-60 bg-blue-300  bg-img8 "
              style={{
                // backgroundImage:
                  // "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
                backgroundSize: "cover",
              }}
            >
              <div className="bg-black flex justify-around mt-48 px-2 py-2">
                <div className="w-32">
                  <div className="text-white font-normal">Museum of the</div>
                  <div className="text-white font-normal">Future</div>
                </div>
                <div className="w-20">
                  <div className="text-white font-normal">From</div>
                  <div className="text-white font-light">₹ 3222.22</div>
                </div>
              </div>
            </div>
            <div
              className="w-60 h-60 bg-blue-300 bg-sea "
              style={{
                // backgroundImage:
                  // "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
                backgroundSize: "cover",
              }}
            >
              <div className="bg-black flex justify-around mt-48 px-2 py-2">
                <div className="w-32">
                  <div className="text-white font-normal">Museum of the</div>
                  <div className="text-white font-normal">Future</div>
                </div>
                <div className="w-20">
                  <div className="text-white font-normal">From</div>
                  <div className="text-white font-light">₹ 3222.22</div>
                </div>
              </div>
            </div>
            <div
              className="w-60 h-60 bg-blue-300 bg-img6"
              style={{
                // backgroundImage:
                  // "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
                backgroundSize: "cover",
              }}
            >
              <div className="bg-black flex justify-around mt-48 px-2 py-2">
                <div className="w-32">
                  <div className="text-white font-normal">Museum of the</div>
                  <div className="text-white font-normal">Future</div>
                </div>
                <div className="w-20">
                  <div className="text-white font-normal">From</div>
                  <div className="text-white font-light">₹ 3222.22</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white flex justify-around mt-10">
          <div className="flex justify-around w-3/4 mx-auto">
            <div
              className="w-60 h-60 bg-blue-300  bg-img5 "
              style={{
                // backgroundImage:
                  // "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
                backgroundSize: "cover",
              }}
            >
              <div className="bg-black flex justify-around mt-48 px-2 py-2">
                <div className="w-32">
                  <div className="text-white font-normal">Museum of the</div>
                  <div className="text-white font-normal">Future</div>
                </div>
                <div className="w-20">
                  <div className="text-white font-normal">From</div>
                  <div className="text-white font-light">₹ 3222.22</div>
                </div>
              </div>
            </div>
            <div
              className="w-60 h-60 bg-blue-300  bg-img4 "
              style={{
                // backgroundImage:
                  // "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
                backgroundSize: "cover",
              }}
            >
              <div className="bg-black flex justify-around mt-48 px-2 py-2">
                <div className="w-32">
                  <div className="text-white font-normal">Museum of the</div>
                  <div className="text-white font-normal">Future</div>
                </div>
                <div className="w-20">
                  <div className="text-white font-normal">From</div>
                  <div className="text-white font-light">₹ 3222.22</div>
                </div>
              </div>
            </div>
            <div
              className="w-60 h-60 bg-blue-300 bg-img7  "
              style={{
                // backgroundImage:
                  // "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
                backgroundSize: "cover",
              }}
            >
              <div className="bg-black flex justify-around mt-48 px-2 py-2">
                <div className="w-32">
                  <div className="text-white font-normal">Museum of the</div>
                  <div className="text-white font-normal">Future</div>
                </div>
                <div className="w-20">
                  <div className="text-white font-normal">From</div>
                  <div className="text-white font-light">₹ 3222.22</div>
                </div>
              </div>
            </div>
            <div
              className="w-60 h-60 bg-blue-300 rounded-full bg-img12"
              style={{
                // backgroundImage:
                  // "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* fouthnav */}
      <div className="justify-center mt-20">
        <img
          className="h-96 w-full rounded-xl object-cover absolute bg-img8"
         // src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        />
        <div className="flex justify-center">
          <div className="rounded-lg border border-white bg-white w-1/2 relative mt-44 shadow-md">
            {/* <MdSlowMotionVideo className="mt-1 relative" src={44} />  */}
            <img
              className="h-96 w-full rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <a className=" hover:text-gray-100 text-2xl font-extrabold text-black">
          Choose Your
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a className=" hover:text-gray-100 text-5xl font-extrabold text-blue-900">
          Popular Flight Near You
        </a>
      </div>
      <div className="flex justify-center items-center mt-5">
        <p className="text-sm font-bold text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia,
        </p>
      </div>
      <div className="flex justify-center items-center mt-5 gap-4">
        <button className="mt-6 w-44 rounded-3xl bg-[#1045a4] px-6 py-2.5 text-center text-white text-sm font-medium">
          International
        </button>
        <button className="mt-6 w-44 rounded-3xl bg-white border px-6 py-2.5 text-center text-sm font-medium">
          Domestic
        </button>
      </div>
      {/* carousel */}
      <div className="flex mt-20 gap-5">
        <div
          className="w-60 h-60 bg-blue-300"
          style={{
            backgroundImage:
              "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-black flex justify-around mt-48 px-2 py-2">
            <div className="w-32">
              <div className="text-white font-normal">Museum of the</div>
              <div className="text-white font-normal">Future</div>
            </div>
            <div className="w-20">
              <div className="text-white font-normal">From</div>
              <div className="text-white font-light">₹ 3222.22</div>
            </div>
          </div>
        </div>
        <div
          className="w-60 h-60 bg-blue-300  "
          style={{
            backgroundImage:
              "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-black flex justify-around mt-48 px-2 py-2">
            <div className="w-32">
              <div className="text-white font-normal">Museum of the</div>
              <div className="text-white font-normal">Future</div>
            </div>
            <div className="w-20">
              <div className="text-white font-normal">From</div>
              <div className="text-white font-light">₹ 3222.22</div>
            </div>
          </div>
        </div>
        <div
          className="w-60 h-60 bg-blue-300  "
          style={{
            backgroundImage:
              "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-black flex justify-around mt-48 px-2 py-2">
            <div className="w-32">
              <div className="text-white font-normal">Museum of the</div>
              <div className="text-white font-normal">Future</div>
            </div>
            <div className="w-20">
              <div className="text-white font-normal">From</div>
              <div className="text-white font-light">₹ 3222.22</div>
            </div>
          </div>
        </div>
        <div
          className="w-60 h-60 bg-blue-300  "
          style={{
            backgroundImage:
              "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-black flex justify-around mt-48 px-2 py-2">
            <div className="w-32">
              <div className="text-white font-normal">Museum of the</div>
              <div className="text-white font-normal">Future</div>
            </div>
            <div className="w-20">
              <div className="text-white font-normal">From</div>
              <div className="text-white font-light">₹ 3222.22</div>
            </div>
          </div>
        </div>
        <div
          className="w-60 h-60 bg-blue-300  "
          style={{
            backgroundImage:
              "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-black flex justify-around mt-48 px-2 py-2">
            <div className="w-32">
              <div className="text-white font-normal">Museum of the</div>
              <div className="text-white font-normal">Future</div>
            </div>
            <div className="w-20">
              <div className="text-white font-normal">From</div>
              <div className="text-white font-light">₹ 3222.22</div>
            </div>
          </div>
        </div>
        <div
          className="w-60 h-60 bg-blue-300  "
          style={{
            backgroundImage:
              "url('https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg?lossless=false&auto=format&fit=crop')",
            backgroundSize: "cover",
          }}
        >
          <div className="bg-black flex justify-around mt-48 px-2 py-2">
            <div className="w-32">
              <div className="text-white font-normal">Museum of the</div>
              <div className="text-white font-normal">Future</div>
            </div>
            <div className="w-20">
              <div className="text-white font-normal">From</div>
              <div className="text-white font-light">₹ 3222.22</div>
            </div>
          </div>
        </div>
      </div>
      <BsThreeDots className="mt-1" />
      {/* carousel */}
      <div className="flex justify-center items-center mt-20">
        <a className=" hover:text-gray-100 text-2xl font-extrabold text-black">
          Choose Your
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a className=" hover:text-gray-100 text-5xl font-extrabold text-blue-900">
          Best Flight Booking Offers
        </a>
      </div>
      <div className="flex justify-center items-center mt-5">
        <p className="text-sm font-bold text-gray-300">
          When you book with us, You know you are bookin with the best in
          business
        </p>
      </div>
      <div className="flex justify-around px-32">
        <div
          className="w-60 h-60  mt-12"
          style={{
            backgroundImage:
              "url('https://cdn-icons-png.flaticon.com/512/6165/6165570.png')",
            backgroundSize: "cover",
          }}
        >
          <div className=" flex justify-around mt-48 px-2">
            <div className="w-auto">
              <div className="text-black font-extrabold mt-10 pl-5">
                Get 8% Cashback
              </div>
              <div className="text-black font-normal">
                On Flights with Travelsite
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-60 h-60  mt-12"
          style={{
            backgroundImage:
              "url('https://cdn-icons-png.flaticon.com/512/6165/6165570.png')",
            backgroundSize: "cover",
          }}
        >
          <div className=" flex justify-around mt-48 px-2">
            <div className="w-auto">
              <div className="text-black font-extrabold mt-10 pl-5">
               book a flight
              </div>
              <div className="text-black font-normal">
               get valuable vouchers
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-60 h-60  mt-12"
          style={{
            backgroundImage:
              "url('https://cdn-icons-png.flaticon.com/512/6165/6165570.png')",
            backgroundSize: "cover",
          }}
        >
          <div className=" flex justify-around mt-48 px-2">
            <div className="w-auto">
              <div className="text-black font-extrabold mt-10 pl-5">
               International
              </div>
              <div className="text-black font-normal">
                travel guidlines
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-60 h-60  mt-12"
          style={{
            backgroundImage:
              "url('https://cdn-icons-png.flaticon.com/512/6165/6165570.png')",
            backgroundSize: "cover",
          }}
        >
          <div className=" flex justify-around mt-48 px-2">
            <div className="w-auto">
              <div className="text-black font-extrabold mt-10 pl-5">
                flat 12% off on
              </div>
              <div className="text-black font-normal">
                flights via mobiwik
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-center mt-20">
        <img
          className="h-96 w-full rounded-xl object-cover absolute"
          src="https://blog.blacklane.com/wp-content/uploads/2019/05/Untitled-design-9.png"
        />
        <div className="flex justify-center items-center">
          <a className=" hover:text-gray-100 text-2xl font-extrabold text-white z-50 mt-16">
            Read the top
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a className=" hover:text-gray-100 text-5xl font-extrabold text-white z-50">
            Travel Reviews
          </a>
        </div>
        <div className="flex justify-center items-center mt-5">
          <p className="text-sm font-bold text-gray-300 z-50">
            When you book with us, You know you are bookin with the best in
            business ssdd hsbsf sids sidnsd sishdisd sddsuisdnd i
          </p>
        </div>
      </div>











      
      {/* footer */}

      <footer class="relative bg-black text-white pt-8 pb-6 mt-40">
        <div class="container mx-auto px-4 ">
          <div class="flex flex-wrap text-left lg:text-left">
            <div class="w-full lg:w-6/12 px-4">
              <h4 class="text-3xl fonat-semibold text-blueGray-700">
                Travel Site
              </h4>
              <h5 class="text-sm mt-0 mb-2 text-blueGray-600">
              Travelsite is a leading online travel agency<br/>
               providing competitive fares, cutting edge<br/> technology and best in class customer service.
              </h5>
              <div class="mt-6 lg:mb-0 mb-6"> travelsite@example.com</div>
              <div class="mt-1 lg:mb-0 mb-6"> 1 562 867 5309</div>
              <div class="mt-1 lg:mb-0 mb-6">Broadway & Morris St, New York</div>
              <div className="flex justify-around items-center pl-96">
                <div className="flex">
                  <div class="mt-20 lg:mb-0 mb-6"></div>
                </div>

                <div className="flex mt-20">
                  <a className="flex gap-1 px-2 text-white hover:text-gray-100">
                    <BsGlobe className="mt-1" />
                    English(US)
                  </a>
                  <a className="flex gap-1 px-2 text-white hover:text-gray-100">
                    <BiUser className="mt-1" />
                    USD
                  </a>
                  <a href="#" className="px-2 text-white hover:text-gray-100">
                    <ImFacebook className="mt-1" />
                  </a>
                  <a href="#" className="px-2 text-white hover:text-gray-100">
                    <ImTwitter className="mt-1" />
                  </a>
                  <a href="#" className="px-2 text-white hover:text-gray-100">
                    <GrInstagram className="mt-1" />
                  </a>
                  <a href="#" className="px-2 text-white hover:text-gray-100">
                    <FaLinkedinIn className="mt-1" />
                  </a>
                </div>
                <div className="flex ">
                  <a className="mt-20 pl-10 lg:mb-0 mb-6">Home</a>
                  <a className="mt-20 pl-2 lg:mb-0 mb-6">|</a>
                  <a className="mt-20 pl-2">Mybookings</a>
                  <a className="mt-20 pl-2 lg:mb-0 mb-6">|</a>
                  <a className="mt-20 pl-2 lg:mb-0 mb-6">AboutUs</a>
                  <a className="mt-20 pl-2 lg:mb-0 mb-6">|</a>
                  <a className="mt-20 pl-2 lg:mb-0 mb-6">BookingSupport</a>
                  <a className="mt-20 pl-2 lg:mb-0 mb-6">|</a>
                  <a className="mt-20 pl-2 lg:mb-0 mb-6">AgentLogin</a>
                  <a className="mt-20 pl-2 lg:mb-0 mb-6">|</a>
                </div>

            
              </div>
            </div>
            
            <div class="w-full lg:w-6/12 px-4">
              <div class="flex flex-wrap items-top mb-6">

              <div class="w-full lg:w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Our Service
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       // href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        Dubai Tours
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        //href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                       Singapore Tours
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        //href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                       Dubai Visa
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        //href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                       Extension
                      </a>
                      
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        //href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                      Kuala Lumpur
                      </a>
                      
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        //href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                     Tours
                      </a>
                      
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        //href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                     Dubai Packages
                      </a>
                      
                    </li>
                  </ul>
                </div>

                
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                  <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Best Selling Tours
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        //href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                      Evening Desert Safari
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        //href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                     Abu Dhabi City Tour
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        //href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                       Dubai Burj Khalifa
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       // href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                       Global Village Dubai
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       // href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                      Atlantis Aquaventure
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       // href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                      Dubai Desert Safari with Dune
                      </a>
                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       // href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                       Bashing
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div class="w-full lg:w-4/12 px-4">
                  <span class="block uppercase text-white-500 text-sm font-semibold mb-2">
                  Subscribe to our Newsletter
                  </span>
                  <ul class="list-unstyled">
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                       // href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                     <p>Do you want to receive <br/>latest news and promotions?</p>
                      </a>
                    </li>
                    
                    <li
                    className="form-control w-80">
                        
                           
                      
                        <div className="relative border-black text-white bg-black">
                            {/* <input type="text" placeholder="name" className="input  border-white text-white bg-grey w-1/2 pr-16 " /> */}
<div></div>
                        </div>
                        {/* <button className="btn btn-success  border-white text-white bg-blue w-1/2 ">Submit</button> */}

                    </li>
                    <li>
                      <a
                        class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >

                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-6 border-blueGray-300" />
          <div class="flex flex-wrap items-center md:justify-between justify-center">
            <div class="w-full md:w-4/12 px-4 mx-auto text-center">
              <div class="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2021</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  class="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                />{" "}
                Notus JS by
                <a
                  href="https://www.creative-tim.com?ref=njs-profile"
                  class="text-blueGray-500 hover:text-blueGray-800"
                >
                  Creative Tim
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;













