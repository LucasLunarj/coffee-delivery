import { v4 as uuidv4 } from "uuid";
import { CoffeListType } from "../types/coffeeList";

import tradicional from "../assets/images/tradicional.png"
import americano from "../assets/images/americano.png"
import cremoso from "../assets/images/expresso-cremoso.png"
import gelado from "../assets/images/café-gelado.png"
import comLeite from "../assets/images/cafe-leite.png"
import latte from "../assets/images/latte.png"
import capuccino from "../assets/images/capuccino.png"
import macchiato from "../assets/images/macchiato.png"
import mocaccino from "../assets/images/mocaccino.png"
import chocolate from "../assets/images/chocolate.png"
import cubano from "../assets/images/cubano.png"
import havaiano from "../assets/images/havaiano.png"
import arabe from "../assets/images/arabe.png"
import irlandes from "../assets/images/irlandes.png"




export const coffeeList: CoffeListType = {
  coffeeItens: [
    {
      id: uuidv4(),
      img: tradicional,
      type: ["Tradicional"],
      title: "Expresso Tradicional",
      about: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },

    {
      img: americano,
      id: uuidv4(),
      type: ["Tradicional"],
      title: "Expresso Americano",
      about: "Expresso diluído, menos intenso que o tradicional",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },
    {
      img: cremoso,
      id: uuidv4(),
      type: ["Tradicional"],
      title: "Expresso Cremoso",
      about: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },
    {
      img: gelado,
      id: uuidv4(),
      type: ["Tradicional", "gelado"],
      title: "Expresso Gelado",
      about: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },
    {
      img: comLeite,
      id: uuidv4(),
      type: ["Tradicional", "com leite"],
      title: "Café com Leite",
      about: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },
    {
      img: latte,
      id: uuidv4(),
      type: ["Tradicional", "com leite"],
      title: "Latte",
      about: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },
    {
      img: capuccino,
      id: uuidv4(),
      type: ["Tradicional", "com leite"],
      title: "Capuccino",
      about: "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },
    {
      img: macchiato,
      id: uuidv4(),
      type: ["Tradicional", "com leite"],
      title: "Macchiato",
      about: "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },
    {
      img: mocaccino,
      id: uuidv4(),
      type: ["Tradicional", "com leite"],
      title: "Mocaccino",
      about: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },
    {
      img: chocolate,
      id: uuidv4(),
      type: ["Especial", "com leite"],
      title: "Chocolate Quente",
      about: "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },
    {
      img: cubano,
      id: uuidv4(),
      type: ["Especial", "alcoólico", "gelado"],
      title: "Cubano",
      about: "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },
    {
      img: havaiano,
      id: uuidv4(),
      type: ["Especial"],
      title: "Havaiano",
      about: "Bebida adocicada preparada com café e leite de coco",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },
    {
      img: arabe,
      id: uuidv4(),
      type: ["Especial"],
      title: "Árabe",
      about: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },
    {
      img: irlandes,
      id: uuidv4(),
      type: ["Especial", "alcoólico"],
      title: "Irlandês",
      about: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.9,
      amount: 1,
      isInTheCart: false,
    },
  ],
};
