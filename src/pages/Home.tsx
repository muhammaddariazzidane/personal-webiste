import { Stacks } from "@/components/common/constant/Stacks";
import TimelineCard from "@/components/common/TimelineCard";
import { ButtonIcon } from "@/components/common/ButtonIcon";
import ProfileCard from "@/components/common/ProfileCard";
import { FaCode, FaBriefcase } from "react-icons/fa6";
import { Separator } from "@/components/ui/separator";
import experiences from "@/data/experience.json";
import educations from "@/data/education.json";
import RootLayout from "@/layouts/RootLayout";

export default function Home() {
  return (
    <RootLayout title="Home">
      <div
        className="grid lg:grid-cols-4 grid-cols-1 max-w-7xl mx-auto"
        data-aos="fade-up"
      >
        <ProfileCard />
        <div className="w-full col-span-3 py-4 lg:px-10  sm:px-6">
          <div>
            <div className="my-4 flex flex-col space-y-3 lg:text-base md:text-base text-sm">
              <p className="leading-relaxed">
                I am a Fullstack Web Developer with a diploma in Information
                Technology from Bina Sarana Informatika University, Karawang. I
                specialize in building dynamic, user-friendly web applications
                using modern frameworks such as Laravel, CodeIgniter, and
                ReactJS.
              </p>
            </div>
          </div>
          <Separator />

          <TimelineCard
            datas={experiences}
            icon={<FaBriefcase size={18} />}
            title={"Carrer"}
            subtitle={"My professional career journey."}
          />
          <Separator />
          <TimelineCard
            datas={educations}
            icon={<FaBriefcase size={18} />}
            title={"Education"}
            subtitle={"My education journey."}
          />
          <Separator />

          <div className="my-4">
            <div className="flex items-center gap-2">
              <FaCode size={20} />
              <h1 className="font-semibold md:text-lg">Skills</h1>
            </div>
            <h1 className="font-normal md:text-base md:mt-2">
              My programming skills.
            </h1>
            <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 mt-5 gap-y-4 ">
              {Stacks?.map((item, index) => (
                <ButtonIcon key={index} icon={item.icon} label={item.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
