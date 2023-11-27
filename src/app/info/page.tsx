import Information from "@/components/form/Information";
import NameFormWithReactHookFormWithZod from "@/components/form/NameFormWithReactHookFormWithZod";
import Image from "next/image";

const Page = () => {
  return (
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

        <div className="">
          <div className="mx-auto sm:p-10 p-5 w-full lg:max-w-7xl">
            <div className="">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-5">
                <div className=" rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10  lg:rounded-2xl lg:p-4 ">
                  <Image
                    src="/aile-sahil-2.jpg"
                    alt="kız çocuk ve kardeş fotoğrafı"
                    width={5000}
                    height={3500}
                    quality={100}
                    className="rounded-xl bg-cover bg-center bg-white  sm:p-0 md:p-0 shadow-2xl ring-1 ring-gray-900/0"
                  />
                </div>

                <div className="mx-auto mt-10 lg:mt-0 rounded-xl bg-gray-900/5 ring-1 ring-inset p-2 sm:p-4 md:p-6 ring-gray-900/10  lg:rounded-2xl lg:p-4 ">
                  <h1 className="flex justify-start text-2xl sm:text-3xl font-bold pb-3 text-primary">
                    EBCED NEDİR?
                  </h1>
                  <p
                    lang="tr"
                    className="hyphens-auto text-justify indent-8 text-lg font-semibold sm:font-normal sm:text-2xl"
                  >
                    Ebced, geleneksel Arap alfabesinin orijinal sıralamasının
                    ilk dört harfi (elif, ba, cim, dal) üzerine kurulmuş, bu
                    harflerin okunuşlarından (E-B-Ce-D) türetilen bir terimdir.
                    Bu sistemde, Ebced rakamları olarak bilinen bir alfabetik
                    sayı sistemi kullanılarak, kelimelerin, ifadelerin veya
                    cümlelerin sayısal değerleri hesaplanır. Bu işlem,
                    sözcüklerde veya metinlerde gizli bir şifrelemenin var
                    olduğu fikrine dayanır.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 rounded-xl bg-gray-900/5 ring-1 ring-inset p-2 sm:p-4 md:p-6 ring-gray-900/10 lg:mt-15 lg:rounded-2xl lg:p-4 ">
              <h1 className="flex justify-start text-2xl sm:text-3xl font-bold pb-3 text-primary">
                EBCED HESABININ TARİHÇESİ
              </h1>
              <p
                lang="tr"
                className="hyphens-auto text-justify indent-8 text-lg font-semibold sm:font-normal sm:text-2xl"
              >
                Ebced, antik Semitik alfabelerden türemiştir ve Mısır
                hiyerogliflerine dayanan protosemitik harflere kökenini
                dayandıran bir sistemdir. Bu sistemin ilk yaygın kullanımı
                Fenike ebcedi ile gerçekleşmiştir. Arap ebcedinin ise İbrani ve
                Aramî alfabelerinden esinlendiği su götürmez bir gerçektir.
                Ebced&apos;in kökeninin Mısır hiyeroglif rakamları ile bir
                ilişki içerisinde olabileceği hakkında bazı fikirler mevcuttur.
              </p>
              <p
                lang="tr"
                className="hyphens-auto text-justify indent-8 mt-2 text-lg sm:text-2xl font-semibold sm:font-normal "
              >
                Gün geçtikçe değişime uğrayan ebced, bu süreçte alfabelerin
                evrimi ve yapısal düzenlemeleriyle paralel bir yol izlemiştir.
                Örnek olarak, Arap alfabesine eklenen noktalı ve sesli harfler
                neticesinde ebced sistemi de bu değişiklikleri içermeye
                başlamıştır. Ebced hesabını kolayca hatırlamak için, Arap
                alfabesinin eski sıralamasını temsil eden ve bir anlamı olmayan
                özel kelimeler bir araya getirilerek bir cümle oluşturulmuştur:
                &quot;ebced&quot;, &quot;havvez&quot;, &quot;huttî&quot;,
                &quot;kelemen&quot;, &quot;sa&apos;fes&quot;,
                &quot;karaşet&quot;, &quot;sehhaz&quot;, &quot;dazıg&quot;. Bu
                kelimeler hakkında birçok spekülasyon mevcuttur. Bu
                spekülasyonlardan birinde; bu kelimelerden altı tanesinin Medyen
                hükümdarlarına, altı şeytana veya haftanın günlerine atıfta
                bulunduğu ortaya atılmıştır. Arap dil bilimcileri
                &quot;Müberred&quot; ve &quot;Seyrafi&quot; ise, bu yorumların
                asılsız olduğunu, ebcedi oluşturan kelimelerin yabancı kökenli
                olduğunu belirtmişlerdir. Zamanla, bu kelimeler muska ve vefk
                gibi nesnelerde kullanılarak her birine belirli bir sayısal
                değer atfedilmiştir.
              </p>
            </div>
            <div className="mt-10 rounded-xl bg-gray-900/5 ring-1 ring-inset p-2 sm:p-4 md:p-6 ring-gray-900/10 lg:mt-15 lg:rounded-2xl lg:p-4 ">
              <h1 className="flex justify-start text-2xl sm:text-3xl font-bold pb-3 text-primary">
                ARAP EBCEDİNDE SAYISAL DEĞERLER
              </h1>
              <p
                lang="tr"
                className="hyphens-auto text-justify indent-8 text-lg font-semibold sm:font-normal sm:text-2xl"
              >
                Arap Ebced sisteminde, harflerin sayısal değerleri, Arap
                alfabesinin mevcut sıralamasından ziyade, İbranice ve Süryanice
                alfabelerinin sıralamasına dayanır. Günümüzdeki Arap alfabesi
                sıralaması, benzer harflere eklenen noktalar ve bu benzer
                harflerin yan yana getirilmesiyle oluşmuştur. Ebced&apos;de
                harflerin sıralaması ve sayısal değerleri aşağıdaki gibidir:{" "}
              </p>
              <Image
                src={"/ebced-tablosu.jpg"}
                alt="ebced harflerinin sayısal değerleri"
                width={400}
                height={400}
                className="mt-3 mb-3"
              />
              <p className="text-justify indent-8 text-lg font-semibold sm:font-normal sm:text-2xl">
                Ayrıca, Arapçada doğal olarak bulunmayan ve özellikle Farsçadan
                alınarak Osmanlı Türkçesinde kullanılan pe, çim, je, gaf gibi
                harfler, ebced hesabında sırasıyla be, cim, ze ve kef ile aynı
                değere sahip olarak kabul edilir.
              </p>
            </div>
            <div className="text-justify mt-10 rounded-xl bg-gray-900/5 ring-1 ring-inset p-2 sm:p-4 md:p-6 ring-gray-900/10 lg:mt-15 lg:rounded-2xl lg:p-4 ">
              <h1 className="flex justify-start text-2xl sm:text-3xl font-bold pb-3 text-primary">
                MBTI (Myers-Briggs Type Indicator) (Myers-Briggs Tip Göstergesi)
              </h1>
              <p className="text-justify indent-8 text-lg font-semibold sm:font-normal sm:text-2xl">
                Myers-Briggs Tip Göstergesi (MBTI), bireylerin dünya algısını ve
                karar verme süreçlerini anlamak için kullanılan, kişisel
                tercihleri vurgulayan bir öz değerlendirme anketidir. Bu anket,
                genel nüfus için tasarlanmıştır ve doğuştan gelen kişilik
                çeşitliliğinin önemini öne çıkarır. MBTI&apos;nın temel fikri,
                her birimizin olayları yorumlama ve düşünme şeklimizde belirgin
                tercihlere sahip olduğumuzdur. Bu tercihler, ilgilerimizi,
                ihtiyaçlarımızı, değerlerimizi ve motivasyonlarımızı
                şekillendirir.
              </p>

              <p className="text-justify indent-8 mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                Genellikle, günlük tercihlerimizde kendi uzmanlık alanlarımıza
                yönelme eğilimindeyiz; burada kendimizi daha yetenekli ve rahat
                tanımlarız. Ancak, uzmanlık dışı alanlarda tercihler
                yaptığımızda, bu alanlarda beceri kazanmamıza rağmen, yabancılık
                ve zorlanma hissi yaşarız ve bu, ekstra çaba gerektirir. Kişilik
                tipimize uygun seçimler yaptığımızda, kendimizi daha yetkin,
                doğal ve enerjik hissederiz.
              </p>
              <p className="text-justify indent-8 mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                Myers-Briggs Tip Göstergesi, insan kişiliklerinin 16 farklı tipe
                ayrıldığını savunur. Bu tipler, dört temel kişilik özelliğinin
                çeşitli kombinasyonlarından oluşur: insanların nereye enerji
                yönelttiği (içe/dışa dönüklük), bilgiyi nasıl işlediği
                (sezgisel/duyusal), karar alma biçimi (mantıksal/duygusal) ve
                dış dünyaya yaklaşımı (algısal/yargısal). Bu özelliklerin farklı
                harf kombinasyonlarıyla temsil edildiği 16 MBTI tipi şu şekilde
                sınıflandırılır:
                <p className="mt-3 pb-3">
                  <p>
                    <span className="font-semibold mb-2">I: </span>İçe dönükler
                  </p>
                  <p>
                    <span className="font-semibold mb-2 ">E: </span>Dışa
                    dönükler
                  </p>
                  <p>
                    <span className="font-semibold mb-2">S: </span>
                    Sağduyulular, duyumsayanlar
                  </p>
                  <p>
                    <span className="font-semibold mb-2">N: </span>Sezgilerini
                    kullananlar
                  </p>
                  <p>
                    <span className="font-semibold mb-2">T: </span>Düşünenler
                  </p>
                  <p>
                    <span className="font-semibold mb-2">F: </span> Hissedenler
                  </p>
                  <p>
                    <span className="font-semibold mb-2">J: </span>
                    Yargılayanlar
                  </p>
                  <p>
                    <span className="font-semibold">P: </span>Kavrayanlar
                  </p>
                </p>
                <p className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl ">
                  <span className="text-[#6A040F]">Zanaatkarlar Grubu</span>
                  <div className="sm:indent-8">
                    <ul className="list-inside list-disc">
                      <li className=" mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Kurucular (ESTP): Kendinden emin, atılgan, iletişimde
                        ustalar. Zeka ve çabukluklarıyla öne çıkarlar.
                      </li>
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Ustalar (ISTP): Teknik beceride uzmanlar. Pratik, anlık
                        durumlara odaklı, bağımsızlar.
                      </li>
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Oyuncular (ESFP): Sahne sanatlarında yetenekliler,
                        sosyal ve eğlenceyi seven kişiler.
                      </li>
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Düzenleyiciler (ISFP): Sanata düşkün, sezgileri güçlü,
                        hassas ve duyarlı kişilikler.
                      </li>
                    </ul>
                  </div>
                </p>
                <p className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                  <span className="text-[#6A040F]">Vasiler Grubu</span>{" "}
                  <div className="sm:indent-8">
                    <ul className="list-inside list-disc">
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Amirler (ESTJ): Sorumluluk sahibi, düzen ve kural
                        yaratmada yetenekliler, lider ruhlu.
                      </li>
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Müfettişler (ISTJ): Görev odaklı, otoriteye saygılı,
                        titiz ve saygın.
                      </li>
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Destekçiler (ESFJ): Sosyal, yardımsever, eleştiriye
                        duyarlı.
                      </li>
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Koruyucular (ISFJ): Başkalarını koruma eğiliminde,
                        savurganlığa karşı, çalışkan ve fedakarlar.
                      </li>
                    </ul>
                  </div>
                </p>
                <p className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                  <span className="text-[#6A040F]">İdealistler Grubu</span>

                  <div className="sm:indent-8">
                    <ul className="list-inside list-disc">
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Öğretmenler (ENFJ): Eğitimde etkili, öğrencilerin
                        potansiyelini keşfeden, şefkatli ve hassas.
                      </li>
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Danışmanlar (INFJ): Manevi değerlere önem veren, derin
                        duygusal hislere sahip, rehberlikte başarılı.
                      </li>
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Şampiyonlar (ENFP): İlham verici, yenilikçi, bağımsız.
                      </li>
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Şifacılar (INFP): Derin şefkat duygusuyla donanmış,
                        sembolik anlamları çözebilen, anlamlı yaşam arayışında.
                      </li>
                    </ul>
                  </div>
                </p>
                <p className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                  <span className="text-[#6A040F]">Akılcılar Grubu</span>

                  <div className="sm:indent-8">
                    <ul className="list-inside list-disc">
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Mareşal (ENTJ): Liderlik becerileri yüksek, öngörülü,
                        kararlı, düzenli.
                      </li>
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Tepe Yöneticiler (INTJ): Otorite sahibi, kendine
                        güvenen, pratik çözüm bulabilen.
                      </li>
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Kaşifler (ENTP): Mekanik ve sistemlerde uzman, meraklı,
                        bağımsız yönetici arzusu.
                      </li>
                      <li className="mt-2 text-lg font-semibold sm:font-normal sm:text-2xl">
                        Mimarlar (INTP): Analitik, mantıklı, içe dönük ve sakin.
                      </li>
                    </ul>
                  </div>
                </p>
              </p>
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
  );
};

export default Page;
