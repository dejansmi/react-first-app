import schoolPicture from './Pictures/school.png';
import garbagePicture from './Pictures/garbage.png';
import bookPicture from './Pictures/book.png';
import animalsSignPicture from './Pictures/animals-sign.jpg';
import carYellowPicture from './Pictures/car-yellow.jpg';
import nakit1 from './Pictures/nakit1.jpg';
import nakit2 from './Pictures/nakit2.png';
import nakit3 from './Pictures/nakit3.jpg';
import nakit4 from './Pictures/nakit4.jpg';
import nakit6 from './Pictures/nakit6.jpg';
import nakit7 from './Pictures/nakit7.jpg';


const ProductsData = [
    {
        productId: "XYu4HuReJ2D32UIRY",
        productName: "Ruža crvena",
        productType: "Cveće",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Small_red_rose.jpeg",
        imageAlt: "Cvet",
        description: 'Crvene ruže za prelepe bukete',
        price: 231.34,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "1Xo4puReJR532BIkY",
        productName: "Ime ruže",
        productType: "Knjige",
        image: bookPicture,
        imageAlt: "Ime ruže",
        description: 'Knjiga sa izuzetnom pričom',
        price: 150.00,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "P3o4wuRmR562B9kL",
        productName: "Kanta za đubre",
        productType: "Kanta ",
        image: garbagePicture,
        otherImages: [bookPicture, bookPicture, animalsSignPicture, animalsSignPicture, bookPicture, bookPicture],
        imageAlt: "Kanta za đubre a papučicom",
        description: 'Lepa zelena kanta za đubre sa papučicom',
        price: 13500.00,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "FkL4pUeeJR53neIkY",
        productName: "Let sokola",
        productType: "Knjige",
        image: bookPicture,
        otherImages: [bookPicture, animalsSignPicture, animalsSignPicture, bookPicture, bookPicture, bookPicture],
        imageAlt: "Let sokola",
        description: 'Knjiga koja će vas ostaviti bez daha i koju ćete pročitati u komadu.  ',
        price: 150.00,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "qQo2puCHmRXrG64i",
        productName: "Olovke raznobojne",
        productType: "Pribor za pisanje",
        image: schoolPicture,
        otherImages: [bookPicture, animalsSignPicture, nakit2, bookPicture, nakit4],
        imageAlt: "Olovke",
        description: 'Lepe grafitne olovke sa tankm tragom. Ima ih u 6 boja',
        price: 127.23,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "wSo9puBeJR5U2B0kV",
        productName: "Značke kolekcija mačke",
        productType: "Značke",
        image: animalsSignPicture,
        imageAlt: "Značke",
        description: 'Značke koje prikazuju mačke u raznim bojama i situacijama',
        price: 35.99,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "sFo4IuRe9R5Q2BMkB",
        productName: "Orlovi rano lete",
        productType: "Knjige",
        image: bookPicture,
        imageAlt: "Orlovi rano lete",
        description: 'Knjiga za lektiru za 8 razred. Knjiga izaziva veliki smeh kod svih čitalalca',
        price: 211.59,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "gHo487ReBc5/UBoPN",
        productName: "Kese za đubre tip D",
        productType: "Kese za đubre",
        image: garbagePicture,
        imageAlt: "Kese za đubre",
        description: 'Kese za đubre tipa D koje odllično popunjavaju duboke kante',
        price: 281.00,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "UX(BpuRe8433MkIZP",
        productName: "Blok broj 5",
        productType: "Blok za crtanje",
        image: schoolPicture,
        imageAlt: "Blok 5",
        description: 'Blok za crtanje broj 5 sa 8 listova',
        price: 199.00,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "Ybn4p7YeJRB92BC7R",
        productName: "Žuti BMW 1",
        productType: "Kola",
        image: carYellowPicture,
        imageAlt: "BMW 1",
        description: 'Mala pouzdana kola za grad.',
        price: 5900000.00,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "iVo4pu7EJRcU2BMla",
        productName: "Sedmi konjanik",
        productType: "Knjige",
        image: bookPicture,
        imageAlt: "7 konjanik",
        description: 'Knjiga za one koji vole avanture',
        price: 289.34,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "YV34p98eJRMd2uJk9",
        productName: "Mala kanta za kuhinju",
        productType: "Kanta za đubre",
        image: garbagePicture,
        imageAlt: "Kuhinjska kanta",
        description: 'Mala kanta za mali kuhinjski otpad. Treba da je ima svaka kuhinja',
        price: 3723.00,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "UbgNMuReJYdf2B98B",
        productName: "Držač stranica magnet",
        productType: "Držač stranica",
        image: bookPicture,
        imageAlt: "Držač stranica",
        description: 'Držač stranica u obliku Miki mausa',
        price: 35.98,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "uKobV8ReJ7Y3w34kO",
        productName: "Blok broj 4",
        productType: "Blok za crtanje",
        image: schoolPicture,
        imageAlt: "Blok 4",
        description: 'Blok za crtanje broj 4',
        price: 189.90,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "4Wo472RebV53uNItt",
        productName: "Značke u obliku psa",
        productType: "Značke",
        image: animalsSignPicture,
        imageAlt: "Značke psa",
        description: 'Simpatične značke u obliku psa',
        price: 85.10,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "8UjhmNReJRW34BI98",
        productName: "Cvetni aranžmani",
        productType: "Cveće",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Small_red_rose.jpeg",
        imageAlt: "Aranžmani",
        description: 'Izuzetni cvetni aranžmani za svaku kuću i priliku ',
        price: 743.99,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "8uH49NReJkM32BiFc",
        productName: "Ime ruže 2",
        productType: "Knjige",
        image: bookPicture,
        imageAlt: "Ime ruže 2",
        description: 'Nastavak izuzetne priče sa novim zapletima',
        price: 311.00,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "KXuBpuMnJR5UBB84M",
        productName: "Kese za đubre tipa C",
        productType: "Kese za đubre",
        image: garbagePicture,
        imageAlt: "Kese tip C",
        description: 'Kese za đubre koje odgovaraju manjim kantama',
        price: 21.09,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "b8cDpuReJ9U3bNI21",
        productName: "Ime ruže 3",
        productType: "Knjige",
        image: bookPicture,
        imageAlt: "Ime ruže 3",
        description: 'Najnoviji nastavak bestcelera koji stavlja bez daha',
        price: 1021.00,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "8UhGpuReJRoKLB328",
        productName: "Šestar",
        productType: "Školski pribor",
        image: schoolPicture,
        imageAlt: "Šestar",
        description: 'Klasičan šestar za učenike osnovnih škola',
        price: 112.00,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "8UhGpuReJRoKLB328",
        productName: "Buba mara značke",
        productType: "Značke",
        image: animalsSignPicture,
        imageAlt: "Buba mara",
        description: 'Značke sa prelepim bubamarama',
        price: 42.23,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "8UhGpuReJRoKLB328",
        productName: "Privezak za ključeve",
        productType: "Oprema za kola",
        image: carYellowPicture,
        imageAlt: "Privezak za ključeve",
        description: 'Privezak za ključeve za prelepom macom kao osnovnim modelom',
        price: 189.23,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "hr$GpuRwS1oKLvbu4",
        productName: "Nakit ogrlica",
        productType: "Nakit",
        image: nakit1,
        imageAlt: "Ogrlica",
        description: 'Ogrlica i minđuše sa predivnim ručnim radom',
        price: 89189.23,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "6UdGpuRlP9oKLvnVc",
        productName: "Dva prstena",
        productType: "Nakit",
        image: nakit2,
        imageAlt: "Dva prstena",
        description: 'Dva prstena sa dijamantima. Izuzetno precizan rad.',
        price: 123189.23,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "i8yoK3Nb8iO2Bj9D",
        productName: "Dupli prsten",
        productType: "Nakit",
        image: nakit3,
        imageAlt: "Dupli prsten",
        description: 'Zanimljiva ideja za izradu duplog prstena. Koriščeni su dijamanti.',
        price: 129434.00,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "4wqoK3gvbiO20kiH",
        productName: "Minđuše",
        productType: "Nakit",
        image: nakit4,
        imageAlt: "Minđuše",
        description: 'Minđuše sa lepezom oko njih.',
        price: 83123.12,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "5EwrK3gkuyO20po7",
        productName: "Velika ogrlica",
        productType: "Nakit",
        image: nakit6,
        imageAlt: "Velika oglica",
        description: 'Zlatna oglica sa dijamantima i dragim kamenjem. Filigranski rad.',
        price: 300999.99,
        priceCurrency: "RSD"
    }
    ,
    {
        productId: "r4SrhBckugtW0mNu",
        productName: "Labud prsten",
        productType: "Nakit",
        image: nakit7,
        imageAlt: "Labud prsten",
        description: 'Zlatni prsten u obliku labuda',
        price: 89341.99,
        priceCurrency: "RSD"
    }


]

export const userROL = [
    {
        username: "dejansm",
        name: "Dejan Smiljanić",
        sex: 'M',
        image: carYellowPicture
    }
]

export const users = [
    {
        username: "boza",
        name: "Bozidar Ignjatovic",
        sex: 'M',
        image: animalsSignPicture
    }
]

const loyalty = [{
    loyaltyId: "du4KnE5Xkqe8nD2M",
    imageShow: false,
    image: animalsSignPicture,
    imageAlt: "3za2",
    imageText: "3 za 2",
    description: "Ukoliko kupite 3 značke plaćate 2. Važi za serije mačaka i pasa. Za 3 značke cena je 170.20 RSD. Ušteda 85.10 RSD",
    company: "Sign company\n Kompanija za proizvodnju metalni privezaka"
}
    ,
{
    loyaltyId: "lB4rTI5X3a3KMD2M",
    imageShow: true,
    image: animalsSignPicture,
    imageAlt: "3za2",
    imageText: "3 za 2",
    description: "Ukoliko kupite 3 ili više proizvoda dobjate 7.5% popusta na sve proizvode",
    company: "FMP Fabrika metalnih proizvoda"
}
]

export const listOfImg = [ProductsData[0],
ProductsData[1], ProductsData[2], ProductsData[3], ProductsData[4], ProductsData[5],
ProductsData[6], ProductsData[7], ProductsData[8], ProductsData[9], ProductsData[10],
ProductsData[11], ProductsData[12], ProductsData[13], ProductsData[14], ProductsData[15],
ProductsData[16],
ProductsData[17], ProductsData[18], ProductsData[19], ProductsData[20], ProductsData[21]
]

export const moreGoodOffers = [ProductsData[2],
ProductsData[4], ProductsData[2], ProductsData[7], ProductsData[21], ProductsData[0],
ProductsData[6], ProductsData[1], ProductsData[19], ProductsData[9], ProductsData[10],
ProductsData[11], ProductsData[12], ProductsData[5], ProductsData[14], ProductsData[15]
]

export const nakitList = [ProductsData[22],
ProductsData[23], ProductsData[24], ProductsData[25], ProductsData[26], ProductsData[27]
]


export const loyaltyData = [loyalty[0],loyalty[1]]


export default { listOfImg, moreGoodOffers };
