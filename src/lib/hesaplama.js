export function hesapla(motherName, fatherName, kidName) {
  let harfPuan = 0;
  let totalPuan = 0;
  let totalPuan1 = 0;
  let totalPuan2 = 0;
  let totalPuan3 = 0;
  let i = 0;

  //   console.log(motherName);

  motherName = motherName.toLowerCase();
  fatherName = fatherName.toLowerCase();
  kidName = kidName.toLowerCase();

  const pattern =
    /(?:bi|bo|bur|bu|bül|ca|ce|ci|co|cu|çe|çi|de|dı|di|du|dü|fı|fe|fu|fir|gam|ge|gı|go|gö|gü|ha|he|hı|hü|ka|ke|kı|ki|ku|kud|le|ley|lı|li|lü|me|ne|nı|ni|nil|per|pi|re|rı|rım|ri|ru|rü|rüm|ruk|za|ze|zı|zü|sa|se|si|su|sü|sun|şa|şi|şit|te|tı|ti|tu|tü|vu|ve|vi|ye|yi)|./g;

  // ANNE FOR DÖNGÜSÜ //

  const resultAnne = motherName.match(pattern);

  console.log(resultAnne);

  console.log(motherName);

  for (i; i < resultAnne.length; i++) {
    switch (resultAnne[i]) {
      case "a": {
        harfPuan = 1;
        break;
      }
      case "b": {
        harfPuan = 2;
        break;
      }
      case "ba": {
        harfPuan = 2;
        break;
      }
      case "be": {
        if (resultAnne[0] === "be") {
          harfPuan = 2;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 7;
        } else {
          harfPuan = 2;
        }
        break;
      }
      case "bi": {
        if (resultAnne[0] === "bi") {
          harfPuan = 2;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 12;
        } else {
          harfPuan = 12;
        }
        break;
      }
      case "bo": {
        harfPuan = 8;
        break;
      }
      case "bu": {
        harfPuan = 8;
        break;
      }
      case "bur": {
        harfPuan = 208;
        break;
      }
      case "bü": {
        harfPuan = 2;
        break;
      }
      case "c": {
        harfPuan = 3;
        break;
      }
      case "ca": {
        if (resultAnne[0] === "ca") {
          harfPuan = 4;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 8;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "ce": {
        if (resultAnne[0] === "ce") {
          harfPuan = 3;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 8;
        } else {
          harfPuan = 3;
        }
        break;
      }
      case "ci": {
        if (resultAnne[0] === "ci") {
          harfPuan = 3;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 13;
        } else {
          harfPuan = 13;
        }
        break;
      }
      case "co": {
        harfPuan = 9;
        break;
      }
      case "cu": {
        if (resultAnne[0] === "cu") {
          harfPuan = 3;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 9;
        } else {
          harfPuan = 9;
        }
        break;
      }

      case "cü": {
        harfPuan = 3;
        break;
      }
      case "ç": {
        harfPuan = 3;
        break;
      }
      case "çe": {
        if (resultAnne[0] === "çe") {
          harfPuan = 3;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 8;
        } else {
          harfPuan = 3;
        }
        break;
      }
      case "çi": {
        if (resultAnne[0] === "çi") {
          harfPuan = 13;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 8;
        } else {
          harfPuan = 13;
        }
        break;
      }
      case "d": {
        harfPuan = 4;
        break;
      }
      case "de": {
        if (resultAnne[0] === "de") {
          harfPuan = 4;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 9;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "dı": {
        if (resultAnne[0] === "dı") {
          harfPuan = 14;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 14;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "di": {
        if (resultAnne[0] === "di") {
          harfPuan = 14;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 14;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "du": {
        if (resultAnne[0] === "du") {
          harfPuan = 10;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 4;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "dü": {
        if (resultAnne[0] === "dü") {
          harfPuan = 10;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 4;
        } else {
          harfPuan = 4;
        }
        break;
      }

      case "e": {
        harfPuan = 1;
        break;
      }
      case "f": {
        harfPuan = 80;
        break;
      }
      case "fı": {
        if (resultAnne[0] === "fı") {
          harfPuan = 80;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 85;
        } else {
          harfPuan = 80;
        }
        break;
      }

      case "fe": {
        if (resultAnne[0] === "fe") {
          harfPuan = 80;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 85;
        } else {
          harfPuan = 80;
        }
        break;
      }
      case "fu": {
        if (resultAnne[0] === "fu") {
          harfPuan = 80;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 85;
        } else {
          harfPuan = 80;
        }
        break;
      }
      case "fir": {
        if (resultAnne[0] === "fir") {
          harfPuan = 280;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 290;
        } else {
          harfPuan = 290;
        }
        break;
      }
      case "g": {
        harfPuan = 20;
        break;
      }
      case "ga": {
        if (resultAnne[0] === "ga") {
          harfPuan = 1001;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 21;
        } else {
          harfPuan = 21;
        }
        break;
      }

      case "gam": {
        if (resultAnne[0] === "gam") {
          harfPuan = 1040;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 1041;
        } else {
          harfPuan = 1041;
        }
        break;
      }
      case "ge": {
        if (resultAnne[0] === "ge") {
          harfPuan = 21;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 20;
        } else {
          harfPuan = 25;
        }
        break;
      }
      case "gı": {
        if (resultAnne[0] === "gı") {
          harfPuan = 30;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 30;
        } else {
          harfPuan = 20;
        }
        break;
      }
      case "gi": {
        if (resultAnne[0] === "gi") {
          harfPuan = 30;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 30;
        } else {
          harfPuan = 20;
        }
        break;
      }
      case "go": {
        harfPuan = 20;
        break;
      }

      case "gö": {
        harfPuan = 26;
        break;
      }
      case "gu": {
        harfPuan = 26;
        break;
      }
      case "gü": {
        if (resultAnne[0] === "gü") {
          harfPuan = 20;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 20;
        } else {
          harfPuan = 26;
        }
        break;
      }
      case "ğ": {
        harfPuan = 1000;
        break;
      }

      case "h": {
        harfPuan = 8;
        break;
      }

      case "ha": {
        if (resultBaba[0] === "ha") {
          harfPuan = 8;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 13;
        } else {
          harfPuan = 8;
        }
        break;
      }
      case "he": {
        if (resultAnne[0] === "he") {
          harfPuan = 5;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 5;
        } else {
          harfPuan = 8;
        }
        break;
      }
      case "hi": {
        if (resultAnne[0] === "hi") {
          harfPuan = 8;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 5;
        } else {
          harfPuan = 5;
        }
        break;
      }
      case "hu": {
        harfPuan = 14;
        break;
      }
      case "hüs": {
        harfPuan = 68;
        break;
      }
      case "hül": {
        harfPuan = 606;
        break;
      }
      case "ı": {
        harfPuan = 10;
        break;
      }

      case "i":
        {
          harfPuan = 10;
        }
        break;

      case "j": {
        harfPuan = 7;
        break;
      }

      case "k": {
        harfPuan = 100;
        break;
      }
      case "ka": {
        if (resultAnne[0] === "ka") {
          harfPuan = 100;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 105;
        } else {
          harfPuan = 101;
        }
        break;
      }
      case "ke": {
        if (resultAnne[0] === "ke") {
          harfPuan = 20;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 25;
        } else {
          harfPuan = 20;
        }
        break;
      }
      case "kı": {
        harfPuan = 110;
        break;
      }
      case "ki": {
        if (resultAnne[0] === "ki") {
          harfPuan = 20;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 30;
        } else {
          harfPuan = 30;
        }
        break;
      }
      case "ku": {
        harfPuan = 106;
        break;
      }
      case "kud": {
        harfPuan = 104;
        break;
      }
      case "kü": {
        harfPuan = 106;
        break;
      }
      case "küb": {
        harfPuan = 100;
        break;
      }
      case "l": {
        harfPuan = 30;
        break;
      }
      case "le": {
        if (resultAnne[0] === "le") {
          harfPuan = 30;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 35;
        } else {
          harfPuan = 30;
        }
        break;
      }
      case "ley": {
        harfPuan = 40;
        break;
      }
      case "lı": {
        harfPuan = 40;
        break;
      }
      case "li": {
        if (resultAnne[0] === "li") {
          harfPuan = 40;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 40;
        } else {
          harfPuan = 30;
        }
        break;
      }
      case "lu": {
        harfPuan = 36;
        break;
      }
      case "lü": {
        if (resultAnne[0] === "lü") {
          harfPuan = 30;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 36;
        } else {
          harfPuan = 36;
        }
        break;
      }
      case "m": {
        harfPuan = 40;
        break;
      }
      case "me": {
        if (resultAnne[0] === "me") {
          harfPuan = 40;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 45;
        } else {
          harfPuan = 40;
        }
        break;
      }
      case "n": {
        harfPuan = 50;
        break;
      }
      case "ne": {
        if (resultAnne[0] === "ne") {
          harfPuan = 50;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 55;
        } else {
          harfPuan = 50;
        }
        break;
      }
      case "nı": {
        harfPuan = 50;
        break;
      }
      case "ni": {
        if (resultAnne[0] === "ni") {
          harfPuan = 50;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 60;
        } else {
          harfPuan = 60;
        }
        break;
      }
      case "nil": {
        harfPuan = 60;
        break;
      }
      case "o": {
        harfPuan = 7;
        break;
      }
      case "ö": {
        harfPuan = 6;
        break;
      }
      case "p": {
        harfPuan = 2;
        break;
      }
      case "per": {
        harfPuan = 202;
        break;
      }
      case "pi": {
        harfPuan = 2;
        break;
      }

      case "r": {
        harfPuan = 200;
        break;
      }
      case "re": {
        if (resultAnne[0] === "re") {
          harfPuan = 200;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 205;
        } else {
          harfPuan = 200;
        }
        break;
      }
      case "rı": {
        harfPuan = 200;
        break;
      }
      case "rım": {
        harfPuan = 210;
        break;
      }
      case "ri": {
        if (resultAnne[0] === "ri") {
          harfPuan = 200;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 210;
        } else {
          harfPuan = 210;
        }
        break;
      }
      case "ru": {
        harfPuan = 206;
        break;
      }
      case "ruk": {
        harfPuan = 300;
        break;
      }
      case "rü": {
        if (resultAnne[0] === "rü") {
          harfPuan = 206;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 210;
        } else {
          harfPuan = 206;
        }
        break;
      }
      case "rüm": {
        harfPuan = 240;
        break;
      }
      case "s": {
        harfPuan = 60;
        break;
      }
      case "sa": {
        if (resultAnne[0] === "sa") {
          harfPuan = 90;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 70;
        } else {
          harfPuan = 61;
        }
        break;
      }
      case "se": {
        if (resultAnne[0] === "se") {
          harfPuan = 60;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 65;
        } else {
          harfPuan = 60;
        }
        break;
      }
      case "sı": {
        if (resultAnne[0] === "sı") {
          harfPuan = 90;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 100;
        } else {
          harfPuan = 90;
        }
        break;
      }
      case "si": {
        if (resultAnne[0] === "si") {
          harfPuan = 60;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 70;
        } else {
          harfPuan = 70;
        }
        break;
      }
      case "su": {
        if (resultAnne[0] === "su") {
          harfPuan = 60;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 96;
        } else {
          harfPuan = 60;
        }
        break;
      }
      case "sun": {
        harfPuan = 146;
      }
      case "sü": {
        if (resultAnne[0] === "sü") {
          harfPuan = 60;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 66;
        } else {
          harfPuan = 66;
        }
        break;
      }
      case "ş": {
        harfPuan = 300;
        break;
      }
      case "şa": {
        if (resultAnne[0] === "şa") {
          harfPuan = 300;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 370;
        } else {
          harfPuan = 301;
        }
        break;
      }
      case "şim": {
        harfPuan = 340;
        break;
      }
      case "şit": {
        harfPuan = 304;
        break;
      }
      case "t": {
        harfPuan = 4;
        break;
      }
      case "te": {
        harfPuan = 400;
        break;
      }
      case "tı": {
        harfPuan = 9;
        break;
      }
      case "ti": {
        harfPuan = 400;
        break;
      }
      case "tu": {
        if (resultAnne[0] === "tu") {
          harfPuan = 15;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 406;
        } else {
          harfPuan = 406;
        }
        break;
      }
      case "tü": {
        harfPuan = 406;
        break;
      }
      case "u": {
        if (resultAnne[0] === "u") {
          harfPuan = 7;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 6;
        } else {
          harfPuan = 6;
        }
        break;
      }
      case "ü": {
        if (resultAnne[0] === "ü") {
          harfPuan = 7;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 6;
        } else {
          harfPuan = 6;
        }
        break;
      }

      case "v": {
        harfPuan = 6;
        break;
      }
      case "vu": {
        harfPuan = 6;
        break;
      }
      case "ve": {
        if (resultAnne[0] === "ve") {
          harfPuan = 6;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 11;
        } else {
          harfPuan = 6;
        }
        break;
      }
      case "vi": {
        if (resultAnne[0] === "vi") {
          harfPuan = 6;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 16;
        } else {
          harfPuan = 16;
        }
        break;
      }
      case "y": {
        harfPuan = 10;
        break;
      }
      case "ye": {
        if (resultAnne[0] === "ye") {
          harfPuan = 11;
        } else if (resultAnne[resultAnne.length - 1]) {
          harfPuan = 15;
        } else {
          harfPuan = 11;
        }
        break;
      }
      case "yi": {
        harfPuan = 10;
        break;
      }
      case "z": {
        harfPuan = 7;
        break;
      }
      case "za": {
        harfPuan = 700;
        break;
      }
      case "ze": {
        harfPuan = 7;
        break;
      }
      case "zı": {
        harfPuan = 900;
        break;
      }
      case "zü": {
        harfPuan = 45;
        break;
      }
    }
    console.log(resultAnne[i]);

    totalPuan1 += harfPuan;

    console.log(harfPuan);
  }
  console.log(totalPuan1);
  i = 0;

  // ANNE FOR DÖNGÜSÜ //

  // BABA FOR DÖNGÜSÜ //

  const resultBaba = fatherName.match(pattern);

  console.log(resultBaba);

  console.log(fatherName);

  for (i; i < resultBaba.length; i++) {
    switch (resultBaba[i]) {
      case "a": {
        harfPuan = 1;
        break;
      }
      case "b": {
        harfPuan = 2;
        break;
      }
      case "ba": {
        harfPuan = 2;
        break;
      }
      case "be": {
        if (resultBaba[0] === "be") {
          harfPuan = 2;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 7;
        } else {
          harfPuan = 2;
        }
        break;
      }
      case "bi": {
        if (resultBaba[0] === "bi") {
          harfPuan = 2;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 12;
        } else {
          harfPuan = 12;
        }
        break;
      }
      case "bo": {
        harfPuan = 8;
        break;
      }
      case "bu": {
        harfPuan = 8;
        break;
      }
      case "bur": {
        harfPuan = 208;
        break;
      }
      case "bü": {
        harfPuan = 2;
        break;
      }
      case "c": {
        harfPuan = 3;
        break;
      }
      case "ca": {
        if (resultBaba[0] === "ca") {
          harfPuan = 4;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 8;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "ce": {
        if (resultBaba[0] === "ce") {
          harfPuan = 3;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 8;
        } else {
          harfPuan = 3;
        }
        break;
      }
      case "ci": {
        if (resultBaba[0] === "ci") {
          harfPuan = 3;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 13;
        } else {
          harfPuan = 13;
        }
        break;
      }
      case "co": {
        harfPuan = 9;
        break;
      }
      case "cu": {
        if (resultBaba[0] === "cu") {
          harfPuan = 3;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 9;
        } else {
          harfPuan = 9;
        }
        break;
      }

      case "cü": {
        harfPuan = 3;
        break;
      }
      case "ç": {
        harfPuan = 3;
        break;
      }
      case "çe": {
        if (resultBaba[0] === "çe") {
          harfPuan = 3;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 8;
        } else {
          harfPuan = 3;
        }
        break;
      }
      case "çi": {
        if (resultBaba[0] === "çi") {
          harfPuan = 13;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 8;
        } else {
          harfPuan = 13;
        }
        break;
      }
      case "d": {
        harfPuan = 4;
        break;
      }
      case "de": {
        if (resultBaba[0] === "de") {
          harfPuan = 4;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 9;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "dı": {
        if (resultBaba[0] === "dı") {
          harfPuan = 14;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 14;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "di": {
        if (resultBaba[0] === "di") {
          harfPuan = 14;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 14;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "du": {
        if (resultBaba[0] === "du") {
          harfPuan = 10;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 4;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "dü": {
        if (resultBaba[0] === "dü") {
          harfPuan = 10;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 4;
        } else {
          harfPuan = 4;
        }
        break;
      }

      case "e": {
        harfPuan = 1;
        break;
      }
      case "f": {
        harfPuan = 80;
        break;
      }
      case "fı": {
        if (resultBaba[0] === "fı") {
          harfPuan = 80;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 85;
        } else {
          harfPuan = 80;
        }
        break;
      }

      case "fe": {
        if (resultBaba[0] === "fe") {
          harfPuan = 80;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 85;
        } else {
          harfPuan = 80;
        }
        break;
      }
      case "fu": {
        if (resultBaba[0] === "fu") {
          harfPuan = 80;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 85;
        } else {
          harfPuan = 80;
        }
        break;
      }
      case "fir": {
        if (resultBaba[0] === "fir") {
          harfPuan = 280;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 290;
        } else {
          harfPuan = 290;
        }
        break;
      }
      case "ga": {
        if (resultBaba[0] === "ga") {
          harfPuan = 1001;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 21;
        } else {
          harfPuan = 21;
        }
        break;
      }

      case "gam": {
        if (resultBaba[0] === "gam") {
          harfPuan = 1040;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 1041;
        } else {
          harfPuan = 1041;
        }
        break;
      }
      case "ge": {
        if (resultBaba[0] === "ge") {
          harfPuan = 21;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 20;
        } else {
          harfPuan = 25;
        }
        break;
      }
      case "gı": {
        if (resultBaba[0] === "gı") {
          harfPuan = 30;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 30;
        } else {
          harfPuan = 20;
        }
        break;
      }
      case "gi": {
        if (resultBaba[0] === "gi") {
          harfPuan = 30;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 30;
        } else {
          harfPuan = 20;
        }
        break;
      }
      case "go": {
        harfPuan = 20;
        break;
      }

      case "gö": {
        harfPuan = 26;
        break;
      }
      case "gu": {
        harfPuan = 26;
        break;
      }
      case "gü": {
        if (resultBaba[0] === "gü") {
          harfPuan = 20;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 20;
        } else {
          harfPuan = 26;
        }
        break;
      }
      case "ğ": {
        harfPuan = 1000;
        break;
      }

      case "h": {
        harfPuan = 8;
        break;
      }

      case "ha": {
        if (resultBaba[0] === "ha") {
          harfPuan = 8;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 13;
        } else {
          harfPuan = 8;
        }
        break;
      }
      case "he": {
        if (resultBaba[0] === "he") {
          harfPuan = 5;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 5;
        } else {
          harfPuan = 8;
        }
        break;
      }
      case "hi": {
        if (resultBaba[0] === "hi") {
          harfPuan = 8;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 5;
        } else {
          harfPuan = 5;
        }
        break;
      }
      case "hu": {
        harfPuan = 14;
        break;
      }
      case "hüs": {
        harfPuan = 68;
        break;
      }
      case "hül": {
        harfPuan = 606;
        break;
      }
      case "ı": {
        harfPuan = 10;
        break;
      }

      case "i":
        {
          harfPuan = 10;
        }
        break;

      case "j": {
        harfPuan = 7;
        break;
      }

      case "k": {
        harfPuan = 100;
        break;
      }
      case "ka": {
        if (resultBaba[0] === "ka") {
          harfPuan = 100;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 105;
        } else {
          harfPuan = 101;
        }
        break;
      }
      case "ke": {
        if (resultBaba[0] === "ke") {
          harfPuan = 20;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 25;
        } else {
          harfPuan = 20;
        }
        break;
      }
      case "kı": {
        harfPuan = 110;
        break;
      }
      case "ki": {
        if (resultBaba[0] === "ki") {
          harfPuan = 20;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 30;
        } else {
          harfPuan = 30;
        }
        break;
      }
      case "ku": {
        harfPuan = 106;
        break;
      }
      case "kud": {
        harfPuan = 104;
        break;
      }
      case "kü": {
        harfPuan = 106;
        break;
      }
      case "küb": {
        harfPuan = 100;
        break;
      }
      case "l": {
        harfPuan = 30;
        break;
      }
      case "le": {
        if (resultBaba[0] === "le") {
          harfPuan = 30;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 35;
        } else {
          harfPuan = 30;
        }
        break;
      }
      case "ley": {
        harfPuan = 40;
        break;
      }
      case "lı": {
        harfPuan = 40;
        break;
      }
      case "li": {
        if (resultBaba[0] === "li") {
          harfPuan = 40;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 40;
        } else {
          harfPuan = 30;
        }
        break;
      }
      case "lu": {
        harfPuan = 36;
        break;
      }
      case "lü": {
        if (resultBaba[0] === "lü") {
          harfPuan = 30;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 36;
        } else {
          harfPuan = 36;
        }
        break;
      }
      case "m": {
        harfPuan = 40;
        break;
      }
      case "me": {
        if (resultBaba[0] === "me") {
          harfPuan = 40;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 45;
        } else {
          harfPuan = 40;
        }
        break;
      }
      case "n": {
        harfPuan = 50;
        break;
      }
      case "ne": {
        if (resultBaba[0] === "ne") {
          harfPuan = 50;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 55;
        } else {
          harfPuan = 50;
        }
        break;
      }
      case "nı": {
        harfPuan = 50;
        break;
      }
      case "ni": {
        if (resultBaba[0] === "ni") {
          harfPuan = 50;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 60;
        } else {
          harfPuan = 60;
        }
        break;
      }
      case "nil": {
        harfPuan = 60;
        break;
      }
      case "o": {
        harfPuan = 7;
        break;
      }
      case "ö": {
        harfPuan = 6;
        break;
      }
      case "p": {
        harfPuan = 2;
        break;
      }
      case "per": {
        harfPuan = 202;
        break;
      }
      case "pi": {
        harfPuan = 2;
        break;
      }

      case "r": {
        harfPuan = 200;
        break;
      }
      case "re": {
        if (resultBaba[0] === "re") {
          harfPuan = 200;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 205;
        } else {
          harfPuan = 200;
        }
        break;
      }
      case "rı": {
        harfPuan = 200;
        break;
      }
      case "rım": {
        harfPuan = 210;
        break;
      }
      case "ri": {
        if (resultBaba[0] === "ri") {
          harfPuan = 200;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 210;
        } else {
          harfPuan = 210;
        }
        break;
      }
      case "ru": {
        harfPuan = 206;
        break;
      }
      case "ruk": {
        harfPuan = 300;
        break;
      }
      case "rü": {
        if (resultBaba[0] === "rü") {
          harfPuan = 206;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 210;
        } else {
          harfPuan = 206;
        }
        break;
      }
      case "rüm": {
        harfPuan = 240;
        break;
      }
      case "s": {
        harfPuan = 60;
        break;
      }
      case "sa": {
        if (resultBaba[0] === "sa") {
          harfPuan = 90;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 70;
        } else {
          harfPuan = 61;
        }
        break;
      }
      case "se": {
        if (resultBaba[0] === "se") {
          harfPuan = 60;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 65;
        } else {
          harfPuan = 60;
        }
        break;
      }
      case "sı": {
        if (resultBaba[0] === "sı") {
          harfPuan = 90;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 100;
        } else {
          harfPuan = 90;
        }
        break;
      }
      case "si": {
        if (resultBaba[0] === "si") {
          harfPuan = 60;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 70;
        } else {
          harfPuan = 70;
        }
        break;
      }
      case "su": {
        if (resultBaba[0] === "su") {
          harfPuan = 60;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 96;
        } else {
          harfPuan = 60;
        }
        break;
      }
      case "sun": {
        harfPuan = 146;
      }
      case "sü": {
        if (resultBaba[0] === "sü") {
          harfPuan = 60;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 66;
        } else {
          harfPuan = 66;
        }
        break;
      }
      case "ş": {
        harfPuan = 300;
        break;
      }
      case "şa": {
        if (resultBaba[0] === "şa") {
          harfPuan = 300;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 370;
        } else {
          harfPuan = 301;
        }
        break;
      }
      case "şim": {
        harfPuan = 340;
        break;
      }
      case "şit": {
        harfPuan = 304;
        break;
      }
      case "t": {
        harfPuan = 4;
        break;
      }
      case "te": {
        harfPuan = 400;
        break;
      }
      case "tı": {
        harfPuan = 9;
        break;
      }
      case "ti": {
        harfPuan = 400;
        break;
      }
      case "tu": {
        if (resultBaba[0] === "tu") {
          harfPuan = 15;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 406;
        } else {
          harfPuan = 406;
        }
        break;
      }
      case "tü": {
        harfPuan = 406;
        break;
      }
      case "u": {
        if (resultBaba[0] === "u") {
          harfPuan = 7;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 6;
        } else {
          harfPuan = 6;
        }
        break;
      }
      case "ü": {
        if (resultBaba[0] === "ü") {
          harfPuan = 7;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 6;
        } else {
          harfPuan = 6;
        }
        break;
      }

      case "v": {
        harfPuan = 6;
        break;
      }
      case "vu": {
        harfPuan = 6;
        break;
      }
      case "ve": {
        if (resultBaba[0] === "ve") {
          harfPuan = 6;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 11;
        } else {
          harfPuan = 6;
        }
        break;
      }
      case "vi": {
        if (resultBaba[0] === "vi") {
          harfPuan = 6;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 16;
        } else {
          harfPuan = 16;
        }
        break;
      }
      case "y": {
        harfPuan = 10;
        break;
      }
      case "ye": {
        if (resultBaba[0] === "ye") {
          harfPuan = 11;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 15;
        } else {
          harfPuan = 11;
        }
        break;
      }
      case "yi": {
        harfPuan = 10;
        break;
      }
      case "z": {
        harfPuan = 7;
        break;
      }
      case "za": {
        harfPuan = 700;
        break;
      }
      case "ze": {
        harfPuan = 7;
        break;
      }
      case "zı": {
        harfPuan = 900;
        break;
      }
      case "zü": {
        harfPuan = 45;
        break;
      }
    }
    console.log(resultBaba[i]);

    totalPuan2 += harfPuan;

    console.log(harfPuan);
  }
  console.log(totalPuan2);
  i = 0;

  // BABA FOR DÖNGÜSÜ //

  // COCUK FOR DÖNGÜSÜ //

  const resultCocuk = kidName.match(pattern);

  console.log(resultCocuk);

  console.log(kidName);

  for (i; i < resultCocuk.length; i++) {
    switch (resultCocuk[i]) {
      case "a": {
        harfPuan = 1;
        break;
      }
      case "b": {
        harfPuan = 2;
        break;
      }
      case "ba": {
        harfPuan = 2;
        break;
      }
      case "be": {
        if (resultCocuk[0] === "be") {
          harfPuan = 2;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 7;
        } else {
          harfPuan = 2;
        }
        break;
      }
      case "bi": {
        if (resultCocuk[0] === "bi") {
          harfPuan = 2;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 12;
        } else {
          harfPuan = 12;
        }
        break;
      }
      case "bo": {
        harfPuan = 8;
        break;
      }
      case "bu": {
        harfPuan = 8;
        break;
      }
      case "bur": {
        harfPuan = 208;
        break;
      }
      case "bü": {
        harfPuan = 2;
        break;
      }
      case "c": {
        harfPuan = 3;
        break;
      }
      case "ca": {
        if (resultCocuk[0] === "ca") {
          harfPuan = 4;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 8;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "ce": {
        if (resultCocuk[0] === "ce") {
          harfPuan = 3;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 8;
        } else {
          harfPuan = 3;
        }
        break;
      }
      case "ci": {
        if (resultCocuk[0] === "ci") {
          harfPuan = 3;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 13;
        } else {
          harfPuan = 13;
        }
        break;
      }
      case "co": {
        harfPuan = 9;
        break;
      }
      case "cu": {
        if (resultCocuk[0] === "cu") {
          harfPuan = 3;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 9;
        } else {
          harfPuan = 9;
        }
        break;
      }

      case "cü": {
        harfPuan = 3;
        break;
      }
      case "ç": {
        harfPuan = 3;
        break;
      }
      case "çe": {
        if (resultCocuk[0] === "çe") {
          harfPuan = 3;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 8;
        } else {
          harfPuan = 3;
        }
        break;
      }
      case "çi": {
        if (resultCocuk[0] === "çi") {
          harfPuan = 13;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 8;
        } else {
          harfPuan = 13;
        }
        break;
      }
      case "d": {
        harfPuan = 4;
        break;
      }
      case "de": {
        if (resultCocuk[0] === "de") {
          harfPuan = 4;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 9;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "dı": {
        if (resultCocuk[0] === "dı") {
          harfPuan = 14;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 14;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "di": {
        if (resultCocuk[0] === "di") {
          harfPuan = 14;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 14;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "du": {
        if (resultCocuk[0] === "du") {
          harfPuan = 10;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 4;
        } else {
          harfPuan = 4;
        }
        break;
      }
      case "dü": {
        if (resultCocuk[0] === "dü") {
          harfPuan = 10;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 4;
        } else {
          harfPuan = 4;
        }
        break;
      }

      case "e": {
        harfPuan = 1;
        break;
      }
      case "f": {
        harfPuan = 80;
        break;
      }
      case "fı": {
        if (resultCocuk[0] === "fı") {
          harfPuan = 80;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 85;
        } else {
          harfPuan = 80;
        }
        break;
      }

      case "fe": {
        if (resultCocuk[0] === "fe") {
          harfPuan = 80;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 85;
        } else {
          harfPuan = 80;
        }
        break;
      }
      case "fu": {
        if (resultCocuk[0] === "fu") {
          harfPuan = 80;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 85;
        } else {
          harfPuan = 80;
        }
        break;
      }
      case "fir": {
        if (resultCocuk[0] === "fir") {
          harfPuan = 280;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 290;
        } else {
          harfPuan = 290;
        }
        break;
      }

      case "ga": {
        if (resultCocuk[0] === "ga") {
          harfPuan = 1001;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 21;
        } else {
          harfPuan = 21;
        }
        break;
      }

      case "gam": {
        if (resultCocuk[0] === "gam") {
          harfPuan = 1040;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 1041;
        } else {
          harfPuan = 1041;
        }
        break;
      }
      case "ge": {
        if (resultCocuk[0] === "ge") {
          harfPuan = 21;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 20;
        } else {
          harfPuan = 25;
        }
        break;
      }
      case "gı": {
        if (resultCocuk[0] === "gı") {
          harfPuan = 30;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 30;
        } else {
          harfPuan = 20;
        }
        break;
      }
      case "gi": {
        if (resultCocuk[0] === "gi") {
          harfPuan = 30;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 30;
        } else {
          harfPuan = 20;
        }
        break;
      }
      case "go": {
        harfPuan = 20;
        break;
      }

      case "gö": {
        harfPuan = 26;
        break;
      }
      case "gu": {
        harfPuan = 26;
        break;
      }
      case "gü": {
        if (resultCocuk[0] === "gü") {
          harfPuan = 20;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 20;
        } else {
          harfPuan = 26;
        }
        break;
      }
      case "ğ": {
        harfPuan = 1000;
        break;
      }

      case "h": {
        harfPuan = 8;
        break;
      }

      case "ha": {
        if (resultBaba[0] === "ha") {
          harfPuan = 8;
        } else if (resultBaba[resultBaba.length - 1]) {
          harfPuan = 13;
        } else {
          harfPuan = 8;
        }
        break;
      }
      case "he": {
        if (resultCocuk[0] === "he") {
          harfPuan = 5;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 5;
        } else {
          harfPuan = 8;
        }
        break;
      }
      case "hi": {
        if (resultCocuk[0] === "hi") {
          harfPuan = 8;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 5;
        } else {
          harfPuan = 5;
        }
        break;
      }
      case "hu": {
        harfPuan = 14;
        break;
      }
      case "hüs": {
        harfPuan = 68;
        break;
      }
      case "hül": {
        harfPuan = 606;
        break;
      }
      case "ı": {
        harfPuan = 10;
        break;
      }

      case "i":
        {
          harfPuan = 10;
        }
        break;

      case "j": {
        harfPuan = 7;
        break;
      }

      case "k": {
        harfPuan = 100;
        break;
      }
      case "ka": {
        if (resultCocuk[0] === "ka") {
          harfPuan = 100;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 105;
        } else {
          harfPuan = 101;
        }
        break;
      }
      case "ke": {
        if (resultCocuk[0] === "ke") {
          harfPuan = 20;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 25;
        } else {
          harfPuan = 20;
        }
        break;
      }
      case "kı": {
        harfPuan = 110;
        break;
      }
      case "ki": {
        if (resultCocuk[0] === "ki") {
          harfPuan = 20;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 30;
        } else {
          harfPuan = 30;
        }
        break;
      }
      case "ku": {
        harfPuan = 106;
        break;
      }
      case "kud": {
        harfPuan = 104;
        break;
      }
      case "kü": {
        harfPuan = 106;
        break;
      }
      case "küb": {
        harfPuan = 100;
        break;
      }
      case "l": {
        harfPuan = 30;
        break;
      }
      case "le": {
        if (resultCocuk[0] === "le") {
          harfPuan = 30;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 35;
        } else {
          harfPuan = 30;
        }
        break;
      }
      case "ley": {
        harfPuan = 40;
        break;
      }
      case "lı": {
        harfPuan = 40;
        break;
      }
      case "li": {
        if (resultCocuk[0] === "li") {
          harfPuan = 40;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 40;
        } else {
          harfPuan = 30;
        }
        break;
      }
      case "lu": {
        harfPuan = 36;
        break;
      }
      case "lü": {
        if (resultCocuk[0] === "lü") {
          harfPuan = 30;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 36;
        } else {
          harfPuan = 36;
        }
        break;
      }
      case "m": {
        harfPuan = 40;
        break;
      }
      case "me": {
        if (resultCocuk[0] === "me") {
          harfPuan = 40;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 45;
        } else {
          harfPuan = 40;
        }
        break;
      }
      case "n": {
        harfPuan = 50;
        break;
      }
      case "ne": {
        if (resultCocuk[0] === "ne") {
          harfPuan = 50;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 55;
        } else {
          harfPuan = 50;
        }
        break;
      }
      case "nı": {
        harfPuan = 50;
        break;
      }
      case "ni": {
        if (resultCocuk[0] === "ni") {
          harfPuan = 50;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 60;
        } else {
          harfPuan = 60;
        }
        break;
      }
      case "nil": {
        harfPuan = 60;
        break;
      }
      case "o": {
        harfPuan = 7;
        break;
      }
      case "ö": {
        harfPuan = 6;
        break;
      }
      case "p": {
        harfPuan = 2;
        break;
      }
      case "per": {
        harfPuan = 202;
        break;
      }
      case "pi": {
        harfPuan = 2;
        break;
      }

      case "r": {
        harfPuan = 200;
        break;
      }
      case "re": {
        if (resultCocuk[0] === "re") {
          harfPuan = 200;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 205;
        } else {
          harfPuan = 200;
        }
        break;
      }
      case "rı": {
        harfPuan = 200;
        break;
      }
      case "rım": {
        harfPuan = 210;
        break;
      }
      case "ri": {
        if (resultCocuk[0] === "ri") {
          harfPuan = 200;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 210;
        } else {
          harfPuan = 210;
        }
        break;
      }
      case "ru": {
        harfPuan = 206;
        break;
      }
      case "ruk": {
        harfPuan = 300;
        break;
      }
      case "rü": {
        if (resultCocuk[0] === "rü") {
          harfPuan = 206;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 210;
        } else {
          harfPuan = 206;
        }
        break;
      }
      case "rüm": {
        harfPuan = 240;
        break;
      }
      case "s": {
        harfPuan = 60;
        break;
      }
      case "sa": {
        if (resultCocuk[0] === "sa") {
          harfPuan = 90;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 70;
        } else {
          harfPuan = 61;
        }
        break;
      }
      case "se": {
        if (resultCocuk[0] === "se") {
          harfPuan = 60;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 65;
        } else {
          harfPuan = 60;
        }
        break;
      }
      case "sı": {
        if (resultCocuk[0] === "sı") {
          harfPuan = 90;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 100;
        } else {
          harfPuan = 90;
        }
        break;
      }
      case "si": {
        if (resultCocuk[0] === "si") {
          harfPuan = 60;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 70;
        } else {
          harfPuan = 70;
        }
        break;
      }
      case "su": {
        if (resultCocuk[0] === "su") {
          harfPuan = 60;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 96;
        } else {
          harfPuan = 60;
        }
        break;
      }
      case "sun": {
        harfPuan = 146;
      }
      case "sü": {
        if (resultCocuk[0] === "sü") {
          harfPuan = 60;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 66;
        } else {
          harfPuan = 66;
        }
        break;
      }
      case "ş": {
        harfPuan = 300;
        break;
      }
      case "şa": {
        if (resultCocuk[0] === "şa") {
          harfPuan = 300;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 370;
        } else {
          harfPuan = 301;
        }
        break;
      }
      case "şim": {
        harfPuan = 340;
        break;
      }
      case "şit": {
        harfPuan = 304;
        break;
      }
      case "t": {
        harfPuan = 4;
        break;
      }
      case "te": {
        harfPuan = 400;
        break;
      }
      case "tı": {
        harfPuan = 9;
        break;
      }
      case "ti": {
        harfPuan = 400;
        break;
      }
      case "tu": {
        if (resultCocuk[0] === "tu") {
          harfPuan = 15;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 406;
        } else {
          harfPuan = 406;
        }
        break;
      }
      case "tü": {
        harfPuan = 406;
        break;
      }
      case "u": {
        if (resultCocuk[0] === "u") {
          harfPuan = 7;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 6;
        } else {
          harfPuan = 6;
        }
        break;
      }
      case "ü": {
        if (resultCocuk[0] === "ü") {
          harfPuan = 7;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 6;
        } else {
          harfPuan = 6;
        }
        break;
      }

      case "v": {
        harfPuan = 6;
        break;
      }
      case "vu": {
        harfPuan = 6;
        break;
      }
      case "ve": {
        if (resultCocuk[0] === "ve") {
          harfPuan = 6;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 11;
        } else {
          harfPuan = 6;
        }
        break;
      }
      case "vi": {
        if (resultCocuk[0] === "vi") {
          harfPuan = 6;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 16;
        } else {
          harfPuan = 16;
        }
        break;
      }
      case "y": {
        harfPuan = 10;
        break;
      }
      case "ye": {
        if (resultCocuk[0] === "ye") {
          harfPuan = 11;
        } else if (resultCocuk[resultCocuk.length - 1]) {
          harfPuan = 15;
        } else {
          harfPuan = 11;
        }
        break;
      }
      case "yi": {
        harfPuan = 10;
        break;
      }
      case "z": {
        harfPuan = 7;
        break;
      }
      case "za": {
        harfPuan = 700;
        break;
      }
      case "ze": {
        harfPuan = 7;
        break;
      }
      case "zı": {
        harfPuan = 900;
        break;
      }
      case "zü": {
        harfPuan = 45;
        break;
      }
    }
    console.log(resultCocuk[i]);

    totalPuan3 += harfPuan;

    console.log(harfPuan);
  }
  console.log(totalPuan3);

  // COCUK FOR DÖNGÜSÜ //

  totalPuan = [totalPuan1, totalPuan2, totalPuan3];
  let akil = 0;
  let fikir = 0;

  akil = (totalPuan1 + totalPuan2) % 9;
  fikir = (totalPuan1 + totalPuan3) % 9;
  console.log("Akıl:", akil);
  console.log("Fikir:", fikir);

  return totalPuan;
}
