import Image from "next/image";
import Header from "@/components/Header/Header";
import Slider from "@/components/Slider";


export default function Home() {
  return (
    <>
      <Header></Header>
      <h1 className="text-3xl text-center font-extrabold p-6">
        Our Top <span className="text-green-700">Picks For You!</span>
      </h1>
      <div className="pt-2 pb-2 md:pl-14 md:pr-14 pl-12 pr-12 w-full">
        <Slider></Slider>
      </div>
    </>
  );
}
