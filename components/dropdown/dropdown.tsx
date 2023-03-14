import React from "react";
import Image from "next/image";
import Flex from "../Flex";
import styled from "styled-components";
import theme from "../../theme";
import styles from "./dropdown.module.scss";

const handleclick = () => {
  document.querySelector(".headericons").classList.add("rotate");
};

const ListView = styled.ul`
  list-style: none;
  padding: 0;
  li {
    display: inline-block;
    max-width: 195px;
    margin: 0 15px 0 0;
    text-align: center;
    transition: transform 0.5s ease 0s;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Dropdown = () => {
  return (
    <>
      <section className={styles.iwc_dropdown}>
        <Flex
          justifyContent='center'
          width='100%'
          divcolor={theme.color.white}
          padding='15px'
          onClick={handleclick}
        >
          <span>Pilot’s Watch Collection 2022</span>
          <span>
            <Image
              src={"./images/arrow-down.svg"}
              alt='arrowdown'
              width={26}
              height={16}
              className={styles.headericons}
            />
          </span>
        </Flex>

        <Flex
          className='col-md-12'
          justifyContent='center'
        ></Flex>
      </section>
    </>
  );
};

export default Dropdown;
