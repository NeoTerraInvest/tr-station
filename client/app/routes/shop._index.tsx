import type { MetaFunction } from "@remix-run/node";
import ItemCard from "../components/ui/ItemCard";
// import { Shirt } from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "Shop - Home" },
  { name: "description", content: "Shop Home Page" },
];

export default function Shop() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full flex min-h-[25rem] bg-background-primary">
        <div className="container flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full h-full flex flex-col bg-background-primary justify-center p-0 md:p-4 gap-4">
            <h1 className="text-white text-4xl font-bold">
              여름 시즌 특별 할인
            </h1>
            <p className="text-white text-2xl">
              최대 50% 할인되 가격으로 여름 필수 아이템을 만나보세요.
            </p>
          </div>
          <div className="md:w-1/2 w-full h-full bg-gray-300">image</div>
        </div>
      </section>
      <section className="container w-full flex flex-col items-center justify-center min-h-[10rem] bg-white">
        {/* <div>
          <h3>카테고리</h3>
          <div className="flex flex-col items-center justify-center bg-gray-300 w-14 h-14 rounded-full">
            <Shirt color="#0045A5" />
          </div>
        </div> */}
      </section>
      <section className="container w-full flex flex-col items-center justify-center min-h-[27.625rem] bg-white">
        <div className="w-full h-full flex-1 flex flex-col gap-4">
          <h3 className="container flex justify-start text-2xl font-bold ml-10 lg:ml-0">
            상품
          </h3>
          <div className="w-full flex flex-wrap lg:flex-nowrap justify-center gap-4">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </section>
      {/* <section className="container w-full flex flex-col items-center justify-center bg-gray-300">
        <div>신상품</div>
      </section>
      <section className="containerw-full flex flex-col items-center justify-center min-h-[22.5rem] bg-white">
        <div>특별할인</div>
      </section> */}
      <section className="w-full flex flex-col items-center justify-center min-h-[9.75rem]">
        {/* <div>상품 등록 의뢰</div> */}
      </section>
    </div>
  );
}
