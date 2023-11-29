import Link from "next/link";
import React from "react";

const Information = () => {
  return (
    <div className="flex flex-col gap-3  font-medium text-md md:text-md lg:text-lg ">
      <div>
        <h1 className="p-5 border-2 border-zinc-300 rounded-xl shadow-lg">
          <p className="text-[#6A040F] font-medium text-lg md:text-lg lg:text-2xl pb-1">
            Akıl
          </p>{" "}
          <p>
            1 ile 9 arasında değerler alır. Bu değer, anne ve çocuk isimlerinin
            Ebced değerleri üzerinden hesaplanır.
            <br />
            Akıl değerinin, kişinin yıldızını temsil ettiği belirtilmektedir.
            Yıldız değeri, kişinin aurasının zayıf olması ve negatif enerjilere
            açık hale gelme durumu olarak tanımlanmaktadır. Aynı zamanda akıl
            değerinin,{" "}
            <Link
              href="/EbcedHesabiNedir"
              className="text-primary font-bold underline underline-offset-2"
            >
              MBTI
            </Link>
            &apos;da &quot;ALGI&quot; kavramına karşılık geldiği de
            vurgulanmaktadır.
          </p>
        </h1>
      </div>
      <div>
        <h1 className="p-5 border-2 border-zinc-300 rounded-xl shadow-lg">
          <p className="text-[#6A040F] font-medium text-lg md:text-lg lg:text-2xl pb-1">
            Fikir
          </p>{" "}
          <p>
            1 ile 9 arasında değerler alır. Bu değer, baba ve çocuk isimlerinin
            Ebced değerleri üzerinden hesaplanır.
            <br />
            Fikir değerinin,{" "}
            <Link
              href="/EbcedHesabiNedir"
              className="text-primary font-bold underline underline-offset-2"
            >
              MBTI
            </Link>
            &apos;da kişinin yargısal kararlarına işaret ettiği
            belirtilmektedir. Bu kavram, günlük hayatta karşılaşılan durumlara
            veya yaşanılan sıkıntılara verilen tepkilerin genel bir ölçütü
            olarak da tanımlanabilir.
          </p>
        </h1>
      </div>
      <div>
        <h1 className="p-5 border-2 border-zinc-300 rounded-xl shadow-lg">
          <p className="text-[#6A040F] font-medium text-lg md:text-lg lg:text-2xl pb-1">
            Burç
          </p>{" "}
          1 ile 12 arasında değerler alır. Bu değer, anne ve çocuk isimlerinin
          Ebced değerleri üzerinden hesaplanır. Ebced hesaplamasına dayanan bu
          burç, doğum tarihine göre olan burçtan farklıdır.
          <br />
        </h1>
      </div>
      <h1 className="p-5 border-2 border-zinc-300 rounded-xl shadow-lg">
        Eğer aradığınız isim veri tabanında yoksa, lütfen{" "}
        <span className="text-[#6A040F]">isimisigi@gmail.com </span>
        adresine e-posta yoluyla bildiriniz...
      </h1>
    </div>
  );
};

export default Information;
