
var month = prompt("type your month")
// console.log(month);

// month = month[0].toUpperCase() +month.substring(1)
// console.log(month);
// как писать с заглавной буквы без ошибок

var day = prompt("type your day")
// console.log(day);


if(month == "March" && day >= 21 && day <= 31 || month == "April" && day >= 1 && day <= 20) {
    console.log('Aries');
}
else if(month == "April" && day >= 21 && day <= 30 || month == "May" && day >= 1 && day <= 21) {
    console.log('Taurus');
}
else if(month == "May" && day >= 22 && day <= 31 || month == "June" && day >= 1 && day <= 21) {
    console.log('Gemini');
}
else if(month == "June" && day >= 22 && day <= 30 || month == "July" && day >= 1 && day <= 22) {
    console.log('Cancer');
}
else if(month == "July" && day >= 23 && day <= 31 || month == "August" && day >= 1 && day <= 21) {
    console.log('Leo');
}
else if(month == "August" && day >= 22 && day <= 31 || month == "September" && day >= 1 && day <= 23) {
    console.log('Virgo');
}
else if(month == "September" && day >= 24 && day <= 30 || month == "October" && day >= 1 && day <= 23) {
    console.log('Libra');
}
else if(month == "October" && day >= 24 && day <= 31 || month == "November" && day >= 1 && day <= 22) {
    console.log('Scorpio');
}
else if(month == "November" && day >= 23 && day <= 30 || month == "December" && day >= 1 && day <= 22) {
    console.log('Sagittaus');
}
else if(month == "December" && day >= 23 && day <= 31 || month == "January" && day >= 1 && day <= 22) {
    console.log('Capricorn');
}
else if(month == "January" && day >= 21 && day <= 30 || month == "February" && day >= 1 && day <= 19) {
    console.log('Aquarius');
}
else if(month == "February" && day >= 20 && day <= 28 || month == "March" && day >= 1 && day <= 20) {
    console.log('Pisces');
}else {
    console.error('Error - try again');
}

// else if(month == "February" && day >= 20 && day <= 28 || month == "March" && day >= 1 && day <= 20) {
//     alert('Pisces');
// }


