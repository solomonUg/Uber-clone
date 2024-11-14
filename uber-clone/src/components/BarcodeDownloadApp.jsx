import { FaArrowRightLong } from "react-icons/fa6";

export default function BarcodeDownloadApp({titleText, barcode}) {
  return (
    <div className="group flex bg-white w-[48%] p-5 cursor-pointer ">
      <div>
        <img src={barcode} alt="download uber app with barcode" />
      </div>
      <div className="flex flex-col justify-center px-4">
        <h2 className="text-2xl font-bold">{titleText}</h2>
        <p>Scan to download</p>
      </div>
      <div className="flex items-center ml-6 group-hover:translate-x-5 translate-x-0 transition-transform duration-700">
        <FaArrowRightLong />
      </div>
    </div>
  );
}
