import Flex from "../../components/Flex";
import Container from "../../components/Container";
import NextImage from "../../components/ImageShimmer";
import Link from "../../components/Link";
import ReactSlider from "../../components/Slider";
import Text from "../../components/Text";
import styled from "styled-components";
import { convertObjectOfObjectsToArray } from "../../utils/global.utils";
import theme from "../../theme";

const SliderFlexStyleOverride = styled(Flex)`
  flex: 1;
`;

const ProductSlider = ({ sliderData }) => {
  const sliderItems = convertObjectOfObjectsToArray(sliderData?.productSlider);
  return (
    <section className='mt100'>
      <Container>
        <Flex className='col-sm-12 col-md-3 sm-mt40'>
          <Text
            textColor={theme.color.white}
            fontSize='h4'
            fontWeight='medium'
            textTransform='uppercase'
            fontFamily='IWC Gotham'
          >
            new pilot&#39;s watches collection 2022
          </Text>
        </Flex>
        <Flex className='col-sm-12 col-md-9 sm-mt40 ph40'>
          <ReactSlider>
            {sliderItems.map((item) => {
              return (
                <>
                  <SliderFlexStyleOverride
                    key={item.id}
                    height='100%'
                    maxHeight='283px'
                    margin='0 0 20px 0'
                  >
                    <Link
                      key={`iwc-link-${item.id}`}
                      href={item.ctaLinkExternal}
                      height='100%'
                      display='block'
                    >
                      <NextImage
                        key={`iwc-image-${item.id}`}
                        alt={item.id}
                        src={item.image.publishUrl}
                        imageHeight={298}
                        imageWidth={298}
                        inlineHeight='100%'
                      />
                    </Link>
                  </SliderFlexStyleOverride>
                  <Link
                    key={`iwc-description-link-${item.id}`}
                    href={item.ctaLinkExternal}
                  >
                    {item.description.json.map((item, idx) => {
                      return (
                        <Text
                          className={`description-${idx}`}
                          key={`description-${idx}`}
                          textColor={theme.color.white}
                          fontSize='normal'
                          fontWeight='medium'
                          textTransform={idx === 0 ? "uppercase" : ""}
                        >
                          {item.content[0].value}
                        </Text>
                      );
                    })}
                  </Link>
                </>
              );
            })}
          </ReactSlider>
        </Flex>
      </Container>
    </section>
  );
};

export default ProductSlider;
