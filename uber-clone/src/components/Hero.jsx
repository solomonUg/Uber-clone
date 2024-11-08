import { FaCar } from "react-icons/fa";
import { BiSolidPackage } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { FaCalendarDay } from "react-icons/fa6";
import { BiSolidTime } from "react-icons/bi";
import Button from "./Button";


export default function Hero() {
  return (
    <section className="w-full h-screen flex justify-center">
      <div className="w-[85%]  flex pt-20">
        <div className="w-[50%] ">
          <h1 className="text-[3rem] font-bold pr-20 ">
            Go anywhere with Uber
          </h1>
          <div className="flex w-[30%] justify-between mt-2 ">
            <div className="flex flex-col  items-center">
              <FaCar className="text-2xl " />{" "}
              <div className="font-medium">Ride</div>
            </div>
            <div className="flex flex-col  items-center">
              <BiSolidPackage className="text-2xl" />{" "}
              <div className="font-medium">Package</div>
            </div>
          </div>

          <div className="w-[70%] flex flex-col gap-3 pt-12 ">
            <div className="relative">
              <input
                className="outline-none px-8 h-12 bg-transparent bg-gray-100 text-black w-full focus:ring-2 focus:ring-black rounded-md"
                type="text"
                placeholder="Pickup location"
              />
              <div className="absolute right-2 bottom-3">
                <IoIosSend className="text-2xl" />
              </div>
            </div>
            <input
              className="outline-none px-8 h-12 bg-gray-100 bg-transparent text-black w-full  focus:ring-2 focus:ring-black rounded-md"
              type="text"
              placeholder="Dropoff location"
            />
            <div className="flex w-full  gap-3">
              <div className="relative w-[48%]">
                <input
                  className="outline-none w-[100%]  pl-8 h-12 bg-gray-100 bg-transparent text-black    focus:ring-2 focus:ring-black rounded-md "
                  type="text"
                  placeholder="Today"
                />
                <FaCalendarDay className="absolute bottom-4 left-2" />
              </div>
              <div className="relative w-[50%]">
              <input
                className="outline-none  w-[100%] pl-8 h-12 bg-gray-100 bg-transparent text-black  focus:ring-2 focus:ring-black rounded-md"
                type="text"
                placeholder="Now"
              />
              <BiSolidTime className="absolute bottom-4 left-2" />
              </div>
            </div>
          </div>
          <div className="pt-4">
          <Button label={"See prices"} className={"text-white bg-black px-7 py-3 rounded-xl font-medium hover:bg-opacity-75"} />
          </div>
        </div>
        <div className="w-[50%] bg-blue-950 text-white"> Map section</div>
      </div>
    </section>
  );
}
