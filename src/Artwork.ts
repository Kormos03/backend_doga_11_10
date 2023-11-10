export interface Artwork
{
     title : string;
     year : number;
     price : number;

}  


























/*  private validateTitle(title: string): void {
    if (!title.trim() || !/^[a-zA-Z, ]+$/.test(title)) {
      throw new Error('Invalid title. Title must not be empty and can only contain English letters, spaces, and commas.');
    }
  }

  private validateYear(year: number): void {
    const currentYear = new Date().getFullYear();
    if (year > currentYear) {
      throw new Error(`Invalid year. Year cannot be greater than the current year (${currentYear}).`);
    }
  }

  private validatePrice(price: number): void {
    if (price < 5) {
      throw new Error('Invalid price. Price must be at least 5 Ft.');
    }
  }

  private validateHeight(height: number): void {
    if (height < 15) {
      throw new Error('Invalid height. Height must be at least 15 cm.');
    }
  }*/