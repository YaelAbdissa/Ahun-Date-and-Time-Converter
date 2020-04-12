const JD_EPOCH_OFFSET_AMETE_MIHRET = 1723856;

// helper functions
function quotient(i, j) {
    return Math.floor(i / j);
}

function mod(i, j) {
    return i % j;
}

function addZero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}

// returns name of the day in amharic
function getDayName(date) {
    let dayName = '';
    switch (date) {
        case 0:
            dayName = 'እሁድ';
            break;
        case 1:
            dayName = 'ሰኞ';
            break;
        case 2:
            dayName = 'ማክሰኞ';
            break;
        case 3:
            dayName = 'ረቡዑ';
            break;
        case 4:
            dayName = 'ሐሙስ';
            break;
        case 5:
            dayName = 'አርብ';
            break;
        case 6:
            dayName = 'ቅዳሜ';
            break;

        default:
            break;
    }

    return dayName;

}

//returns the name of the month in amharic
function getMonthName(month) {
    let monthName = '';
    switch (month) {
        case 1:
            monthName = 'መስከረም';
            break;
        case 2:
            monthName = 'ጥቅምት';
            break;
        case 3:
            monthName = 'ሕዳር';
            break;
        case 4:
            monthName = 'ታሕሣስ';
            break;
        case 5:
            monthName = 'ጥር';
            break;
        case 6:
            monthName = 'የካቲት';
            break;
        case 7:
            monthName = 'መጋቢት';
            break;
        case 8:
            monthName = 'ሚያዚያ';
            break;
        case 9:
            monthName = 'ግንቦት';
            break;
        case 10:
            monthName = 'ሰኔ';
            break;
        case 11:
            monthName = 'ሐምሌ';
            break;
        case 12:
            monthName = 'ነሐሴ';
            break;
        case 13:
            monthName = 'ጳጉሜ';
            break;
        default:
            break;
    }

    return monthName;

}

// returns a converted date and time
function converter() {
    let now = new Date();

    let jdn = ((now.valueOf() / 86400000) + 2440588);

    const ERA = JD_EPOCH_OFFSET_AMETE_MIHRET;
    const r = mod((jdn - ERA), 1461);
    const n = mod(r, 365) + 365 * quotient(r, 1460);


    const year = Math.trunc(4 * quotient((jdn - ERA), 1461) + quotient(r, 365) - quotient(r, 1460));
    const month = Math.trunc(quotient(n, 30) + 1);
    let day = Math.trunc(mod(n, 30) + 1);


    let hour1 = +addZero(now.getUTCHours() - 3);
    let hour = now.getHours();
    let minute = addZero(now.getMinutes());
    let date = now.getDay();

    let timeSession = '';
    let greetingText = '';

    if (hour < 12 && hour >= 6) {
        timeSession = "ከጠዋቱ ";
        greetingText = 'እንደምን አደሩ!';
    } else if (hour < 18 && hour >= 12) {
        timeSession = "ከሰዓት ";
        greetingText = 'እንደምን ዋሉ!';
    }
    else if (hour < 22 && hour >= 18) {
        timeSession = "ከምሽቱ ";
        greetingText = 'እንደምን አመሹ!';
    }
    else {
        timeSession = "ከለሊቱ ";
        greetingText = 'መልካም ለሊት!';
    }
    if (hour1 > 12) {
        hour1 = hour1 - 12;
    }
    else if (hour1 == 0) {
        hour1 = 12;
    }
    let monthName = getMonthName(month);
    let dayName = getDayName(date);

    let text = greetingText + " አሁን " + timeSession + " " + hour1 + ":" + minute + " \n" + dayName + " - " + monthName + " " + day + "/" + month + "/" + year;
    console.log(text);
    return text;
}


module.exports = converter;