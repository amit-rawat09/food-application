import yum from './yum.png'
import rating from './rating1.jpg'

import dessert from "./desserts.jpg";
import rolls from "./rolls.jpg";
import Sandwich from "./Sandwich.jpg";
import salad from "./salad.jpg";
import pasta from "./pasta.jpg";
import noodles from "./noodles.jpg";
import cake from "./cake.jpg";
import veg from "./veg.jpg";

import playstore from './playstore.png'
import appstore from './appstore.png'

import avatar from './avatar.jpg'
import parcel from './p.jpg'



export const assets = {
  rating,
  appstore,
  playstore,
  avatar,
  parcel,
  yum
}

export const menu_list = [
  {
    menu_name: "Salad",
    menu_image: salad,
  },
  {
    menu_name: "Rolls",
    menu_image: rolls,
  },
  {
    menu_name: "Desserts",
    menu_image: dessert,
  },
  {
    menu_name: "Sandwich",
    menu_image: Sandwich,
  },
  {
    menu_name: "Cake",
    menu_image: cake,
  },
  {
    menu_name: "Noodles",
    menu_image: noodles,
  },
  {
    menu_name: "Pasta",
    menu_image: pasta,
  },
  {
    menu_name: "Pure Veg",
    menu_image: veg,
  },
]

export const food_list = [
  {
    _id: "1",
    name: "Margherita Pizza",
    img: cake,
    description: "Classic pizza with fresh tomatoes, mozzarella, and basil.",
    category: "Pizza",
    price: 12.99,
    rating: rating
  },
  {
    _id: "2",
    name: "Cheeseburger",
    img: pasta,
    description: "Juicy beef patty with melted cheese, lettuce, and tomato.",
    category: "Burgers",
    price: 9.99,
    rating: rating
  },
  {
    _id: "3",
    name: "Caesar Salad",
    img: veg,
    description: "Crisp romaine lettuce with Caesar dressing and parmesan.",
    category: "Salads",
    price: 7.99,
    rating: rating
  },
  {
    _id: "4",
    name: "Spaghetti Carbonara",
    img: cake,
    description: "Pasta with creamy sauce, bacon, and parmesan cheese.",
    category: "Pasta",
    price: 13.99,
    rating: rating
  },
  {
    _id: "5",
    name: "Sushi Platter",
    img: pasta,
    description: "Assorted fresh sushi rolls with soy sauce and wasabi.",
    category: "Sushi",
    price: 18.99,
    rating: rating
  }
];