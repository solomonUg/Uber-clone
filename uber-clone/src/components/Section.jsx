import Button from "./Button";

export default function Section({
  title,
  subtitle,
  image,
  alreadySignedButnStyle,
  direction,
  padding_textArea,
  opacity,
  label,
}) {
  return (
    <section className="w-full h-full  flex justify-center lg:my-32">
      <div className={`w-[90%] sm:w-[85%]  flex  ${direction} `}>
        <div className="w-[100%]  sm:w-[50%] h-full ">
          <img src={image} alt="man-driving" />
        </div>
        <div
          className={`w-full my-6 sm:w-[50%] h-full flex items-center justify-center  ${padding_textArea}`}
        >
          <div>
            <h2 className={`font-bold text-4xl lg:text-6xl lg:font-medium ${opacity}`}>{title}</h2>
            <p className="my-9">{subtitle}</p>
            <div className="flex gap-4 items-center">
              <Button
                label={"Get Started"}
                style={
                  "text-white transition-all ease-in bg-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-75"
                }
              />
              <Button label={label} style={alreadySignedButnStyle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
