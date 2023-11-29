import Information from "@/components/form/Information";
import NameForm from "@/components/form/NameForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akıl ve Fikir Hesabı Sayfası",
  description:
    "Anne, baba ve çocuk isimlerinin ebced hesapları ile akıl ve fikir sorgulaması ",
};

const Page = () => {
  return (
    <div>
      <div className="pointer-events-none grainy absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl  sm:-top-80">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1700/1600] w-[36.125rem] -translate-x-1/4 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div>
        <div className="flex w-full min-h-screen sm:container mt-2 sm:mt-0 sm:items-center justify-center">
          <div className="flex flex-col md:flex-row  p-2 sm:pt-6 md:p-6 gap-5">
            <div className="md:basis-1/2 flex justify-center p-3 sm:p-6 border-2 bg-white/25 border-zinc-300 rounded-xl shadow-lg">
              <NameForm />
            </div>
            <div className="md:basis-1/2">
              <Information />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
