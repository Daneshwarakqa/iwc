import Image from "next/image";
import Button from "../Button";
import { ArLink, ArText } from "../../utils/assets";
import theme from "../../theme";
import ArIcon from "../../public/images/ar-icon.svg";

interface ImagerProps {
  imageWidth?: number;
  imageHeight?: number;
  alt: string;
  src: string;
  inlineHeight?: string;
  inlineWidth?: string;
  fill?: boolean;
  sizes?: boolean;
  isArTag?: boolean;
  arLink?: string;
}

const NextImage: React.FC<ImagerProps> = ({
  src = "/public/images/iwc-loader.gif",
  inlineHeight = "auto",
  isArTag = false,
  ...props
}) => (
  <>
    <Image
      alt={props.alt}
      src={src}
      {...(props.sizes
        ? {
            sizes: `(max-width: 768px) 100vw,
      (max-width: 1200px) 50vw,
      33vw`,
          }
        : {})}
      width={props.imageWidth}
      height={props.imageHeight}
      style={{
        width: props.inlineWidth ? props.inlineWidth : props.imageWidth,
        maxWidth: "100%",
        height: inlineHeight,
      }}
    />
    {isArTag && (
      <Button
        kind='secondary'
        padding='10px 37px'
        borderRadius='50px'
        margin='20px auto'
        width='fit-content'
        border={`1px dashed ${theme.color.white}`}
        hoverBorderColor={`1px dashed ${theme.color.black}`}
        iconFillOnHover={theme.color.white}
        buttonIcon={<ArIcon />}
      >
        <ArLink
          rel='ar'
          href={props.arLink}
        >
          <ArText>AR</ArText>
        </ArLink>
      </Button>
    )}
  </>
);

export default NextImage;
