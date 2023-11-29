"use client";

import { submitToSupabase } from "@/lib/SubmitForm";
import { kontrol } from "@/lib/kontrol";
import { NameAnalysisSchema, TNameAnalysisSchema } from "@/lib/types";
import { TFormOtherSchema } from "@/lib/types-other";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
    setError,
  } = useForm<TNameAnalysisSchema>({
    resolver: zodResolver(NameAnalysisSchema),
    defaultValues: {
      motherName: "",
      fatherName: "",
      kidName: "",
    },
  });

  // State hooks for veriler and sonuc
  const [veriler, setVeriler] = useState<TNameAnalysisSchema | null>(null);
  const [sonuc, setSonuc] = useState<TFormOtherSchema[]>([]);

  const onSubmit = async (data: TNameAnalysisSchema) => {
    const { motherName, fatherName, kidName } = data;
    // console.log(motherName);

    // console.log("Form data before submission:", {
    //   motherName,
    //   fatherName,
    //   kidName,
    // });
    setVeriler(data);
    // console.log(motherName);
    setSonuc(kontrol(data));
    // console.log(motherName);
    await submitToSupabase(motherName, fatherName, kidName);
  };

  // let veriler = getValues();
  // let sonuc;
  // sonuc = kontrol(veriler);

  // submitToSupabase(veriler.motherName, veriler.fatherName, veriler.kidName);
  // console.log(sonuc);

  return (
    <div className="flex flex-col w-full justify-around ">
      <div className="flex flex-col text-lg lg:text-4xl sm:text-2xl border-2 rounded-xl border-zinc-300 shadow-lg p-5 items-center justify-center">
        <h1 className="text-primary font-bold">Akıl ve Fikir Hesabı</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <React.Fragment>
            <div className="p-1 mt-3 rounded-[20px] gap-2 flex flex-row">
              <Image
                src="/mom.svg"
                alt="anne"
                width={28}
                height={28}
                quality={100}
                className="rounded"
              />

              <div lang="tr" className="">
                <input
                  {...register("motherName")}
                  autoFocus
                  placeholder="Annenin ismini yazınız..."
                  lang="tr"
                  className="appearance-none w-full text-xl placeholder:ml-5 pl-5 -mr-5 placeholder:text-center focus:outline-none placeholder:text-neutral-700 placeholder:italic placeholder:text-lg p-1 ring-1 bg-white/25  ring-neutral-600 focus:ring-2 focus:ring-[#415A77] bg-white rounded-full"
                  type="text"
                />
              </div>
            </div>
            {errors.motherName && (
              <p className="text-red-500 text-lg ml-2 flex mt-1 ">
                {`${errors.motherName.message}`}
              </p>
            )}
            <div className=" p-1 mt-2 rounded-[20px] space-x-2 relative flex flex-row">
              <Image
                src="/dad.svg"
                alt="baba"
                width={28}
                height={28}
                quality={100}
                className="rounded"
              />

              <div className="">
                <input
                  {...register("fatherName")}
                  placeholder="Babanın ismini yazınız..."
                  className="appearance-none w-full text-xl placeholder:ml-5 pl-5 -mr-5 shadow-xl placeholder:text-center focus:outline-none placeholder:text-neutral-700 placeholder:italic placeholder:text-lg p-1 ring-1 bg-white/25  ring-neutral-600 focus:ring-2 focus:ring-[#415A77] bg-white rounded-full"
                  type="text"
                />
              </div>
            </div>
            {errors.fatherName && (
              <p className="text-red-500 text-lg flex ml-2 mt-1">
                {`${errors.fatherName.message}`}
              </p>
            )}
            <div className="mt-2 p-1  space-x-2 flex flex-row">
              <Image
                src="/boy.svg"
                alt="çocuk"
                width={28}
                height={28}
                quality={100}
                className=""
              />

              <div className="">
                <input
                  {...register("kidName")}
                  placeholder="Çocuğun ismini yazınız..."
                  className="appearance-none w-full text-xl placeholder:ml-5 pl-5 -mr-5 placeholder:text-center focus:outline-none placeholder:text-neutral-700 placeholder:italic placeholder:text-lg p-1 ring-1 bg-white/25  ring-neutral-600 focus:ring-2 focus:ring-[#415A77] bg-white rounded-full"
                  type="text"
                />
              </div>
            </div>
            {errors.kidName && (
              <p className="text-red-500 ml-2 text-lg mt-1 flex ">{`${errors.kidName.message}`}</p>
            )}
          </React.Fragment>
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full hover:bg-[#1B263B] font-semibold text-xl mt-5 text-gray-200 bg-[#0D1B2A] disabled:bg-gray-500 py-2 rounded-full"
          >
            Hesapla
          </button>
        </form>
      </div>

      {veriler && sonuc && (
        <div className="grid grid-flow-row text-xl border-2 border-zinc-300 rounded-xl shadow-lg gap-5 p-5 mt-5">
          <div className="items-center grid grid-flow-col text-2xl  gap-3 justify-stretch ">
            <div className="flex flex-col items-center border-2 p-1 rounded-xl shadow-lg border-zinc-300 justify-center">
              <div className="font-light">Akıl</div>
              <div className="font-semibold">{sonuc[0].akil}</div>
            </div>
            <div className="flex flex-col items-center border-2 p-1 rounded-xl shadow-lg border-zinc-300 justify-center">
              <div className="font-light">Fikir</div>
              <div className="font-semibold">{sonuc[0].fikir}</div>
            </div>
            <div className="flex flex-col items-center border-2 p-1 rounded-xl shadow-lg border-zinc-300 justify-center">
              <div className="font-light">Burç</div>
              <div className="font-semibold">{sonuc[0].burcAy}</div>
            </div>
          </div>
          <div
            lang="tr"
            className="grid grid-flow-row gap-2 capitalize border-2 p-2 border-zinc-300 rounded-xl shadow-lg "
          >
            <div lang="tr" className="">
              <div lang="tr">
                <span className="font-light"> Annenin İsmi: </span>
                <span lang="tr" className=" font-semibold">
                  {veriler.motherName.toLocaleUpperCase("tr")}
                </span>
              </div>
              <div>
                <span className="font-light"> Annenin İsminin Arapçası: </span>
                <span className="font-semibold">
                  {sonuc[0].motherArabicTotal}
                </span>
              </div>
              <div>
                <span className="font-light"> Annenin İsminin Ebcedi: </span>
                <span className="font-semibold">
                  {sonuc[0].motherPuanTotal}
                </span>
              </div>
            </div>
            <div lang="tr" className="">
              <div lang="tr">
                <span className="font-light"> Babanın İsim: </span>
                <span lang="tr" className="  font-semibold">
                  {veriler.fatherName.toLocaleUpperCase("tr")}
                </span>
              </div>
              <div>
                <span className="font-light"> Babanın İsminin Arapçası: </span>{" "}
                <span className="font-semibold">
                  {sonuc[0].fatherArabicTotal}
                </span>
              </div>
              <div>
                <span className="font-light"> Baba İsminin Ebcedi: </span>{" "}
                <span className="font-semibold">
                  {sonuc[0].fatherPuanTotal}
                </span>
              </div>
            </div>
            <div lang="tr" className="">
              <div lang="tr">
                <span className="font-light"> Çocuğun İsmi: </span>
                <span className=" font-semibold">
                  {veriler.kidName.toLocaleUpperCase("tr")}
                </span>
              </div>
              <div>
                <span className="font-light"> Çocuğun İsminin Arapçası: </span>{" "}
                <span className="font-semibold">{sonuc[0].kidArabicTotal}</span>
              </div>
              <div>
                <span className="font-light"> Çocuğun İsminin Ebcedi: </span>{" "}
                <span className="font-semibold">{sonuc[0].kidPuanTotal}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
