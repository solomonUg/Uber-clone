import { FaCar } from "react-icons/fa";
import { BiSolidPackage } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { FaCalendarDay } from "react-icons/fa6";
import { BiSolidTime } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import { FaSquareFull } from "react-icons/fa";
import Button from "./Button";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import rideUberImg from "../assets/Ride-with-Uber.webp";

export default function Hero() {
  const [pickUpLocation, setPickUp] = useState("");

  const [dropOffLocation, setDropOff] = useState("");

  console.log(dropOffLocation);

  function handleCancelPickUp() {
    setPickUp("");
  }

  function CancelDropOff() {
    setDropOff("");
  }

  return (
    <section className="bg-black text-white w-full flex justify-center lg:bg-white lg:text-black">
      <div className="w-[90%] lg:w-[85%] flex  flex-col lg:flex-row pt-20">
        <div className="w-full lg:w-[50%] ">
          <h1 className="text-[2.2rem] lg:text-[3rem] font-bold lg:pr-20 ">
            Go anywhere with Uber
          </h1>
          <div className="hidden lg:flex w-[30%] justify-between mt-2 ">
            <div className="flex flex-col  items-center">
              <FaCar className="text-2xl " />
              <div className="font-medium">Ride</div>
            </div>
            <div className="flex flex-col  items-center">
              <BiSolidPackage className="text-2xl" />
              <div className="font-medium">Package</div>
            </div>
          </div>

          <div className="w-full  lg:w-[70%] flex flex-col gap-3 pt-12  relative bottom-4">
            <div className="relative bg-gray-100 rounded-md">
              <input
                className="outline-none px-8 h-12 bg-transparent  text-black w-full focus:ring-2 focus:ring-black rounded-md"
                type="text"
                placeholder="Pickup location"
                value={pickUpLocation}
                onChange={(e) => setPickUp(e.target.value)}
              />
              <div className="absolute right-2 bottom-3">
                {pickUpLocation == "" ? (
                  <IoIosSend className=" text-black text-2xl cursor-pointer" />
                ) : (
                  <MdCancel
                    className="text-xl"
                    onClick={() => handleCancelPickUp()}
                  />
                )}
              </div>
              <div className="absolute top-5 left-2  ">
                <FaCircle className="text-black lg:text-black text-[9px]" />
              </div>
            </div>
            <div className="bg-gray-100 rounded-md relative">
              <input
                className="outline-none px-8 h-12  bg-transparent text-black w-full  focus:ring-2 focus:ring-black rounded-md"
                type="text"
                placeholder="Dropoff location"
                value={dropOffLocation}
                onChange={(e) => setDropOff(e.target.value)}
              />
              <div className="absolute right-2 top-[13px] ">
                {dropOffLocation !== "" ? (
                  <MdCancel
                    className="text-xl"
                    onClick={() => CancelDropOff()}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="absolute top-5 left-2 ">
                <FaSquareFull className="text-black lg:text-black text-[9px]" />
              </div>
            </div>
            <div className="hidden lg:flex w-full  gap-3">
              <div className="relative w-[48%] bg-gray-100 rounded-md">
                <input
                  className="outline-none w-[100%]  pl-8 h-12 bg-transparent text-black    focus:ring-2 focus:ring-black rounded-md "
                  type="text"
                  placeholder="Today"
                />
                <FaCalendarDay className="absolute bottom-4 left-2" />
              </div>
              <div className="relative w-[50%]">
                <input
                  className="outline-none  w-[100%] pl-8 h-12 bg-gray-100  text-black  focus:ring-2 focus:ring-black rounded-md"
                  type="text"
                  placeholder="Now"
                />
                <BiSolidTime className="absolute bottom-4 left-2" />
              </div>
            </div>
            <div className="bg-white w-[1px] h-11 lg:bg-black absolute left-3 top-[80px]"></div>
          </div>
          <div className="pt-4">
            <Button
              label={"See prices"}
              style={
                "text-black bg-white lg:text-white lg:bg-black px-7 py-3 rounded-xl font-medium hover:bg-opacity-75"
              }
            />
          </div>
        </div>
        <div className=" hidden lg:flex w-[50%] h-screen bg-blue-200 text-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56538.812290538015!2d-2.6254061869155163!3d7.4576745936347635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sgh!4v1730405724714!5m2!1sen!2sgh"
            className="w-full border-4 border-black rounded-md shadow-3xl"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="my-16 lg:hidden">
          <img src={rideUberImg} alt="Ride with Uber" />
        </div>
      </div>
    </section>
  );
}
