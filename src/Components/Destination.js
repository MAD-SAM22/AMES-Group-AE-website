import DestinationData from "./DestinationData";
import "./DestinationStyle.css";
import imgd from "../assets/1.jpg";
import imge from "../assets/2.jpg";
import imgf from "../assets/3.jpg";
import imgg from "../assets/4.jpg";
const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1> Your Next Destination Awaits! </h1>
        <p>From Dubai to the world—discover your perfect immigration pathway.</p>
        
        <DestinationData
          className="first-desc"
          heading="Sydney & Melbourne"
          text="Experience life in Australia's largest cities, known for their excellent universities, diverse job markets, and high quality of life. Sydney offers iconic landmarks, beautiful beaches, and a thriving business district, while Melbourne is renowned for its culture, education, and healthcare sectors. Both cities provide excellent opportunities for international students and skilled professionals."
          img1={imgd}
          img2={imge}
        />

        <DestinationData
          className="second-desc"
          heading="Brisbane & Gold Coast"
          text="Queensland's premier cities offer a perfect blend of opportunity and lifestyle. Brisbane, with its growing tech sector and excellent universities, provides a more relaxed pace of life compared to Sydney and Melbourne. The Gold Coast combines beautiful beaches with emerging business districts, making it ideal for both study and work. Both cities offer great weather year-round and lower living costs."
          img1={imgf}
          img2={imgg}
        />

        <DestinationData
          className="first-desc"
          heading="Dubai & UAE"
          text="Stay in the UAE with our Golden Visa and work permit services. Dubai offers world-class infrastructure, tax-free income, and a multicultural environment. Perfect for entrepreneurs, investors, and skilled professionals seeking long-term residency in the Middle East's business hub. Our Dubai-based team provides local expertise and personalized support for UAE immigration."
          img1={imgd}
          img2={imge}
        />
      </div>
    </>
  );
};
export default Destination;
