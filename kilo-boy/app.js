function vucutKitleİndexsi(boy,kilo){
    const indeks = kilo/(boy*boy)
    return indeks
}

const kullanıcıHeight  = +prompt(`lütfen m2 cinsinden bir değer giriniz`)
const kullanıcıWeight = +prompt(`lütfen kg cinsinden bir değer giriniz`)

const hesap = vucutKitleİndexsi(kullanıcıHeight,kullanıcıWeight)


function degerSonucu(hesap){
    if(hesap<18.5){
        return `Düşük Kilolu`
    }else if(hesap>=18.5 && hesap <=24.9){
        return `Normal Ağırlık`
    }else if (hesap>= 25 && hesap<=29.9){
        return `Fazla Kilolu`
    }else{
        return `Obez`
    }
}
const sonuc = degerSonucu(hesap)
alert(`Vucut Kitle İndexsi:${hesap.toFixed(2)} 
değer:${sonuc}`);