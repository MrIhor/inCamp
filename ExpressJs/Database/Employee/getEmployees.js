const employees = require('./db');

const monthName = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const currentMonth = new Date(new Date().toDateString()).getMonth();
const currentYear = new Date(new Date().toDateString()).getFullYear();
const horizont = process.argv[2];

function getMonth(date) {
    return new Date(date).getMonth();
}

function getDay(date) {
    return new Date(date).toDateString().slice(8, 10);
}

function getYear(date) {
    return new Date(date).getFullYear();
}

function plural(count) {
    let n = Math.abs(count);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return `${count} лет`;
    }
    n %= 10;
    if (n === 1) {
        return `${count} год`;
    }
    if (n >= 2 && n <= 4) {
        return `${count} года`;
    }
    return `${count} лет`;
}

function groupByMonth(array) {
    return (birthdayDate = array.reduce((birhdays, employees) => {
        let employeeMonth = getMonth(employees.birthday);

        if (birhdays[employeeMonth]) {
            birhdays[employeeMonth].push(employees);
        } else {
            birhdays[employeeMonth] = [employees];
        }
        return birhdays;
    }, {}));
}

function getData(data, index) {
    let horizon = currentMonth + Number(index) - 2;
    let month = 0;

    for (month; month <= horizon; month++) {
        if (month in groupByMonth(data)) {
            if (groupByMonth(data)[month])
                console.log(`${monthName[month]} ${currentYear}`);
            groupByMonth(data)[month].map((el) => {
                console.log(
                    `(${getDay(el.birthday)}) - ${el.name} (${plural(
                        currentYear - getYear(el.birthday)
                    )})`
                );
            });
        }
    }
}

if (0 < horizont && horizont <= 12) {
    employees.query(`select * from employees`, (err, res) => {
        getData(res.rows, horizont);
        employees.end();
    });
} else {
    console.log("Последний параметр должен быть числом (1-12)!");
}