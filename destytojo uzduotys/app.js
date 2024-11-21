// // Objektiniai uždaviniai

// // Sukurti klasę Kibiras1.
// Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0.
// Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis)
// ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu().
// Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
  constructor(parameters) {
    this.akmenuKiekis = 10;
  }
  prideti1Akmeni() {
    this.akmenuKiekis += 1;
  }

  pridetiDaugAkmenu(kiekis) {
    this.akmenuKiekis += kiekis;
  }

  kiekPririnktaAkmenu() {
    console.log(this.akmenuKiekis);
  }
}

const Kibiras = new Kibiras1();
Kibiras.prideti1Akmeni();
Kibiras.prideti1Akmeni();
Kibiras.pridetiDaugAkmenu(8);
Kibiras.kiekPririnktaAkmenu();

///////////////////////////////2/////////////////////////////////////////

// Sukurti klasę Pinigine.
// Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai.
// Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę.
// Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, j
// eigu kitaip- prie popieriniaiPinigai.
// Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą.
// Sukurti klasės objektą ir pademonstruoti veikimą.
//  Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

class pinigine {
  constructor(parameters) {
    this.popieriniaiPinigai = 0;
    this.metaliniaipinigai = 0;
  }

  ideti(kiekis) {
    if (kiekis <= 2) {
      this.metaliniaipinigai += kiekis;
    } else {
      this.popieriniaiPinigai += kiekis;
    }
  }

  skaiciuoti() {
    const suma = this.metaliniaipinigai + this.popieriniaiPinigai;
    console.log(`Iš viso pinigų: ${suma}`);
  }
}

const MamosPinigine = new pinigine();
MamosPinigine.ideti(3);
MamosPinigine.skaiciuoti();

//////////////////3////////////////////////

// Sukurti klasę Troleibusas.
// Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0.
// Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).
// O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių.
// Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

class Autobusas {
  constructor() {
    this.keleiviuSkaicius = 0; // Individual bus passenger count
  }

  static visiKeleiviai = 0; // Shared total passenger count

  static bendrasKeleiviuSkaicius(kiekis) {
    this.visiKeleiviai += kiekis; // Update the total passenger count
  }

  ilipa(kiekis) {
    this.keleiviuSkaicius += kiekis; // Add passengers to this bus
    Autobusas.bendrasKeleiviuSkaicius(kiekis); // Update total passenger count
  }

  islipa(skaicius) {
    const actualKiekis = Math.min(skaicius, this.keleiviuSkaicius); // Prevent negative count
    this.keleiviuSkaicius -= actualKiekis; // Remove passengers from this bus
    Autobusas.bendrasKeleiviuSkaicius(-actualKiekis); // Update total passenger count
  }

  static keleiviuSkaiciusVisuoseAutobusuose() {
    console.log(`Viso keleiviu visuose autobusuose: ${this.visiKeleiviai}`);
  }

  vaziuoja() {
    console.log(`Autobuse keleiviu skaicius: ${this.keleiviuSkaicius}`);
  }
}

// Testing
const autobusas1 = new Autobusas();
const autobusas2 = new Autobusas();

autobusas1.ilipa(10); // 10 passengers on autobusas1
autobusas2.ilipa(5);  // 5 passengers on autobusas2
autobusas1.islipa(3); // 3 passengers get off autobusas1

Autobusas.keleiviuSkaiciusVisuoseAutobusuose(); 


// (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(),
// kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose.
// Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius).
// Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).




// (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.
// Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.

// (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, naudokite statinę savybę visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).

// Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.

// Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys, kuri turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).
