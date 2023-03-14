import Flex from "../../components/Flex";
import Header from "../Header";
import Dropdown from "../../components/dropdown/dropdown";
import HeroBanner from "../HeroBanner";
import ProductDetails from "../ProductDetails";
import ProductCollection from "../ProductDetails/ProductCollection";
import ExperienceIwc from "../ExperienceIwc";
import ProductSlider from "../ProductSlider";
import Footer from "../Footer/footer";
import Loader from "../../components/Loader";

export function Iwc({ data, loader }) {
  return (
    <>
      <Header />
      <Dropdown />
      <HeroBanner bannerData={data} />
      <ProductDetails productData={data} />
      <ProductCollection collectionData={data} />
      <ProductSlider sliderData={data} />
      <ExperienceIwc experienceIwcData={data} />
      <Footer />
      {loader && (
        <Flex
          width='100%'
          height='100vh'
          alignItem='center'
          justifyContent='center'
          position='fixed'
          top='0'
          left='0'
          zIndex={99}
          background='#00000057'
        >
          <Loader />
        </Flex>
      )}
    </>
  );
}
