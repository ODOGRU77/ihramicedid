import isimArray from "./isimlerObjesi";
import { TNameAnalysisSchema } from "./types.js";
// import RTLArabic from "rtl-arabic/src/RTLArabic.js";

const RTLArabic = require("rtl-arabic");

// These are the default options
const options = {
  harakat: true,
  numbers: false,
  multiline: true,
};

export function kontrol(obje: TNameAnalysisSchema) {
  let motherName = obje.motherName.toLocaleLowerCase("tr");
  let fatherName = obje.fatherName.toLocaleLowerCase("tr");
  let kidName = obje.kidName.toLocaleLowerCase("tr");
  console.log(motherName);

  let motherPuan1 = 0;
  let motherPuan2 = 0;
  let motherPuanTotal = 0;
  let fatherPuan1 = 0;
  let fatherPuan2 = 0;
  let fatherPuanTotal = 0;
  let kidPuan1 = 0;
  let kidPuan2 = 0;
  let kidPuanTotal = 0;
  let motherArabic1: string = "";
  let motherArabic2: string = "";
  let motherArabicTotal: string = "";
  let fatherArabic1: string = "";
  let fatherArabic2: string = "";
  let fatherArabicTotal: string = "";
  let kidArabic1: string = "";
  let kidArabic2: string = "";
  let kidArabicTotal: string = "";
  let akil = 0;
  let fikir = 0;
  let burcHesap = 0;
  let burcAy = "";
  // let motherNameDizi: Array<string> = [];
  // let fatherNameDizi: Array<string> = [];
  // let kidNameDizi: Array<string> = [];
  let motherNameDizi: string[];
  let fatherNameDizi: string[];
  let kidNameDizi: string[];

  const regex = /(\s+)/;

  // motherNameDizi = motherName
  //   ? motherName.split(regex).filter((namePart) => namePart.trim() !== "")
  //   : [].filter((motherNameDizi) => motherNameDizi.trim() !== "");
  // // console.log("MothernameDizi Type:", typeof motherNameDizi);
  if (motherName) {
    motherNameDizi = motherName
      .split(regex)
      .filter((namePart) => namePart.trim() !== "");
  } else {
    motherNameDizi = []; // Directly assign an empty array if motherName is not available
  }
  console.log(motherNameDizi);

  // fatherNameDizi = fatherName
  //   ? fatherName.split(regex).filter((namePart) => namePart.trim() !== "")
  //   : [].filter((fatherNameDizi) => fatherNameDizi.trim() !== "");
  // // console.log("MothernameDizi Type:", typeof fatherNameDizi);

  if (fatherName) {
    fatherNameDizi = fatherName
      .split(regex)
      .filter((namePart) => namePart.trim() !== "");
  } else {
    fatherNameDizi = []; // Directly assign an empty array if motherName is not available
  }

  // kidNameDizi = kidName
  //   ? kidName.split(regex).filter((namePart) => namePart.trim() !== "")
  //   : [].filter((kidNameDizi) => kidNameDizi.trim() !== "");
  // // console.log("MothernameDizi Type:", typeof kidNameDizi);

  if (kidName) {
    kidNameDizi = kidName
      .split(regex)
      .filter((namePart) => namePart.trim() !== "");
  } else {
    kidNameDizi = []; // Directly assign an empty array if motherName is not available
  }

  // fatherNameDizi = fatherName
  //   ?.split(regex)
  //   .filter((fatherNameDizi) => fatherNameDizi.trim() !== "");

  // kidNameDizi = kidName
  //   ?.split(regex)
  //   .filter((kidNameDizi) => kidNameDizi.trim() !== "");
  try {
    isimArray.forEach((blok) => {
      if (
        motherNameDizi.length > 0 &&
        `${blok.name.toLocaleLowerCase("tr")}` === motherNameDizi[0]
      ) {
        motherPuan1 = +blok.puan;
        motherArabic1 = blok.arabic;
        console.log(blok.name);

        return [motherPuan1, motherArabic1];
      } else if (
        motherNameDizi.length > 1 &&
        `${blok.name.toLocaleLowerCase("tr")}` === motherNameDizi[1]
      ) {
        motherPuan2 = +blok.puan;
        motherArabic2 = blok.arabic;

        return [motherPuan2, motherArabic2];
      }
    }),
      isimArray.forEach((blok) => {
        if (
          fatherNameDizi.length > 0 &&
          `${blok.name.toLocaleLowerCase("tr")}` === fatherNameDizi[0]
        ) {
          fatherPuan1 = +blok.puan;
          fatherArabic1 = blok.arabic;
          return [fatherPuan1, fatherArabic1];
        } else if (
          `${blok.name.toLocaleLowerCase("tr")}` === fatherNameDizi[1]
        ) {
          fatherPuan2 = +blok.puan;
          fatherArabic2 = blok.arabic;
          return [fatherPuan2, fatherArabic2];
        }
      }),
      isimArray.forEach((blok) => {
        if (
          kidNameDizi.length > 0 &&
          `${blok.name.toLocaleLowerCase("tr")}` === kidNameDizi[0]
        ) {
          kidPuan1 = +blok.puan;
          kidArabic1 = blok.arabic;
          return [kidPuan1, kidArabic1];
        } else if (`${blok.name.toLocaleLowerCase("tr")}` === kidNameDizi[1]) {
          kidPuan2 = +blok.puan;
          kidArabic2 = blok.arabic;
          return [kidPuan2, kidArabic2];
        }
      });
  } catch (error) {
    console.error(
      "Aradığınız isim en kısa sürede veritabanına eklenecektir",
      error
    );
  }

  console.log(motherNameDizi, fatherNameDizi, kidNameDizi);

  motherPuanTotal = motherPuan1 + motherPuan2;
  fatherPuanTotal = fatherPuan1 + fatherPuan2;
  kidPuanTotal = kidPuan1 + kidPuan2;

  // motherArabic1 = motherArabic1.split("").reverse().join("");
  // if (motherArabic2 != "") {
  //   motherArabic2 = motherArabic2.split("").reverse().join("");
  // }
  // motherArabicTotal = motherArabic2.concat(" ", motherArabic1);
  motherArabicTotal = motherArabic1 + " " + motherArabic2;
  // let convertedMother = new RTLArabic(motherArabicTotal, options).convert();
  // console.log(convertedMother);

  // fatherArabic1 = fatherArabic1.split("").reverse().join("");
  // if (fatherArabic2 != "") {
  //   fatherArabic2 = fatherArabic2.split("").reverse().join("");
  // }
  // fatherArabicTotal = fatherArabic2.concat(" ", fatherArabic1);
  fatherArabicTotal = fatherArabic1 + " " + fatherArabic2;
  // let convertedFather = new RTLArabic(fatherArabicTotal, options).convert();
  // console.log(convertedFather);

  // kidArabic1 = kidArabic1.split("").reverse().join("");
  // if (kidArabic2 != "") {
  //   kidArabic2 = kidArabic2.split("").reverse().join("");
  // }
  // kidArabicTotal = kidArabic2.concat(" ", kidArabic1);
  kidArabicTotal = kidArabic1 + " " + kidArabic2;
  // let convertedKid = new RTLArabic(kidArabicTotal, options).convert();

  akil = (motherPuanTotal + kidPuanTotal) % 9;
  fikir = (fatherPuanTotal + kidPuanTotal) % 9;
  burcHesap = (motherPuanTotal + kidPuanTotal) % 12;

  if (akil == 0) {
    akil = 9;
  }
  if (fikir == 0) {
    fikir = 9;
  }

  if (burcHesap == 0 || burcHesap == 12) {
    burcAy = "Balik";
  }
  if (burcHesap == 1) {
    burcAy = "Koç";
  }
  if (burcHesap == 2) {
    burcAy = "Boğa";
  }
  if (burcHesap == 3) {
    burcAy = "İkizler";
  }
  if (burcHesap == 4) {
    burcAy = "Yengeç";
  }
  if (burcHesap == 5) {
    burcAy = "Aslan";
  }
  if (burcHesap == 6) {
    burcAy = "Başak";
  }
  if (burcHesap == 7) {
    burcAy = "Terazi";
  }
  if (burcHesap == 8) {
    burcAy = "Akrep";
  }
  if (burcHesap == 9) {
    burcAy = "Yay";
  }
  if (burcHesap == 10) {
    burcAy = "Oğlak";
  }
  if (burcHesap == 11) {
    burcAy = "Kova";
  }

  let objeler = [];
  objeler.push({
    motherName,
    fatherName,
    kidName,
    motherPuanTotal,
    motherArabicTotal,
    fatherPuanTotal,
    fatherArabicTotal,
    kidPuanTotal,
    kidArabicTotal,
    akil,
    fikir,
    burcAy,
  });
  // console.log(objeler);

  return objeler;
}
