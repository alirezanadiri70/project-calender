const body =document.body;
const date = new Date();
const month = date.toLocaleDateString('en-us',{month:'long'});


const h1 =document.createElement('h1');
h1.style.color = 'lime';
h1.innerHTML.text = month;
h1.style[`text-shadow`] = `3px 2px 3px black`;
body.appendChild(h1);

//how many weeks 
const weeks = 6;
//how many days ina week
const days = 7 ;
const daysArray= [];
const daysOweek = ['sun','mon','tue','wed','thu','fri','sat'];


body.style.padding= '1em';
const container = document.createElement('div');
body.appendChild(container);
container.style.width = '720px';
container.style.height = (weeks * 100) + 'px';
container.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.alignItems = 'center';
const today = new Date().getMonth();
const firstDay = new Date (`${today + 1}/01/${new Date().getFullYear()}`).getDay();
const nextMonth = new Date(`${today + 1 + 1}/01/${new Date().getFullYear()}`);
nextMonth.setDate(nextMonth.getDate() -1);
const lastDay = nextMonth.getDate();
let dayNumber = 0;
console.log(firstDay,'first day');
console.log('last day',lastDay);
for (let i =0; i < days; i++) {
    
}
