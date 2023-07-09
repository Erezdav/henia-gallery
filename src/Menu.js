import React from "react";
import paints from "./data";

const Menu = ({ paints }) => {
  return (
    <div className="section-center">
      {paints.map((menuItem) => {
        const { id, title, img, dimention, materials, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <header className="image-gallery">
              <header className="item-info ">
                <header>
                  <span style={{ fontWeight: "bold" }}>{title}</span> /{" "}
                  {dimention}
                </header>
              </header>

              <div className="item container">
                <img src={img} alt={title} className="img" />
                <div className="item-info">
                  <span className="price">{price} שח</span>
                </div>
              </div>
            </header>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
