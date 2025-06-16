import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Tr-station" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
      <section className="w-full flex flex-col items-center justify-center min-h-[37.8438rem] bg-white">
        <div className="text-4xl font-bold">banner</div>
      </section>
      <section className="w-full flex flex-col items-center justify-center min-h-[27.9688rem] bg-gray-300">
        <div className="text-4xl font-bold">about us</div>
      </section>
      <section className="w-full flex flex-col items-center justify-center min-h-[28rem] bg-white">
        <div className="text-4xl font-bold">Our Services</div>
      </section>
      <section className="w-full flex flex-col items-center justify-center min-h-[22.25rem] bg-gray-300">
        <div className="text-4xl font-bold">Ready to get started?</div>
      </section>
      <section className="w-full flex flex-col items-center justify-center min-h-[22rem] bg-white">
        <div className="text-4xl font-bold">Contact Us</div>
      </section>
    </div>
  );
}
