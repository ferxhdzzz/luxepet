import React, { useState } from 'react';

const styles = {


  container: {
    width: '90%',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: "'Poppins', sans-serif",
  },
  sectionTitle: {
    fontSize: '15px',
    fontWeight: 'bold',
    margin: '2rem 0 1rem',
  },
  flex: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  wrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
  },
  scrollX: {
    display: 'flex',
    gap: '1rem',
    overflowX: 'auto',
    paddingBottom: '2rem',
    marginBottom: '2rem', // <-- Esto separa las cards de lo que viene después
  },
  spaceEvenly: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    padding: '1rem',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
    textAlign: 'left',
    flex: '0 0 30%',
    minWidth: '200px',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    fontSize: '12px',
  },
  cardHover: {
    transform: 'scale(1.1)',
  },
  cardImage: {
    width: '100%',
    borderRadius: '10px',
    height: '280px', // más alta
    objectFit: 'cover',
    display: 'block',
    margin: '0 auto',
  },
  mascotaImage: {
    width: '130px', // más ancho
    height: '120px', // igual alto
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '0.5rem',
  },
  precio: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: '12px',
  },
  infoAlert: {
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
    margin: '2rem 0',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  mascotaIcon: {
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '12px',
  },
  mascotaIconHover: {
    transform: 'scale(1.1)',
  },
  button: {
    marginTop: '0.5rem',
    padding: '0.5rem 2rem',
    backgroundColor: '#1C1E52',
    color: '#fff',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    fontSize: '12px',
    fontWeight: 'normal',
  },
  buttonHover: {
    transform: 'scale(1.05)',
  },
};



const CategoriaCard = ({ imagen, titulo, productos }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...styles.card,
        width: '150px',
        ...(hovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imagen} alt={titulo} style={styles.cardImage} />
      <h3 style={{ fontSize: '12px' }}>{titulo}</h3>
      <p style={{ fontSize: '12px' }}>{productos} productos</p>
    </div>
  );
};
<br />

const LanzamientoCard = ({ imagen, titulo, precio }) => (
  <div style={{ ...styles.card, width: '160px' }}>
    <img src={imagen} alt={titulo} style={styles.cardImage} />
    <h4 style={{ fontSize: '12px' }}>{titulo}</h4>
    <p style={styles.precio}>{precio}</p>
  </div>
);

const ProductoCard = ({ imagen, titulo, precio, link }) => {
  const [hovered, setHovered] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        width: '140px',
        ...(hovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imagen} alt={titulo} style={styles.cardImage} />
      <h4 style={{ fontSize: '12px' }}>{titulo}</h4>
      <p style={styles.precio}>{precio}</p>
      <a href={link} style={{ textDecoration: 'none' }}>
        <button
          style={{
            ...styles.button,
            ...(buttonHover ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Comprar
        </button>
      </a>
    </div>
  );
};

const MascotaIcon = ({ imagen, nombre, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={link}
      style={{
        ...styles.mascotaIcon,
        ...(hovered ? styles.mascotaIconHover : {}),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={imagen} alt={nombre} style={styles.mascotaImage} />
      <p>{nombre}</p>
    </a>
  );
};

const Productos = ({ defaultc }) => {
  return (
    <div style={styles.container}>
      {/* Categorías */}
      <h2 style={styles.sectionTitle}>Productos por categorías</h2>
      <div style={styles.scrollX}>
        <CategoriaCard imagen="https://i.pinimg.com/736x/f7/1f/05/f71f050d316461b58b1cc5f78a1b93c2.jpg" titulo="Accesorios" productos="15" />
        <CategoriaCard imagen="https://i.pinimg.com/736x/fd/ec/ec/fdececbc621850dab5565aa8de0ff4d3.jpg" titulo="Comida" productos="10" />
        <CategoriaCard imagen="https://i.pinimg.com/736x/4f/02/49/4f0249c6c317850b62a5e43912a54aef.jpg" titulo="Juguetes" productos="8" />
        <CategoriaCard imagen="https://i.pinimg.com/736x/40/1f/b9/401fb9c30711428e373b9260512a26ec.jpg" titulo="Camas" productos="6" />
      </div>


      {/* Próximos lanzamientos */}
      <h2 style={styles.sectionTitle}>Próximos lanzamientos</h2>
      <div style={styles.flex}>
        <LanzamientoCard imagen="https://i.pinimg.com/736x/bf/25/02/bf25023b02a26f459a50dc62e513c541.jpg" titulo="Comida premium para perros" precio="$9.90" />
        <LanzamientoCard imagen="https://i.pinimg.com/736x/22/41/e1/2241e1359eda6249d9cc3f223fc6aacb.jpg" titulo="Comida premium para gatos" precio="$8.90" />
        <LanzamientoCard imagen="https://i.pinimg.com/736x/fe/14/db/fe14db8d29236e61b2fbf806dbb41768.jpg"  titulo="Snacks naturales" precio="$5.50" />
      </div>

      {/* Info Alert (reemplazo del banner) */}
      <div style={styles.infoAlert}>
        Seguridad y calidad para tus mascotas siempre!
      </div>

      {/* Productos más comprados */}
      <h2 style={styles.sectionTitle}>Productos más comprados</h2>
      <div style={styles.wrap}>
        <ProductoCard imagen="https://i.pinimg.com/736x/57/5f/23/575f23782b6124e9bb8b72f1b10ae1d9.jpg" titulo="Plato para perro" precio="$3.90" link="/producto/pato-para-perro" />
        <ProductoCard imagen="https://i.pinimg.com/736x/44/41/4c/44414cfdfde3a3295829bc9bad3acec9.jpg" titulo="Comida cachorro" precio="$5.90" link="/producto/comida-cachorro" />
        <ProductoCard imagen="https://i.pinimg.com/736x/4e/25/0c/4e250cf1217143a9d2403c0db6bc0e4f.jpg" titulo="Correa" precio="$2.50" link="/producto/correa" />
        <ProductoCard imagen="https://i.pinimg.com/736x/c2/c3/09/c2c309d06e0667f84f2bb5aa93882270.jpg" titulo="Cama redonda" precio="$9.90" link="/producto/cama-redonda" />
        <ProductoCard imagen="https://i.pinimg.com/736x/7b/31/bf/7b31bffc0bc524c5f437109b07a1dff7.jpg" titulo="Galletas" precio="$4.90" link="/producto/galletas" />
        <ProductoCard imagen="https://i.pinimg.com/736x/6b/54/2f/6b542f3e490e7f79dbc483841c92f0fe.jpg" titulo="Shampoo" precio="$6.50" link="/producto/shampoo" />
      </div>

      {/* Mascotas */}
      <h2 style={styles.sectionTitle}>Compra según tu tipo de mascota</h2>
      <div style={styles.spaceEvenly}>
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





//parte dos




export default Productos;