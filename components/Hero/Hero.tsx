import { styled } from "@styled-system/jsx";

interface HeroProps {
  title: string;
  description: string;
}

const Container = styled("div", {
  base: {
    maxW: "screen-xl",
    mx: "auto",
    py: "8",
    px: "4",
    textAlign: "center",
    lg: {
      py: "16",
      px: "12",
    },
  },
});

const Title = styled("h1", {
  base: {
    mb: "4",
    fontSize: "4xl",
    fontWeight: "900",
    lineHeight: "1",
    color: "gray.900",
    md: {
      fontSize: "5xl",
    },
    lg: {
      fontSize: "6xl",
    },
  },
});

const Description = styled("p", {
  base: {
    mb: "8",
    fontSize: "lg",
    fontWeight: "normal",
    color: "gray.500",
    sm: {
      px: "16",
    },
    lg: {
      fontSize: "xl",
    },
    xl: {
      px: "48",
    },
  },
});

function Hero(props: HeroProps) {
  const { title, description } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}

export default Hero;
