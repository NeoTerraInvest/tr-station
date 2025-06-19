import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import {
  ArrowRight,
  Building2,
  ChartLine,
  Globe,
  MailIcon,
} from "lucide-react";
import data from "../data/data.json";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Tr-station" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cards = data;
  // const [email, setEmail] = useState("");

  // const handleSend = () => {
  //   const subject = encodeURIComponent("Contact Request");
  //   const body = encodeURIComponent("Hello, I would like to contact you.");
  //   const mailto = `mailto:neoterrafund@gmail.com?subject=${subject}&body=${body}`;

  //   // window.location.href 대신 window.open 사용
  //   window.open(mailto, "_blank");
  // };

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardClick(index);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <Header />
      <section
        className="w-full flex flex-col items-center justify-center text-center min-h-[37.8438rem] bg-white bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://api-seapt-cdn-344342163.imgix.net/images/tr/blank.png")',
        }}
      >
        <div className="text-2xl lg:text-4xl font-bold">
          <h1 className="text-background-primary">TRANSFER STATION</h1>
          <p className="p-4">
            TR STATION은 최신 트렌드와 고품질 제품을 제공합니다.
          </p>
          <div className="flex items-center text-sm justify-center p-8 gap-4">
            <span>TR STATION에서 판매하는 제품</span>
            <Link
              to="/shop"
              className="flex items-center justify-center gap-2 hover:scale-105 transition"
            >
              <span>더 알아보기</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center min-h-[27.9688rem] bg-[#F9FAFB]">
        <div className="w-full flex flex-col items-center justify-center text-2xl lg:text-4xl font-bold gap-4 p-8">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {cards.map((item, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={`cursor-pointer flex flex-col gap-4 border ${
                  activeIndex === index
                    ? "bg-background-tertiary text-white"
                    : "bg-background-secondary text-white"
                } border-gray-200 p-1 w-[10rem] h-auto items-center justify-center rounded-lg text-center text-lg hover:scale-105 transition`}
              >
                <div>{item.title}</div>
              </button>
            ))}
          </div>

          <div>
            <div className="flex justify-center items-center text-background-primary p-4">
              {data[activeIndex].subtitle}
            </div>
            <div className=" flex flex-col justify-center items-center p-4 lg:p-0 lg:container text-[1rem] text-center lg:w-3/5  h-auto overflow-y-auto">
              {data[activeIndex].description.split("\n").map((line, index) => (
                <div key={index} className="mb-2">
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center min-h-[28rem] bg-white">
        <div className="text-4xl font-bold flex flex-col justify-center items-center gap-4">
          <div className="text-background-primary p-4">Our Services</div>
          <div className="flex flex-col lg:flex-row gap-4">
            {/*  */}
            <div className="flex flex-col gap-4 border border-gray-200 p-5 w-[20rem] h-[15rem] items-center justify-center rounded-lg text-center text-2xl">
              <div className="text-background-primary">
                <ChartLine />
              </div>
              <div>브랜드 전략</div>
              <div className="text-sm">
                빠르게 변화하는 시장 환경 속에서 브랜드의 정체성과 포지셔닝을
                강화하기 위한 맞춤형 전략을 제시합니다.
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-4 border border-gray-200 p-5 w-[20rem] h-[15rem] items-center justify-center rounded-lg text-center text-2xl">
              <div className="text-background-primary">
                <Building2 />
              </div>
              <div>캠페인 기획 및 실행</div>
              <div className="text-sm">
                디지털, 크리에이티브, 통합 마케팅 캠페인을 기획부터 실행까지 전
                과정에 걸쳐 진행하며, 실질적인 성과를 도출합니다.
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-4 border border-gray-200 p-5 w-[20rem] h-[15rem] items-center justify-center rounded-lg text-center text-2xl">
              <div className="text-background-primary">
                <Globe />
              </div>
              <div>캠페인 기획 및 실행</div>
              <div className="text-sm">
                디지털, 크리에이티브, 통합 마케팅 캠페인을 기획부터 실행까지 전
                과정에 걸쳐 진행하며, 실질적인 성과를 도출합니다.
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="w-full flex flex-col items-center justify-center min-h-[22.25rem] bg-gray-300">
        <div className="text-4xl font-bold">Ready to get started?</div>
      </section> */}
      <section className="w-full flex flex-col items-center justify-center min-h-[22rem] bg-[#F9FAFB] gap-4">
        <div className="text-4xl font-bold text-background-primary p-4">
          Contact Us
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center rounded-full p-4 bg-gray-200">
            <MailIcon />
          </div>
          <span className="p-4">neoterrafund@gmail.com</span>
        </div>

        {/* <div className="bg-background-primary p-4 h-1/2 w-2/3 text-white rounded-lg flex gap-4">
          <input
            type="text"
            placeholder="Email"
            className="p-2 rounded text-black bg-gray-200 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <a
            href={`mailto:neoterrafund@gmail.com?subject=${encodeURIComponent(
              "Contact Request"
            )}&body=${encodeURIComponent(
              "Hello, I would like to contact you."
            )}`}
            className="bg-white text-background-primary p-2 rounded-lg"
          >
            Send
          </a>
        </div> */}
      </section>
      <Footer />
    </div>
  );
}
