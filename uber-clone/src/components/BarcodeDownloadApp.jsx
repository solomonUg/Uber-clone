import { FaArrowRightLong } from "react-icons/fa6";

export default function BarcodeDownloadApp({titleText, barcode, uberImage}) {
  return (
    <div className="group flex border-2 bg-white lg:w-[48%] lg:border-none p-5 cursor-pointer ">
      <div>
        <img src={barcode} alt="download uber app with barcode"  className="hidden lg:block"/>
        <img src={uberImage} alt="download uber app with barcode"  className=" lg:hidden"/>
      </div>
      <div className="flex flex-col justify-center px-4">
        <h2 className="text-2xl font-bold">{titleText}</h2>
        <p className="hidden lg:block">Scan to download</p>
      </div>
      <div className="flex items-center ml-6 group-hover:translate-x-5 translate-x-0 transition-transform duration-700">
        <FaArrowRightLong />
      </div>
    </div>
  );
}
