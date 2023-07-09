import React from "react";
import styled from "styled-components";
import Whatsapp from "../Whatsapp";
const Contact = () => {
  return (
    <Wrapper>
      {" "}
      <Whatsapp />
      <h3>ניתן לרכוש תמונות שלי מן הגלריה באתר</h3>
      <p>0524554555</p>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 5rem 10;
  text-align: center;

  h3 {
    text-transform: none;
    color: var(--clr-gold);
  }
  p {
    line-height: 2;
    max-width: 45em;
    text-align: center;
  }

  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
