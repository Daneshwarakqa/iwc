import React from "react";
import Container from "../../../components/Container";
import Flex from "../../../components/Flex";
import Image from "../../../components/ImageShimmer";
import Link from "../../../components/Link";
import Text from "../../../components/Text";
import styled from "styled-components";
import { convertObjectOfObjectsToArray } from "../../../utils/global.utils";
import theme from "../../../theme";

const ListView = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  li {
    display: inline-block;
    max-width: 195px;
    margin: 0 15px 0 0;
    text-align: center;
    transition: transform 0.5s ease 0s;
    p {
      border-bottom: 1px solid rgb(162, 142, 83);
    }
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      transform: scale(1.05);
    }
    @media (max-width: 767px) {
      margin: 0 0 30px 0;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const ProductCollectionSection = styled.section`
  background: ${theme.color.blackShade2};
`;

const ProductCollection = ({ collectionData }) => {
  const productObject = convertObjectOfObjectsToArray(
    collectionData?.productCollection
  );

  return (
    <ProductCollectionSection className='mt100 pv80'>
      <Container>
        <Flex
          className='col-md-12'
          justifyContent='center'
        >
          <ListView>
            {productObject.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.ctaLinkExternal}>
                    <Image
                      key={`${item.id}_image`}
                      src={item.image.publishUrl}
                      alt={item.id}
                      imageHeight={264}
                      imageWidth={200}
                      sizes
                    />
                    <Text
                      textColor={theme.color.white}
                      fontSize='smallText'
                      lineHeight='17px'
                      fontWeight='regular'
                      margin='40px auto 0'
                      width='fit-content'
                      className='iwc-global-mach-Gotham'
                    >
                      {item.ctaText}
                    </Text>
                  </Link>
                </li>
              );
            })}
          </ListView>
        </Flex>
      </Container>
    </ProductCollectionSection>
  );
};

export default ProductCollection;
