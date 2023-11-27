// "use client";

// import { hesaplama } from "@/lib/ad";
// import { hesapla } from "@/lib/hesaplama";

// // function Ayirma() {
// //   const metin = "Dilek ديلك ( Ebced Değeri: 64 )";

// //   // Metindeki name, arabic ve puan bilgilerini çıkarmak için regex kullanıyoruz
// //   const regex = /(\S+) (\S+) \( Ebced Değeri: (\d+) \)/;

// //   const eslesen = metin.match(regex);
// //   console.log(eslesen);
// //   if (eslesen) {
// //     const name = eslesen[1]; // İlk boşluktan önceki kelime
// //     const arabic = eslesen[2]; // İkinci boşluktan önceki kelime
// //     const puan = eslesen[3]; // "Ebced Değeri:" ifadesinden sonraki sayı

// //     console.log("name:", name);
// //     console.log("arabic:", arabic);
// //     console.log("puan:", puan);

// //     const sonuclar = [name, arabic, puan];
// //     console.log(sonuclar);
// //     return sonuclar;
// //   } else {
// //     console.log("Eşleşme bulunamadı.");
// //     return null;
// //   }
// // }

// // const AyrilanIsim = () => {
// //   const ayrilanlar = Ayirma();
// //   console.log(ayrilanlar[0]);
// //   return (
// //     <div>
// //       name: {ayrilanlar[0]}, arabic : {ayrilanlar[1]}, puan : {ayrilanlar[2]}
// //     </div>
// //   );
// // };

// // export default AyrilanIsim;

// // function Ayirma() {
// //     const metin = "Dilek ديلك ( Ebced Değeri: 64 )";

// //     // Metindeki name, arabic ve puan bilgilerini çıkarmak için regex kullanıyoruz
// //     const regex = /(\S+) (\S+) \( Ebced Değeri: (\d+) \)/;

// //     const eslesen = metin.match(regex);
// //     console.log(eslesen);
// //     if (eslesen) {
// //       const name = eslesen[1]; // İlk boşluktan önceki kelime
// //       const arabic = eslesen[2]; // İkinci boşluktan önceki kelime
// //       const puan = eslesen[3]; // "Ebced Değeri:" ifadesinden sonraki sayı

// //       console.log("name:", name);
// //       console.log("arabic:", arabic);
// //       console.log("puan:", puan);

// //       const sonuclar = [name, arabic, puan];
// //       console.log(sonuclar);
// //       return sonuclar;
// //     } else {
// //       console.log("Eşleşme bulunamadı.");
// //       return null;
// //     }
// //   }

// //   const AyrilanIsim = () => {
// //     const ayrilanlar = Ayirma();
// //     return (
// //       <div>
// //         name: {ayrilanlar[0]}, arabic : {ayrilanlar[1]}, puan : {ayrilanlar[2]}
// //       </div>
// //     );
// //   };

// //   export default AyrilanIsim;

// // function Ayirma() {
// //   const metin = [
// //     "Damla داملا ( Ebced Değeri: 76 )",
// //     "Dâvud (Davut) داود ( Ebced Değeri: 15 )",
// //     "Deniz دگيز ( Ebced Değeri: 42 )",
// //     "Derya دريا ( Ebced Değeri: 215 )",
// //     "Dilek ديلك ( Ebced Değeri: 64 )",
// //     "Doğan دوغان ( Ebced Değeri: 1061 )",
// //     "Dِöne دونه ( Ebced Değeri: 65 )",
// //     "Durdu دوردو ( Ebced Değeri: 220 )",
// //     "Dursûne دورسونه ( Ebced Değeri: 330 )",
// //     "Dürdâne دوردانه ( Ebced Değeri: 270 )",
// //     "Firdevs فردوس ( Ebced Değeri: 350 )",
// //   ];
// //   // console.log(metin.length);
// //   let i = 0;
// //   let id = 0;

// //   for (i; i <= metin.length; i++) {
// //     // Metindeki name, arabic ve puan bilgilerini çıkarmak için regex kullanıyoruz
// //     const regex = /(\S+) (\S+) \( Ebced Değeri: (\d+) \)/;
// //     let eslesen = metin[i].match(regex);

// //     let name = eslesen[1]; // İlk boşluktan önceki kelime
// //     let arabic = eslesen[2]; // İkinci boşluktan önceki kelime
// //     let puan = eslesen[3]; // "Ebced Değeri:" ifadesinden sonraki sayı
// //     id = i + 1;
// //     i++;

// //     // console.log("name:", name);
// //     // console.log("arabic:", arabic);
// //     // console.log("puan:", puan);

// //     const sonuclar = [name, arabic, puan, id];
// //     // console.log(sonuclar);
// //     return sonuclar;
// //   }
// // }

// // const AyrilanIsim = () => {
// //   const isim1 = hesaplama();

// //   const ayrilanlar = Ayirma();
// //   let k = 0;
// //   for (k; k <= ayrilanlar.length; k++) {
// //     return (
// //       <div>
// //         {isim1}
// //         name: {ayrilanlar[k]}, arabic : {ayrilanlar[k + 1]}, puan :
// //         {ayrilanlar[k + 2]}, id: {ayrilanlar[k + 3]}
// //       </div>
// //     );
// //     k++;
// //   }
// // };

// // export default AyrilanIsim;

// import React from "react";
// const MetinDizi = [
//   "Abbas عبّاس ( Ebced Değeri: 135 )",
//   "Abdülaziz عبدالعزيز ( Ebced Değeri: 201 )",
//   "Abdülcabbar عبدالجبّار ( Ebced Değeri: 201 )",
//   "Abdulfettah عبدالفتّاح ( Ebced Değeri: 315 )",
//   "Abdulgaffar عبدالغفّار ( Ebced Değeri: 1468 )",
//   "Abdulhamit عبدالحميد ( Ebced Değeri: 565 )",
//   "Abdülhakim عبدالحكيم ( Ebced Değeri: 265 )",
//   "Abdülkerim عبدالكريم ( Ebced Değeri: 377 )",
//   "Abdulmecit عبدالمجيد ( Ebced Değeri: 560 )",
//   "Abdullatif عبداللطيف ( Ebced Değeri: 628 )",
//   "Abdusselam عبدالسلام ( Ebced Değeri: 238 )",
//   "Abdussamet عبدالصمد ( Ebced Değeri: 241 )",
//   "Abdulvahap عبدالوهّاب ( Ebced Değeri: 121 )",
//   "Abdi عبدى ( Ebced Değeri: 86 )",
//   "Abdulhakim عبدالحكيم ( Ebced Değeri: 185 )",
//   "Abdulkadîr عبدالقدير ( Ebced Değeri: 421 )",
//   "Abdullah عبدالله ( Ebced Değeri: 143 )",
//   "Abdurrahim عبدالرّحمن ( Ebced Değeri: 565 )",
//   "Abdurrahman عبدالرّحمن ( Ebced Değeri: 405 )",
//   "Abdülbâki عبدالباقى ( Ebced Değeri: 220 )",
//   "Abdüssamed عبدالصّمد ( Ebced Değeri: 331 )",
//   "Acar آجار ( Ebced Değeri: 205 )",
//   "Adahan آداخان ( Ebced Değeri: 657 )",
//   "Adak آداق ( Ebced Değeri: 106 )",
//   "Adalet عدالت ( Ebced Değeri: 505 )",
//   "Adem آدم ( Ebced Değeri: 45 )",
//   "Adviye عدويه ( Ebced Değeri: 95 )",
//   "Adıgüzel آديكوزل ( Ebced Değeri: 78 )",
//   "Adil عادل ( Ebced Değeri: 105 )",
//   "Adile عادله ( Ebced Değeri: 110 )",
//   "Adnan عدنان ( Ebced Değeri: 175 )",
//   "Afet آفت ( Ebced Değeri: 481 )",
//   "Afife عفيفه ( Ebced Değeri: 245 )",
//   "Afitap آفتاب ( Ebced Değeri: 484 )",
//   "Afşar آفشار ( Ebced Değeri: 582 )",
//   "Alaaddin علاءالدين ( Ebced Değeri: 197 )",
//   "Aleyna علينا ( Ebced Değeri: 161 )",
//   "Azra عزراء ( Ebced Değeri: 971 )",
//   "Azize عزيزة ( Ebced Değeri: 245 )",
//   "Aziz عزيز ( Ebced Değeri: 94 )",
//   "Atiye عطيّة ( Ebced Değeri: 94 )",
//   "Atıf عاطف ( Ebced Değeri: 160 )",
//   "Asım عاصم ( Ebced Değeri: 201 )",
//   "Ahsen أحسن ( Ebced Değeri: 119 )",
//   "Ahu آهو ( Ebced Değeri: 12 )",
//   "Ahmet احمد ( Ebced Değeri: 53 )",
//   "Ayşe عاءشه ( Ebced Değeri: 377 )",
//   "Ayşegül عاءشهكل ( Ebced Değeri: 426 )",
//   "Ayşenur عاءشهنور ( Ebced Değeri: 632 )",
//   "Ajda اژدا ( Ebced Değeri: 13 )",
//   "Akif عاكف ( Ebced Değeri: 171 )",
//   "Ali على ( Ebced Değeri: 110 )",
//   "Alime عالمه ( Ebced Değeri: 146 )",
//   "Aliye عليه ( Ebced Değeri: 115 )",
//   "Alpcan آلپجان ( Ebced Değeri: 87 )",
//   "Alper آلپر ( Ebced Değeri: 233 )",
//   "Altan آلتان ( Ebced Değeri: 482 )",
//   "Arif عارف ( Ebced Değeri: 341 )",
//   "Arife عارفه ( Ebced Değeri: 346 )",
//   "Arzu آرزو ( Ebced Değeri: 214 )",
//   "Asiye آسيه ( Ebced Değeri: 76 )",
//   "Aslı اصلي ( Ebced Değeri: 131 )",
//   "Aslıhan اصليخان ( Ebced Değeri: 782 )",
//   "Asuman آسمان ( Ebced Değeri: 152 )",
//   "Atatürk آتاتورك ( Ebced Değeri: 1028 )",
//   "Atilla آتيلاّ ( Ebced Değeri: 272 )",
//   "Aydın آيدين ( Ebced Değeri: 75 )",
//   "Ayfer آيفر ( Ebced Değeri: 291 )",
//   "Aykutalp آيقودآلپ ( Ebced Değeri: 154 )",
//   "Ayla آيلا ( Ebced Değeri: 42 )",
//   "Aynur آينور ( Ebced Değeri: 267 )",
//   "Aysel آيسل ( Ebced Değeri: 101 )",
//   "Aysun آيسون ( Ebced Değeri: 127 )",
//   "Ayten آيتن ( Ebced Değeri: 461 )",
//   "Aytunç آيتونچ ( Ebced Değeri: 469 )",
//   "Aytül آيتول ( Ebced Değeri: 447 )",
// ];

// const Ayirma = () => {
//   let sonuclar = [];
//   let id = 1;

//   const regex = /(\S+) (\S+) \( Ebced Değeri: (\d+) \)/;

//   MetinDizi.forEach((metinSatiri) => {
//     const eslesen = metinSatiri.match(regex);

//     if (eslesen) {
//       const name = eslesen[1]; // İlk boşluktan önceki kelime
//       const arabic = eslesen[2]; // İkinci boşluktan önceki kelime
//       const puan = eslesen[3]; // "Ebced Değeri:" ifadesinden sonraki sayı
//       sonuclar.push({ name, arabic, puan, id });
//       id++;
//     } else {
//       console.log(`Eşleşme bulunamadı: ${metinSatiri}`);
//     }
//   });
//   console.log(sonuclar);

//   return (
//     <div className="flex justify-center">
//       <h1 className="font-semibold">Metin Ayrım Sonuçları</h1>
//       <ul>
//         {sonuclar.map((sonuc, index) => (
//           <li className="w-max-lg h-max-lg pt-10" key={index}>
//             <p className="font-semibold text-red-600">name: {sonuc.name}</p>
//             <p className="font-semibold text-green-600">
//               arabic: {sonuc.arabic}
//             </p>
//             <p className="font-semibold text-blue-600">puan: {sonuc.puan}</p>
//             <p className="font-semibold text-blue-600">id: {sonuc.id}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Ayirma;
