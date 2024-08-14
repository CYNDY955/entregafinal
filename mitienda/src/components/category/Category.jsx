import React from "react";

import { Link } from "react-router-dom";
import "./Category.css";
import SubCat from "./SubCat";
const Category = () => {
  const fash = [
    {
      category: "Ropa superior",
      subcategory1: "Camiseta",
      subcategory2: "Camisa informal",
      subcategory3: "Chaquetas",
    },
    {
      category: "Ropa india",
      subcategory1: "Kurtas & traje",
      subcategory2: "Leggings & Salwars ",
      subcategory3: "Saris",
    },
    {
      category: "Calzado",
      subcategory1: "pisos",
      subcategory2: "Tacones ",
      subcategory3: "Botas",
    },
    {
      category: "Infantiles",
      subcategory1: "Rompers & mamelucos",
      subcategory2: "Vestidos",
    },
  ];

  const electric = [
    {
      category: "Camara",
      subcategory1: "DSLR",
      subcategory2: "Lens",
      subcategory3: "Drone",
    },
    {
      category: "De oficina",
      subcategory1: "Monitor",
      subcategory2: "Mini Pc's ",
      subcategory3: "Teclado",
      subcategory4: "Mouse",
    },
    {
      category: "juegos",
      subcategory1: "Gamepads",
      subcategory2: "Controles",
      subcategory3: "Consolas",
    },
    {
      category: "Accesorios",
      subcategory1: "Impresora",
      subcategory2: "Proyector",
    },
  ];

  const home = [
    {
      category: "Sala de estar",
      subcategory1: "Sillones ",
      subcategory2: "Comedor",
      subcategory3: "Sofa Cama",
    },
    {
      category: "Dormitorio",
      subcategory1: "Sabanas",
      subcategory2: "Armarios ",
      subcategory3: "Colchones",
    },
    {
      category: "Decoracion hogar",
      subcategory1: "Relojes",
      subcategory2: "Pintura ",
      subcategory3: "Flores",
    },
    {
      category: "Jardineria",
      subcategory1: "Montones",
      subcategory2: "Suelo",
    },
  ];

  const beauty = [
    {
      category: "Aseo masculino",
      subcategory1: "Lavados rapidos",
      subcategory2: "Aceite de barba",
      subcategory3: "Aftershave",
    },
    {
      category: "Cuidado personal",
      subcategory1: "Maquillaje",
      subcategory2: "Lapiz labial",
      subcategory3: "Aceite para cabello",
    },
    {
      category: "Cuidado de bebe",
      subcategory1: "Pañales",
      subcategory2: "Protecion de la piel",
    },
    
  ];
  return (
    <div className="categories">
      <div className="category">
        <h2 style={{ color: "#ee5f73" }}>Moda</h2>
        <Link to="/#fashion">
          {fash.map((item, index) => (
            <SubCat
              category={item.category}
              subcategory1={item.subcategory1}
              subcategory2={item.subcategory2}
              subcategory3={item.subcategory3}
            />
          ))}
        </Link>
      </div>
      <div className="category alter">
        <h2 style={{ color: "#fb56c1" }}>Electronica</h2>
        <Link to="/#elec">
          {electric.map((item, index) => (
            <SubCat
              category={item.category}
              subcategory1={item.subcategory1}
              subcategory2={item.subcategory2}
              subcategory3={item.subcategory3}
            />
          ))}
        </Link>
      </div>

      <div className="category">
        <h2 style={{ color: "##f26a10" }}>Hogar y vida</h2>
        <Link to="#sport">
          {home.map((item, index) => (
            <SubCat
              category={item.category}
              subcategory1={item.subcategory1}
              subcategory2={item.subcategory2}
              subcategory3={item.subcategory3}
            />
          ))}
        </Link>
      </div>

      <div className="category alter">
        <h2 style={{ color: "#f2c210" }}>Cosmeticos</h2>
        <Link to="#beauty">
          {beauty.map((item, index) => (
            <SubCat
              category={item.category}
              subcategory1={item.subcategory1}
              subcategory2={item.subcategory2}
              subcategory3={item.subcategory3}
            />
          ))}
        </Link>
      </div>
    </div>
  );
};

export default Category;
