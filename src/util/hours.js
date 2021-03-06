import React from 'react';
const hoursNumber = [
  { text: '0:00', value: 0 },
  { text: '0:30', value: 0.5 },
  { text: '1:00', value: 1 },
  { text: '1:30', value: 1.5 },
  { text: '2:00', value: 2 },
  { text: '2:30', value: 2.5 },
  { text: '3:00', value: 3 },
  { text: '3:30', value: 3.5 },
  { text: '4:00', value: 4 },
  { text: '4:30', value: 4.5 },
  { text: '5:00', value: 5 },
  { text: '5:30', value: 5.5 },
  { text: '6:00', value: 6 },
  { text: '6:30', value: 6.5 },
  { text: '7:00', value: 7 },
  { text: '7:30', value: 7.5 },
  { text: '8:00', value: 8 },
  { text: '8:30', value: 8.5 },
  { text: '9:00', value: 9 },
  { text: '9:30', value: 9.5 },
  { text: '10:00', value: 10 },
  { text: '10:30', value: 10.5 },
  { text: '11:00', value: 11 },
  { text: '11:30', value: 11.5 },
  { text: '12:00', value: 12 },
  { text: '12:30', value: 12.5 },
  { text: '13:00', value: 13 },
  { text: '13:30', value: 13.5 },
  { text: '14:00', value: 14 },
  { text: '14:30', value: 14.5 },
  { text: '15:00', value: 15 },
  { text: '15:30', value: 15.5 },
  { text: '16:00', value: 16 },
  { text: '16:30', value: 16.5 },
  { text: '17:00', value: 17 },
  { text: '17:30', value: 17.5 },
  { text: '18:00', value: 18 },
  { text: '18:30', value: 18.5 },
  { text: '19:00', value: 19 },
  { text: '19:30', value: 19.5 },
  { text: '20:00', value: 20 },
  { text: '20:30', value: 20.5 },
  { text: '21:00', value: 21 },
  { text: '21:30', value: 21.5 },
  { text: '22:00', value: 22 },
  { text: '22:30', value: 22.5 },
  { text: '23:00', value: 23 },
  { text: '23:30', value: 23.5 },
];

export const hours = hoursNumber.map((num, ind) => {
  return (
    <option value={num.value} key={ind}>
      {num.text} hr
    </option>
  );
});
