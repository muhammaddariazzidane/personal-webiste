import { Separator } from "@/components/ui/separator";
import RootLayout from "@/layouts/RootLayout";
import { FaTiktok } from "react-icons/fa6";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <RootLayout title="About">
      <div className="py-10 max-w-5xl mx-auto px-4" data-aos="fade-up">
        <h1 className="md:text-2xl text-lg font-medium" data-aos="zoom-in">
          About
        </h1>
        <h2 className="opacity-80 my-2" data-aos="zoom-in">
          A short story of me
        </h2>
        <Separator />
        <div>
          <div className="my-4 flex flex-col space-y-3 lg:text-base md:text-base text-sm">
            <p className="leading-relaxed">
              I am a Fullstack Web Developer with a diploma in Information
              Technology from Bina Sarana Informatika University, Karawang. I
              specialize in building dynamic, user-friendly web applications
              using modern frameworks such as Laravel, CodeIgniter, and ReactJS.
            </p>
            <p className="leading-relaxed">
              With a passion for continuous learning and improvement, I actively
              take on challenging projects that sharpen my skills in both
              frontend and backend development. I keep up with the latest trends
              and technologies in the industry through online learning
              platforms, documentation, and content from sources like YouTube.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-3 items-end py-3">
          <div>
            <div className="flex gap-2 items-center">
              <FaTiktok size={25} className="md:scale-100 scale-75" />
              <h1 className="md:text-lg font-semibold text-base">Tiktok</h1>
            </div>
            <p className="opacity-80 mt-2 lg:text-base md:text-base text-sm">
              Find me on tiktok
            </p>
          </div>
          <p className="opacity-80 lg:text-base md:text-base text-sm">
            @dzeee_dev
          </p>
        </div>

        <blockquote
          className="tiktok-embed mt-2 rounded-lg"
          cite="https://www.tiktok.com/@dzeee_dev"
          data-unique-id="dzeee_dev"
          data-embed-type="creator"
          style={{ maxWidth: "720px", minWidth: "2rem" }}
        >
          <section>
            <a
              target="_blank"
              href="https://www.tiktok.com/@dzeee_dev?refer=creator_embed"
            >
              @dzeee_dev
            </a>
          </section>
        </blockquote>
      </div>
    </RootLayout>
  );
}
