import { MutableRefObject, useState } from "react";
import { Box, Container, createStyles, Image, SimpleGrid, Stack, Text, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Img1 from 'public/img/portfolio/preview/1.jpg';
import Img2 from 'public/img/portfolio/preview/2.jpg';
import Img3 from 'public/img/portfolio/preview/3.jpg';
import Img4 from 'public/img/portfolio/preview/4.jpg';
import Img5 from 'public/img/portfolio/preview/5.jpg';
import Img6 from 'public/img/portfolio/preview/6.jpg';
import Img7 from 'public/img/portfolio/preview/7.jpg';
import Img8 from 'public/img/portfolio/preview/8.jpg';

const useStyles = createStyles(() => ({
  image: {
    cursor: 'pointer',
    figure: {
      height: '100%',
      div: {
        height: '100%',
        img: {
          height: '100% !important',
        }
      }
    }
  },
}));

interface IProps {
  isDesktop: boolean;
  portfolioRef: MutableRefObject<HTMLDivElement>;
}

const LandingPortfolioBlock = ({ isDesktop, portfolioRef }: IProps) => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [activeSlide, setActiveSlide] = useState<number>(1);

  const showImage = (index: number) => {
    setActiveSlide(index);
    open();
  };

  return (
    <>
      <Box bg='#eeeeee'>
        <Container
          size='xl'
          mih='100vh'
          py={100}
          ref={portfolioRef}
        >
          <Stack align='center'>
            <Text size={isDesktop ? 42 : 30} weight={600} lh={1.1} align='center'>
              Наши работы
            </Text>
          </Stack>

          {/* <Text size={isDesktop ? 20 : 14} align='center' px={isDesktop ? 80 : theme.spacing.md} mt='lg'>
            Примеры выполненных работ, которыми гордится наша команда
          </Text> */}

          <SimpleGrid
            my={60}
            cols={4}
            breakpoints={[
              { maxWidth: theme.breakpoints.md, cols: 2 },
              { maxWidth: theme.breakpoints.sm, cols: 1 },
            ]}
          >
            <Image h='300px' className={classes.image} onClick={() => showImage(0)} src={Img1.src} alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => showImage(1)} src={Img2.src} alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => showImage(2)} src={Img3.src} alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => showImage(3)} src={Img4.src} alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => showImage(4)} src={Img5.src} alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => showImage(5)} src={Img6.src} alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => showImage(6)} src={Img7.src} alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => showImage(7)} src={Img8.src} alt="Portfolio" />
          </SimpleGrid>
        </Container>
      </Box>

      <Lightbox
        open={opened}
        close={close}
        index={activeSlide}
        slides={[
          { src: "/img/portfolio/original/1.jpeg" },
          { src: "/img/portfolio/original/2.jpeg" },
          { src: "/img/portfolio/original/3.jpeg" },
          { src: "/img/portfolio/original/4.jpeg" },
          { src: "/img/portfolio/original/5.jpeg" },
          { src: "/img/portfolio/original/6.jpeg" },
          { src: "/img/portfolio/original/7.jpeg" },
          { src: "/img/portfolio/original/8.jpeg" },
        ]}
      />
    </>
  )
};

export default LandingPortfolioBlock;
