import { Days } from 'types/enums';

export type Times = {
  date: string;
  day: string;
};

let week: Times[] = [];
let week2: Times[] = [];
let week3: Times[] = [];
let week4: Times[] = [];

let now = new Date();

for (let i = 0; i < 7; i++) {
  week.push({
    date: now.toLocaleDateString().replaceAll('.', '-'),
    day: Days[i],
  });
  now = new Date(now.setDate(now.getDate() + 1));
}

for (let i = 0; i < 7; i++) {
  week2.push({
    date: now.toLocaleDateString().replaceAll('.', '-'),
    day: Days[i],
  });
  now = new Date(now.setDate(now.getDate() + 1));
}

for (let i = 0; i < 7; i++) {
  week3.push({
    date: now.toLocaleDateString().replaceAll('.', '-'),
    day: Days[i],
  });
  now = new Date(now.setDate(now.getDate() + 1));
}

for (let i = 0; i < 7; i++) {
  week4.push({
    date: now.toLocaleDateString().replaceAll('.', '-'),
    day: Days[i],
  });
  now = new Date(now.setDate(now.getDate() + 1));
}

export const weeksArray = [week, week2, week3, week4];
