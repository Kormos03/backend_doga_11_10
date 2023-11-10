import { Artwork } from "./Artwork";
export class Statue implements Artwork
{
    title: string;
    year: number;
    price: number;
    height : number;
    constructor(title : string, year : number, price : number, height : number)
    {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
        const currentYear = new Date().getFullYear();
        const regex = /^[a-zA-Z, ]+$/;
        let error = document.getElementById('error');
        error!.style.color = '#FF0000';
        if (!title.trim() || !regex.test(title)) {
            error!.textContent = 'Hibás Cím. A címnek legalább tartalmaznia kell egy karaktert és csak angol ABC karaktereket, szőköz ill. vessző karaktereket tartalmazhat ';
            throw new Error('Hibás Cím. A címnek legalább tartalmaznia kell egy karaktert és csak angol ABC karaktereket, szőköz ill. vessző karaktereket tartalmazhat ');
          }
          if (year > currentYear || isNaN(year)) {
            error!.textContent = `Hibás év. A készítés éve nem lehet nagyobb mint a jelenlegi év: (${currentYear}).`;
            throw new Error(`Hibás év. A készítés éve nem lehet nagyobb mint a jelenlegi év: (${currentYear}).`);
          }
         else if (price < 5 || isNaN(price)) {
            error!.textContent = 'Hibás ár. Az ának legalább 5 Ft-nak kell lennie.';
            throw new Error('Hibás ár. Az ának legalább 5 Ft-nak kell lennie.');
          }
          else if (height < 15 || isNaN(height)) {
            error!.textContent = 'Hibás magasság. A magasságnak minimum 15 cm-nek kell lennie.';
            throw new Error('Hibás magasság. A magasságnak minimum 15 cm-nek kell lennie.');
          }
          else
          {
            error!.textContent = '';
          }
    }
}