export type CoffeeItem = {
  id: string;
  img: string;
  type: string[];
  title: string;
  about: string;
  price: number;
  amount: number;
  isInTheCart: boolean;
}

export type CoffeListType = {
  coffeeItens: CoffeeItem[]
    
};
