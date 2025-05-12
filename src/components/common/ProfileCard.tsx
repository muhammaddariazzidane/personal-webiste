import { LazyLoadImage } from "react-lazy-load-image-component";
import Social from "@/components/common/Social";
import { MapPin } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="max-h-64 lg:max-w-56 w-full mx-auto mb-40 lg:sticky top-12 p-6 rounded-xl ">
      <div className=" h-full w-full rounded-xl flex justify-center overflow-hidden">
        <LazyLoadImage
          src="/img/foto_new.png"
          alt="foto.png"
          effect="blur"
          width={175}
          height={175}
        />
      </div>
      <h1 className="text-center text-base lg:text-lg md:text-lg sm:text-lg mt-5">
        Muhammad Dariaz Zidane
      </h1>
      <h2 className="text-sm text-center my-3 whitespace-nowrap">
        Full-Stack Web Developer
      </h2>
      <h3 className="text-sm my-3 whitespace-nowrap flex items-center justify-center gap-1">
        <MapPin color="lightgreen" />
        Karawang, indonesia
      </h3>
      <div className="flex justify-center w-full gap-3 my-5">
        <Social />
      </div>
    </div>
  );
}
