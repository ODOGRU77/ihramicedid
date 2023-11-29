import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Akıl ve Fikir Sorgulama",
  description:
    "Kişiler için, isimlerin ebced hesabı ile akıl ve fikir sorgulaması",
};

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-10 sm:mt-12 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-8 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            İhram-ı Cedid&apos;e hoşgeldiniz.
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Saniyeler içerisinde <span className="text-[#6A040F]">akıl</span> ve{" "}
          <span className="text-[#6A040F]">fikir</span> sorgulamanıza ulaşın
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          İhram-ı Cedid uygulaması, Ebced hesabı yöntemiyle, istediğiniz
          herhangi bir ismin akıl ve fikir sorgulamasını gerçekleştirmenize
          olanak sağlar.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-8",
          })}
          href="/AkilveFikirSorgulama"
        >
          Başlamak için <ArrowRight className=" h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/* value proposition section */}

      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[2052/1368] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff0f7b] to-[#f89b29] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div>
            <div className="mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl px-6 lg:px-8 ">
              <div className="mt-12 flow-root sm:mt-16">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 ">
                  <Image
                    src="/anne-baba-cocuk.jpg"
                    alt="anne, baba ve çocuk fotoğrafı"
                    width={4104}
                    height={2736}
                    quality={75}
                    className="rounded-xl bg-white p-2 sm:p-0 md:p-0 shadow-2xl ring-1 ring-gray-900/0"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-32 mt-10 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl ">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="font-bold text-4xl text-gray-900 sm:text-5xl">
              Bir tık uzağınızda...
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              İhram-ı Cedid sayesinde akıl ve fikir sorgunuzu kolayca
              gerçekleştirin.
            </p>
          </div>
        </div>

        {/* Steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0 md:px-10">
          <li className="md:flex-1 ">
            <div className="flex flex-col space-y-2 border-l-4- border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-bold text-[#6A040F]">Adım 1</span>
              <span className="text-xl font-semibold">Bir isim seçin</span>
              <span className="mt-2 text-zinc-700">
                Çocuğunuz için bir isim belirleyin ve bir sonraki adıma geçin.
              </span>
            </div>
          </li>
          <li className="md:flex-1 ">
            <div className="flex flex-col space-y-2 border-l-4- border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-bold text-[#6A040F]">Adım 2</span>
              <span className="text-xl font-semibold">
                Belirlediğiniz isimle ilgili sorgulama yapın
              </span>
              <span className="mt-2 text-zinc-700">
                Anne, baba ve çocuğun isimlerini girerek akıl ve fikir
                sorgulamasını yapın.
              </span>
            </div>
          </li>
          <li className="md:flex-1 ">
            <div className="flex flex-col space-y-2 border-l-4- border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-bold text-[#6A040F]">Adım 3</span>
              <span className="text-xl font-semibold">
                Sonuçları değerlendirin
              </span>
              <span className="mt-2 text-zinc-700">
                Elde ettiğiniz sonuçları verilen değer aralıklarına göre
                yorumlayın.
              </span>
            </div>
          </li>
        </ol>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 ">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 ">
              <Image
                src="/yeni-dogan-bebek.jpg"
                alt="uyuyan küçük bebek fotoğrafı"
                width={4896}
                height={3264}
                quality={75}
                className="rounded-xl bg-white p-2 sm:p-0 md:p-0 shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
