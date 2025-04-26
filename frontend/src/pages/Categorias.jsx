import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Categoria.css';

const CategoriaCard = ({ imagen, titulo, productos }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`card ${hovered ? 'card-hover' : ''}`}
      style={{ width: '150px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imagen} alt={titulo} className="card-image" />
      <h3 className="text-sm">{titulo}</h3>
      <p className="text-sm">{productos} productos</p>
    </div>
  );
};

const LanzamientoCard = ({ imagen, titulo, precio }) => (
  <div className="card" style={{ width: '160px' }}>
    <img src={imagen} alt={titulo} className="card-image" />
    <h4 className="text-sm">{titulo}</h4>
    <p className="precio">{precio}</p>
  </div>
);

const ProductoCard = ({ imagen, titulo, precio, link }) => {
  const [hovered, setHovered] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  return (
    <div
      className={`card ${hovered ? 'card-hover' : ''}`}
      style={{ width: '140px' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imagen} alt={titulo} className="card-image" />
      <h4 className="text-sm">{titulo}</h4>
      <p className="precio">{precio}</p>
      {/* Reemplazo del tag <a> por <Link> de React Router */}
      <Link to={link} className="no-decoration">
        <button
          className={`button ${buttonHover ? 'button-hover' : ''}`}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Comprar
        </button>
      </Link>
    </div>
  );
};

const MascotaIcon = ({ imagen, nombre, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={link}
      className={`mascota-icon ${hovered ? 'mascota-icon-hover' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imagen} alt={nombre} className="mascota-image" />
      <p>{nombre}</p>
    </Link>
  );
};

const Productos = ({ defaultc }) => {
  return (
    <div className="container">
      <br />
      <br />
      {/* Categorías */}
      <h2 className="section-title">Productos por categorías</h2>
      <div className="scroll-x">
        <CategoriaCard imagen="https://i.pinimg.com/736x/f7/1f/05/f71f050d316461b58b1cc5f78a1b93c2.jpg" titulo="Accesorios" productos="15" />
        <CategoriaCard imagen="https://i.pinimg.com/736x/fd/ec/ec/fdececbc621850dab5565aa8de0ff4d3.jpg" titulo="Comida" productos="10" />
        <CategoriaCard imagen="https://i.pinimg.com/736x/4f/02/49/4f0249c6c317850b62a5e43912a54aef.jpg" titulo="Juguetes" productos="8" />
        <CategoriaCard imagen="https://i.pinimg.com/736x/40/1f/b9/401fb9c30711428e373b9260512a26ec.jpg" titulo="Camas" productos="6" />
      </div>

      {/* Próximos lanzamientos */}
      <h2 className="section-title">Próximos lanzamientos</h2>
      <div className="flex">
        <LanzamientoCard imagen="https://i.pinimg.com/736x/bf/25/02/bf25023b02a26f459a50dc62e513c541.jpg" titulo="Comida premium para perros" precio="$9.90" />
        <LanzamientoCard imagen="https://i.pinimg.com/736x/22/41/e1/2241e1359eda6249d9cc3f223fc6aacb.jpg" titulo="Comida premium para gatos" precio="$8.90" />
        <LanzamientoCard imagen="https://i.pinimg.com/736x/fe/14/db/fe14db8d29236e61b2fbf806dbb41768.jpg" titulo="Snacks naturales" precio="$5.50" />
      </div>

      {/* Info Alert */}
      <div className="info-alert">
        Seguridad y calidad para tus mascotas siempre!
      </div>

      {/* Más comprados */}
      <h2 className="section-title">Productos más comprados</h2>
      <div className="wrap">
        <ProductoCard imagen="https://i.pinimg.com/736x/57/5f/23/575f23782b6124e9bb8b72f1b10ae1d9.jpg" titulo="Plato para perro" precio="$3.90" link="/product/plato-para-perro" />
        <ProductoCard imagen="https://i.pinimg.com/736x/44/41/4c/44414cfdfde3a3295829bc9bad3acec9.jpg" titulo="Comida cachorro" precio="$5.90" link="/product/comida-cachorro" />
        <ProductoCard imagen="https://i.pinimg.com/736x/4e/25/0c/4e250cf1217143a9d2403c0db6bc0e4f.jpg" titulo="Correa" precio="$2.50" link="/product/correa" />
        <ProductoCard imagen="https://i.pinimg.com/736x/c2/c3/09/c2c309d06e0667f84f2bb5aa93882270.jpg" titulo="Cama redonda" precio="$9.90" link="/product/cama-redonda" />
        <ProductoCard imagen="https://i.pinimg.com/736x/7b/31/bf/7b31bffc0bc524c5f437109b07a1dff7.jpg" titulo="Galletas" precio="$4.90" link="/product/galletas" />
        <ProductoCard imagen="https://i.pinimg.com/736x/6b/54/2f/6b542f3e490e7f79dbc483841c92f0fe.jpg" titulo="Shampoo" precio="$6.50" link="/product/shampoo" />
      </div>

      {/* Mascotas */}
      <h2 className="section-title">Compra según tu tipo de mascota</h2>
      <div className="space-evenly">
        <MascotaIcon imagen="https://i.pinimg.com/736x/c9/bf/5c/c9bf5c42f0e73f45f45fd4566f9745bf.jpg" nombre="Perros" link="/mascota/perros" />
        <MascotaIcon imagen="https://i.pinimg.com/736x/55/6a/53/556a53659a2ca18460d0734db94edc74.jpg" nombre="Gatos" link="/mascota/gatos" />
        <MascotaIcon imagen="https://i.pinimg.com/736x/92/db/ea/92dbea005bf7a47ef126b3e6467fbde8.jpg" nombre="Roedores" link="/mascota/roedores" />
        <MascotaIcon imagen="https://i.pinimg.com/736x/59/1f/92/591f92e199e64e4a7fe3c93f55351c5c.jpg" nombre="Aves" link="/mascota/aves" />
        <MascotaIcon imagen="https://i.pinimg.com/736x/77/63/8a/77638aa83fce0b9c25fcb3d422b70628.jpg" nombre="Conejos" link="/mascota/conejos" />
        <MascotaIcon imagen="https://i.pinimg.com/736x/80/f8/e9/80f8e948a8dd7f5d7f1fc47fd7296869.jpg" nombre="Reptiles" link="/mascota/reptiles" />
      </div>
    </div>
  );
};

export default Productos;