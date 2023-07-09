import React from "react";
import styled from "styled-components";

import aboutImg from "../assets/2.jpg";
const AboutPage = () => {
  return (
    <main>
      <Wrapper className=" section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>הניה</h2>
            <div className="underline"></div>
          </div>
          <p>אני אמנית רב תחומית. עוסקת בציור, תכשיטנות,פיסול</p>
        </article>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 300px;
    object-fit: cover;
    margin-top: 10px;

    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
    max-width: 100%;
    height: 250px;
    object-fit: cover;
    box-shadow: 0 4px 6px rgba(1, 0, 0, 0.1);
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
    font-size: 20px;
  }
  .title {
    text-align: right;
  }
  .underline {
    margin-right: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
