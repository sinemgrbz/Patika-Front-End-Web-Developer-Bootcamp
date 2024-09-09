let sign = prompt("Adınız nedir?");

document.getElementById("myName").innerHTML =sign;

const date1 = new Date();
var dates = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
document.getElementById("myClock").innerHTML = date1.toLocaleString("tr-TR",) +" " +dates[date1.getDay()];