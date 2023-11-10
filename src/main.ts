//import './style.css'
import { Statue } from './Statue'
export

const artworkArr : Statue[] = [];

function submit()
{
  console.log('Eljutott a funcctionig');
  let title : string = document.getElementById('titleInput')!.value;
  let year : number = parseInt(document.getElementById('yearInput')!.value);
  let price : number= parseInt(document.getElementById('priceInput')!.value);
  let height : number = parseInt(document.getElementById('heightInput')!.value);

  artworkArr.push(new Statue(title,year,price,height));

  document.getElementById('artworkNumber')!.textContent = "Művek darabszáma: " + artworkArr.length.toString();
  console.log(artworkArr)
  let sum: number = 0;

  artworkArr.forEach(element => {
    sum += element.price;
  });

  console.log(sum);
  document.getElementById('artworkPrices')!.innerText = `Művek összesített ára: ${sum} Ft`;
}


document.addEventListener('DOMContentLoaded', () =>{
  console.log('dom content load');
  document.getElementById('button')!.addEventListener('click', submit);
});

