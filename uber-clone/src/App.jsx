import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import smallCar from "./assets/ride.png";
import asset_1 from "./assets/earner-illustra.webp";
import asset_2 from "./assets/u4b-square.webp";
import BarcodeDownloadApp from "./components/BarcodeDownloadApp";
import barcodeUberApp from "./assets/Final-Download-Uber-App.webp";
import barcodeDriverApp from "./assets/QR_https___t.uber.com_download-driver-app.webp";
import uberRiderIcon from "./assets/Rider-App-Icon_iOS.svg";
import uberDriverIcon from "./assets/Driver-App-Icon_iOS.svg";
import { IoLogoFacebook } from "react-icons/io";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import appStoreGoogleImg from "./assets/app-store-google-4d63c31a3e.svg";
import appStoreAppleImg from "./assets/app-store-apple-f1f919205b.svg"



const sectionBtn2Style = "text-black border-b-[1px] pb-1 hover:border-black";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="flex justify-center w-full mb-20">
        <div className="w-[85%] flex flex-col h-full  mt-20">
          <h2 className="text-4xl font-medium">Suggestions</h2>
          <div className="flex w-full lg:w-[33%] bg-gray-100 p-4 mt-10 rounded-lg cursor-pointer">
            <div>
              <p className="font-semibold">Ride</p>
              <p className="text-xs my-3 pr-8">
                Go anywhere with Uber. Request a ride, hop in, and go.
              </p>
              <button className="bg-white font-semibold px-3 py-1 rounded-3xl  transition ease-in-out delay-150 duration-300 hover:bg-gray-300">
                Details
              </button>
            </div>
            <div>
              <img src={smallCar} alt="car" />
            </div>
          </div>
        </div>
      </section>
      <Section
        image={asset_1}
        title="Drive when you want, make what you need"
        padding_textArea={"pl-0  sm:pl-32"}
        subtitle={
          "Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber."
        }
        alreadySignedButnStyle={sectionBtn2Style}
        direction={"flex-col-reverse md:flex-row"}
        label={"Already have an account? Sign in"}
      />
      <Section
        image={asset_2}
        title="The Uber you know, reimagined for business"
        padding_textArea={"pr-0  sm:pr-32"}
        opacity={"opacity-85"}
        subtitle={
          "Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size."
        }
        alreadySignedButnStyle={sectionBtn2Style}
        direction={"flex-col-reverse lg:flex-row-reverse"}
        label={"Check out our solutions"}
      />
      <section className="w-full h-full bg-[#f6f6f6] flex justify-center">
        <div className="w-[90%] lg:w-[85%]">
          <h2 className="text-3xl font-bold md:font-semibold md:text-4xl my-12">
            It’s easier in the apps
          </h2>
          <div className="flex flex-col gap-6 lg:flex-row justify-between mb-16">
            <BarcodeDownloadApp
              barcode={barcodeUberApp}
              uberImage={uberRiderIcon}
              titleText="Download the Uber app"
            />
            <BarcodeDownloadApp
              barcode={barcodeDriverApp}
              uberImage={uberDriverIcon}
              titleText="Download the Driver app"
            />
          </div>
        </div>
      </section>
      <footer className="bg-black text-white w-full h-full flex justify-center">
        <div className="w-[90%] lg:w-[85%] my-20">
          <h2 className="text-2xl my-8 cursor-pointer">Uber</h2>
          <h2 className="text-lg mb-6">Visit Help Center</h2>
          <div className="flex flex-col gap-10 lg:flex-row my-16 w-[85%] justify-between">
            <div>
              <h2 className="text-xl mb-4 font-medium">Company</h2>
              <ul className="flex flex-col gap-4">
                <li className="hover:text-gray-400 cursor-pointer">About us</li>
                <li className="hover:text-gray-400 cursor-pointer">Our offerings</li>
                <li className="hover:text-gray-400 cursor-pointer">Newsroom</li>
                <li className="hover:text-gray-400 cursor-pointer">Investors</li>
                <li className="hover:text-gray-400 cursor-pointer">Blog</li>
                <li className="hover:text-gray-400 cursor-pointer">Careers</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl mb-4 font-medium">Products</h2>
              <ul className="flex flex-col gap-4">
                <li className="hover:text-gray-400 cursor-pointer">Ride</li>
                <li className="hover:text-gray-400 cursor-pointer">Drive</li>
                <li className="hover:text-gray-400 cursor-pointer">Eat</li>
                <li className="hover:text-gray-400 cursor-pointer">Uber Freight</li>
                <li className="hover:text-gray-400 cursor-pointer">Gift cards</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl mb-4 font-medium">Global citizenship</h2>
              <ul className="flex flex-col gap-4">
                <li className="hover:text-gray-400 cursor-pointer">Safety</li>
                <li className="hover:text-gray-400 cursor-pointer">Diversity and Inclusion</li>
                <li className="hover:text-gray-400 cursor-pointer">Sustainability</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl mb-4 font-medium">Travel</h2>
              <ul className="flex flex-col gap-4">
                <li className="hover:text-gray-400 cursor-pointer">Reserve</li>
                <li className="hover:text-gray-400 cursor-pointer">Cities</li>
              </ul>
            </div>

          </div>
          {/* socials and locations */}
        <div className="flex flex-col gap-8 lg:flex-row justify-between">
          <div className="flex w-[90%] lg:w-[50%] justify-between items-center text-xl">
          <IoLogoFacebook />
          <FaXTwitter />
          <FaYoutube />
          <FaLinkedin />
          <FaInstagram/>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 w-[25%] font-medium ">
            <div className="flex items-center gap-1 text-lg cursor-pointer"><TbWorld/> <span>English</span></div>
            <div className="flex items-center gap-1 text-lg cursor-pointer"> <FaLocationDot /><span>Abuja</span> </div>
          </div>
        </div>
        <div className="flex  my-12 gap-4 items-center">
          <div  className="cursor-pointer"><img src={appStoreGoogleImg} alt="" className="w-32" /></div>
          <div className="cursor-pointer"><img src={appStoreAppleImg} alt="" className="w-32"/></div>
        </div>

        <div className="flex flex-col text-sm text-gray-400 lg:justify-between lg:flex-row">
          <div>© 2024 Snow Technologies Inc.</div>
            <ul className="flex gap-20 mt-20 lg:mt-0 lg:gap-10 ">
              <li className="hover:text-gray-700 cursor-pointer">Privacy</li>
              <li className="hover:text-gray-700 cursor-pointer">Accessibity</li>
              <li className="hover:text-gray-700 cursor-pointer">Terms</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
