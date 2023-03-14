import React, { useEffect } from "react";
import Link from "../../components/Link";
import styled from "styled-components";
import theme from "../../theme";
import styles from "./servicemenus.module.scss";

const ListMenusUl = styled.ul`
  display: flex;
  padding: 3px 10px 0px;
`;

const ListMenus = styled.li`
  list-style: none;
  font-size: 0.875rem;
  line-height: 1.42857;
  letter-spacing: 1px;
  font-weight: 500;
  padding: 0px 14px;
`;

const ServiceMenusNav = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", function () {
        const scrollPosition = document.documentElement.scrollTop;
        const serviceMenu = document.getElementById("menuService");

        if (scrollPosition >= 130) {
          serviceMenu.classList.add("iwc-animate-menus");
        } else {
          serviceMenu.classList.remove("iwc-animate-menus");
        }
      });
    }
  }, []);

  return (
    <div
      className={styles.iwc_service_menus}
      id='menuService'
    >
      <nav>
        <ListMenusUl>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              WATCHES
            </Link>
          </ListMenus>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              ACCESSORIES
            </Link>
          </ListMenus>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              SERVICES
            </Link>
          </ListMenus>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              WATCHMAKING
            </Link>
          </ListMenus>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              COMMUNITY
            </Link>
          </ListMenus>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              SUSTAINABILITY
            </Link>
          </ListMenus>
          <ListMenus>
            <Link
              href='https://www.iwc.com/us/en/home.html'
              textDecoration='none'
              color={theme.color.white}
              fontFamily='IWC GOTHAM'
            >
              STORES
            </Link>
          </ListMenus>
        </ListMenusUl>
      </nav>
    </div>
  );
};
export default ServiceMenusNav;
