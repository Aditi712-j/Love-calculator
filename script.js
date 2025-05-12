const calculate=document.querySelector('#button1');
const entry1=document.querySelector('#name1');
const entry2=document.querySelector('#name2');
const output=document.querySelector('#output');
function cal(){
var lovePercent=Math.floor(Math.random()*100)+1;
 const name1 = entry1.value;
  const name2 = entry2.value;
if (!name1 || !name2) {
    alert('Please enter both names to calculate the love percentage.');
    return;
  }

container.innerHTML=`
<h1 class="result-heading">LOve calculator results</h1>
<h2>these are the results of your love calculator</h2>
<h2 class="result-message">${entry1.value}<img class="image" src="images/heart.png" alt="heart">${entry2.value}</h2>
<h2 class="result-percentage">${lovePercent}%</h2>
<p class="result-paragraph">Love is a beautiful thing, and it can be found in many forms. Whether it's romantic love, platonic love, or familial love, it's important to cherish and nurture these relationships. Remember to always communicate openly and honestly with your loved ones, and never take them for granted.</p>`
if (lovePercent < 50) {
    alert('Sorry, but it seems like you are not a good match. Better luck next time!');
  }
  

}

calculate.addEventListener('click',cal);


