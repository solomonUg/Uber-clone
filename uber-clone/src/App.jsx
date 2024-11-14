import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import smallCar from "./assets/ride.png";
import asset_1 from "./assets/earner-illustra.webp";
import asset_2 from "./assets/u4b-square.webp"
import BarcodeDownloadApp from "./components/BarcodeDownloadApp";
const sectionBtn2Style = "text-black  border-b-[1px] pb-1 hover:border-black";
import barcodeUberApp from "./assets/Final-Download-Uber-App.webp";
import barcodeDriverApp from "./assets/QR_https___t.uber.com_download-driver-app.webp";



function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="flex justify-center w-full mb-20">
        <div className="w-[85%] flex flex-col h-full  mt-20">
          <h2 className="text-4xl font-medium">Suggestions</h2>
          <div className="flex w-[33%] bg-gray-100 p-4 mt-10 rounded-lg cursor-pointer">
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
        padding_textArea={"pl-32"}
        subtitle={
          "Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber."
        }
        alreadySignedButnStyle={sectionBtn2Style }
        label={"Already have an account? Sign in"}
      />
      <Section
        image={asset_2}
        title="The Uber you know, reimagined for business"
        padding_textArea={"pr-32"}
        opacity={"opacity-85"}
        subtitle={
          "Uber for Business is a platform for managing global rides and meals, and local deliveries, for companies of any size."
        }
        alreadySignedButnStyle={sectionBtn2Style }
        direction={"flex-row-reverse"}
        label={"Check out our solutions"}
      />
      <section className="w-full h-full bg-[#f6f6f6] flex justify-center">
        <div className="w-[85%] ">
        <h2 className="text-4xl font-semibold my-12">It’s easier in the apps</h2>
        <div className="flex justify-between mb-16 ">
        <BarcodeDownloadApp barcode={barcodeUberApp} titleText="Download the Uber app" />
        <BarcodeDownloadApp barcode={barcodeDriverApp} titleText="Download the Driver app"/>
        </div>
        </div>
      </section>
      <footer className="bg-black text-white w-full h-full">Footer</footer>
    </div>
  );
}

export default App;
