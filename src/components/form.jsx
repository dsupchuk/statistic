// import { useEffect, useState } from "react";
const data = [
  {
    data: new Date(2021, 1, 24),
    meal: 17,
    juice: 33,
    soup: 3,
    id: "1",
  },
  {
    data: new Date(2019, 0, 28),
    meal: 33,
    juice: 9,
    soup: 64,
    id: "2",
  },
  {
    data: new Date(2021, 10, 2),
    meal: 19,
    juice: 100,
    soup: 98,
    id: "3",
  },
  {
    data: new Date(2019, 11, 13),
    meal: 23,
    juice: 53,
    soup: 42,
    id: "4",
  },
  {
    data: new Date(2021, 9, 24),
    meal: 83,
    juice: 43,
    soup: 21,
    id: "5",
  },
  {
    data: new Date(2019, 10, 22),
    meal: 28,
    juice: 67,
    soup: 3,
    id: "6",
  },
  {
    data: new Date(2020, 1, 14),
    meal: 8,
    juice: 97,
    soup: 23,
    id: "7",
  },
  {
    data: new Date(2021, 8, 11),
    meal: 91,
    juice: 21,
    soup: 5,
    id: "8",
  },
  {
    data: new Date(2019, 7, 1),
    meal: 40,
    juice: 88,
    soup: 73,
    id: "9",
  },
  {
    data: new Date(2020, 10, 6),
    meal: 5,
    juice: 87,
    soup: 72,
    id: "10",
  },
  {
    data: new Date(2018, 11, 4),
    meal: 1,
    juice: 10,
    soup: 71,
    id: "11",
  },
  {
    data: new Date(2021, 10, 5),
    meal: 84,
    juice: 89,
    soup: 50,
    id: "12",
  },
  {
    data: new Date(2021, 1, 24),
    meal: 41,
    juice: 48,
    soup: 84,
    id: "13",
  },
  {
    data: new Date(2021, 0, 14),
    meal: 7,
    juice: 90,
    soup: 74,
    id: "14",
  },
  {
    data: new Date(2021, 11, 21),
    meal: 90,
    juice: 81,
    soup: 57,
    id: "15",
  },
];
function Some() {
  function pushData(e, dataItem, item, value) {
    e.preventDefault();
    let newDate = new Date(dataItem);
    data.push({ data: newDate, [item]: +value });
  }
  function getDay(e, value) {
    e.preventDefault();
    let newDate = new Date(value);
    let juice = 0,
      soup = 0,
      meal = 0;
    data.forEach((i) => {
      if (
        newDate.getDate() === i.data.getDate() &&
        newDate.getMonth() === i.data.getMonth() &&
        newDate.getFullYear() === i.data.getFullYear()
      ) {
        if (i.juice) {
          juice += i.juice;
        }
        if (i.soup) {
          soup += i.soup;
        }
        if (i.meal) {
          meal += i.meal;
        }
      }
    });
    console.log(`Статистика за ${newDate}`);
    console.log(`juice -- ${juice ? juice : `Empty`}`);
    console.log(`soup -- ${soup ? soup : `Empty`}`);
    console.log(`meal -- ${meal ? meal : `Empty`}`);
  }
  function getMounth(e, value) {
    e.preventDefault();
    let newDate = new Date(value);
    let juice = 0,
      soup = 0,
      meal = 0;
    data.forEach((i) => {
      if (
        newDate.getMonth() === i.data.getMonth() &&
        newDate.getFullYear() === i.data.getFullYear()
      ) {
        if (i.juice) {
          juice += i.juice;
        }
        if (i.soup) {
          soup += i.soup;
        }
        if (i.meal) {
          meal += i.meal;
        }
      }
    });
    console.log(
      `Статистика за ${newDate.getMonth() + 1}/${newDate.getFullYear()}`
    );

    console.log(`juice -- ${juice ? juice : `Empty`}`);
    console.log(`soup -- ${soup ? soup : `Empty`}`);
    console.log(`meal -- ${meal ? meal : `Empty`}`);
  }
  function getYear(e, value) {
    e.preventDefault();
    let newDate = new Date(value);
    let juice = 0,
      soup = 0,
      meal = 0;
    data.forEach((i) => {
      if (newDate.getFullYear() === i.data.getFullYear()) {
        if (i.juice) {
          juice += i.juice;
        }
        if (i.soup) {
          soup += i.soup;
        }
        if (i.meal) {
          meal += i.meal;
        }
      }
    });
    console.log(`Статистика за ${newDate.getFullYear()}`);
    console.log(`juice -- ${juice ? juice : `Empty`}`);
    console.log(`soup -- ${soup ? soup : `Empty`}`);
    console.log(`meal -- ${meal ? meal : `Empty`}`);
  }
  console.log(data);
  return (
    <div className="container">
      <form className="form-add">
        <input
          type="date"
          min="2018-01-01"
          max="2021-12-31"
          id="date"
          className="styleInput"
          required
        />
        <select name="option" className="styleInput" required>
          <option value="meal">Meal</option>
          <option value="juice">Juice</option>
          <option value="soup">Soup</option>
        </select>
        <input
          type="number"
          id="value"
          className="styleInput"
          placeholder="Waiting for value"
          required
        />
        <button
          className="btnAdd"
          type="submit"
          onClick={(e) => {
            if (document.getElementById("value").value) {
              pushData(
                e,
                document.getElementById("date").value,
                document.getElementById("option").value,
                document.getElementById("value").value
              );
            }
          }}
        >
          Press to add
        </button>
      </form>
      <div className="getInfo">
        <form className="statistic_day">
          <input type="date" id="findDay" className="styleInput" required />
          <button
            className="btnFind"
            onClick={(e) => {
              if (document.getElementById("findDay").value)
                getDay(e, document.getElementById("findDay").value);
            }}
          >
            Get statistic day
          </button>
        </form>
        <form className="statistic_mounth">
          <input type="month" id="findMounth" className="styleInput" required />
          <button
            className="btnFind"
            onClick={(e) => {
              if (document.getElementById("findMounth").value)
                getMounth(e, document.getElementById("findMounth").value);
            }}
          >
            Get statistic mounth
          </button>
        </form>
        <form className="statistic_year">
          <input
            type="number"
            min="2018"
            max="2022"
            id="findYear"
            defaultValue="2018"
            className="styleInput"
            required
          />
          <button
            className="btnFind"
            onClick={(e) => {
              getYear(e, document.getElementById("findYear").value);
            }}
          >
            Get statistic year
          </button>
        </form>
      </div>
    </div>
  );
}
export default Some;
