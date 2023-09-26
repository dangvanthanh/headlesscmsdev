import { styled } from "@styled-system/jsx";

interface FeaturesProps {
  title: string;
  description: string;
}

const Container = styled("div", {
  base: {
    maxW: "screen-xl",
    mx: "auto",
    py: "8",
    px: "4",
    sm: {
      py: "16",
    },
    lg: {
      px: "12",
    },
  },
});

const Heading = styled("div", {
  base: {
    maxW: "screen-md",
    mb: 8,
    lg: {
      mb: 16,
    },
  },
});

const Title = styled("h2", {
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

const Paragraph = styled("p", {
  base: {
    fontWeight: "normal",
    color: "gray.500",
    sm: {
      fontSize: "xl",
    },
  },
});

const GridCard = styled("div", {
  base: {
    display: "grid",
    gap: "8",
    md: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 12,
    },
    lg: {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    },
  },
});

const Card = styled("div", {});

const CardCover = styled("div", {
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mb: 4,
    w: 10,
    h: 10,
    rounded: "full",
    bg: "blue.100",
    lg: {
      w: 12,
      h: 12,
    },
  },
});

const CardTitle = styled("h2", {
  base: {
    mb: 2,
    fontSize: "xl",
    fontWeight: "700",
  },
});

const CardDescription = styled("p", {
  base: {
    color: "gray.500",
  },
});

function Features(props: FeaturesProps) {
  const { title, description } = props;

  return (
    <Container>
      <Heading>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Heading>
      <GridCard>
        {Array.from(Array(6), (_e, i) => (
          <Card key={i}>
            <CardCover>
              <svg
                style={{ width: "1.5rem", height: "1.5rem" }}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </CardCover>
            <CardTitle>Marketing</CardTitle>
            <CardDescription>
              Plan it, create it, launch it. Collaborate seamlessly with all the
              organization and hit your marketing goals every month with our
              marketing plan.
            </CardDescription>
          </Card>
        ))}
      </GridCard>
    </Container>
  );
}

export default Features;
