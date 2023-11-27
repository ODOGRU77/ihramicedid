import React from "react";
import NameFormWithReactHookFormWithZod from "./NameFormWithReactHookFormWithZod";

const CalculationCard = () => {
  return (
    <div className="flex flex-col text-2xl border-2 scale-95 md:w-lg sm:w-xl border-zinc-200 rounded-xl shadow-lg mt-2">
      <div className="flex items-center justify-around flex-row mt-5">
        <div className="flex flex-col items-center border-2 border-black justify-center">
          <div className="font-light">Akıl</div>
          <div className="font-semibold">sonuc[0].akil</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-light">Fikir</div>
          <div className="font-semibold">sonuc[0].fikir</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="font-light">Burç</div>
          <div className="font-semibold">sonuc[0].burcAy</div>
        </div>
      </div>
      <div className="mt-5 space-y-2 mb-5">
        <div>
          <div className="ml-2">
            <div className="mt-3 space-y-2">
              <div className="">
                <div>
                  <span className="font-light"> Anne Arapça : </span>
                  <span className="font-semibold">
                    sonuc[0].motherArabicTotal
                  </span>
                </div>
                <div>
                  <span className="font-light"> Anne Ebced : </span>{" "}
                  <span className="font-semibold">
                    sonuc[0].motherPuanTotal
                  </span>
                </div>
              </div>
              <div className="">
                <div>
                  <span className="font-light"> Baba Arapça : </span>{" "}
                  <span className="font-semibold">
                    sonuc[0].fatherArabicTotal
                  </span>
                </div>
                <div>
                  <span className="font-light"> Baba Ebced : </span>{" "}
                  <span className="font-semibold">
                    sonuc[0].fatherPuanTotal
                  </span>
                </div>
              </div>
              <div className="">
                <div>
                  <span className="font-light"> Çocuk Arapça : </span>{" "}
                  <span className="font-semibold">sonuc[0].kidArabicTotal</span>
                </div>
                <div>
                  <span className="font-light"> Çocuk Ebced : </span>{" "}
                  <span className="font-semibold">sonuc[0].kidPuanTotal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationCard;
