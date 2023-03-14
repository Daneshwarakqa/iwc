import Image from "next/image";
import Flex from "../../components/Flex";
import Link from "../../components/Link";
import styled from "styled-components";
import theme from "../../theme";
import styles from "./footer.module.scss";

const NewsletterLabel = styled.label`
  font-size: 14px;
  line-height: 20px;
  margin: 0px 43px 0px 0px;
  letter-spacing: 2px;
  width: auto;
  max-width: 100%;
  font-style: normal;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
`;

const NewsletterInput = styled.input`
  display: block;
  margin: 0px 0px 15px;
  border-width: 0px 0px 1px;
  border-top-style: initial;
  border-right-style: initial;
  border-left-style: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: white;
  border-image: initial;
  border-radius: 0px;
  padding: 0px;
  color: rgb(225, 225, 225);
  background: transparent;
  border-bottom: 0px;
  height: auto;
  margin-left: 8px;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 2px;
  margin-bottom: 21px;
  outline: 0px;
  &::placeholder {
    color: white;
  }
`;

const Footer = () => {
  return (
    <footer className={styles.iwcfooter}>
      <div className={styles.container}>
        <Flex
          divcolor={theme.color.white}
          flexWrap="wrap"
          rowGap="30px"
          className={styles.newsletter}
        >
          <NewsletterLabel>SUBSCRIBE TO OUR NEWSLETTER</NewsletterLabel>
          <Flex
            className={styles.newsletterwrapper}
            borderBottom="1px solid"
            position="relative"
            width="462px"
          >
            <NewsletterInput
              autocapitalize="off"
              autocorrect="off"
              name="iwcNewsletterEmail"
              type="email"
              placeholder="Email Address (required)"
              required=""
              aria-describedby="iwc-fnl-email-help"
              aria-invalid="false"
            />

            <Image
              src={"./images/arrow-link.svg"}
              alt="fb"
              width={22}
              height={16}
              className={styles.newsltrrwrapperarrow}
            />
          </Flex>
        </Flex>
        <Flex flexWrap="wrap" className={styles.row}>
          <div className={styles.footercol}>
            <h4>CUSTOMER CARE</h4>
            <ul>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Introduction to Our Services
                  <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Returns & Refunds
                  <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Orders & Shipping
                  <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Payment Methods
                  <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  FAQ <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Contact Us <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Privacy Policy <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Terms of Use <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Conditions of Sale <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Accessibility <div className={styles.slider}></div>{" "}
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footercol}>
            <h4>MADE AT IWC</h4>
            <ul>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  History <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Our Manufacture <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  The Journal <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Sustainability <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Swiss Luxury Watches <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Careers <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Press <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Terms of Use <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  IWC Schaffhausen Museum <div className={styles.slider}></div>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footercol}>
            <h4>VIEW WATCHES</h4>
            <ul>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  All Watches <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  IWC Collections <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Calibres <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Complications <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Straps and Bracelets <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Innovative Materials <div className={styles.slider}></div>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  Trade-In / Pre-owned <div className={styles.slider}></div>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.footercol}>
            <h4>FOLLOW US</h4>
            <ul>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  <Image
                    src={"./images/facebook.svg"}
                    alt="fb"
                    width={22}
                    height={16}
                    className={styles.sociallinks}
                  />
                  Facebook <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  <Image
                    src={"./images/instagram.svg"}
                    alt="fb"
                    width={22}
                    height={16}
                    className={styles.sociallinks}
                  />
                  Instagram <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  <Image
                    src={"./images/twitter.svg"}
                    alt="fb"
                    width={22}
                    height={16}
                    className={styles.sociallinks}
                  />
                  Twitter <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  <Image
                    src={"./images/youtube.svg"}
                    alt="fb"
                    width={22}
                    height={16}
                    className={styles.sociallinks}
                  />
                  Youtube <div className={styles.slider}></div>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.iwc.com/us/en/home.html"
                  color={theme.color.white}
                >
                  <Image
                    src={"./images/linked-in.svg"}
                    alt="fb"
                    width={22}
                    height={16}
                    className={styles.sociallinks}
                  />
                  Linkedin <div className={styles.slider}></div>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </Flex>
      </div>
    </footer>
  );
};
export default Footer;
