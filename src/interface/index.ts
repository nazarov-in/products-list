interface ICategory {
  id: string;
  name: string;
}

export default interface IGoodType {
  name: string;
  category: ICategory;
  price: number;
  id: number;
}
