import React, { useState } from "react";
import Menu from "../Menu";
import Categories from "../Categories";
import { links, paints } from "../data";
import Whatsapp from "../Whatsapp";
import FooterNavbar from "../Footer";
const allCategories = ["הכל", ...new Set(paints.map((item) => item.category))];
function Home() {
  const [gallery, setGallery] = useState(paints);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "הכל") {
      setGallery(paints);
      return;
    }
    const newItems = paints.filter((item) => item.category === category);
    setGallery(newItems);
  };

  return (
    <main>
      {" "}
      <section className="menu section">
        <div className="title">
          <h2> העבודות שלי</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu paints={gallery} />
      </section>
      <Whatsapp />
      <footer>
        <FooterNavbar />
      </footer>
      ;
    </main>
  );
}

export default Home;
