import { MutableRefObject, useState } from "react";
import { Box, Container, createStyles, Image, Modal, SimpleGrid, Stack, Text, useMantineTheme } from "@mantine/core";
import { Carousel } from '@mantine/carousel';
import { useDisclosure } from "@mantine/hooks";

const useStyles = createStyles(() => ({
  image: {
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

  slide: {
    div: {
      // height: '100%',
      figure: {
        // height: '100%',
        div: {
          // height: '100%',
          img: {
            height: '100% !important',
          }
        }
      }
    }
  },
}));

interface IProps {
  isDesktop: boolean;
  anchor: MutableRefObject<HTMLDivElement>;
}

const LandingPortfolioBlock = ({ isDesktop, anchor }: IProps) => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [opened, { open, close }] = useDisclosure(false);
  const [activeSlide, setActiveSlide] = useState<number>(1);

  const openModal = (index: number) => {
    setActiveSlide(index);
    open();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title=' '
        transitionProps={{ transition: 'fade', duration: 200 }}
        fullScreen
      >
        <div style={{ height: '100%', display: 'flex' }}>
          <Carousel
            mx="auto"
            height="100%"
            sx={{ flex: 1 }}
            controlSize={40}
            withIndicators
            initialSlide={activeSlide}
            withKeyboardEvents
            loop
          >
            <Carousel.Slide className={classes.slide}>
              <Image src="/img/portfolio/1.jpeg" alt="Portfolio" />
            </Carousel.Slide>
            <Carousel.Slide className={classes.slide}>
              <Image src="/img/portfolio/2.jpeg" alt="Portfolio" />
            </Carousel.Slide>
            <Carousel.Slide className={classes.slide}>
              <Image src="/img/portfolio/3.jpeg" alt="Portfolio" />
            </Carousel.Slide>
            <Carousel.Slide className={classes.slide}>
              <Image src="/img/portfolio/4.jpeg" alt="Portfolio" />
            </Carousel.Slide>
            <Carousel.Slide className={classes.slide}>
              <Image src="/img/portfolio/5.jpeg" alt="Portfolio" />
            </Carousel.Slide>
            <Carousel.Slide className={classes.slide}>
              <Image src="/img/portfolio/6.jpeg" alt="Portfolio" />
            </Carousel.Slide>
            <Carousel.Slide className={classes.slide}>
              <Image src="/img/portfolio/7.jpeg" alt="Portfolio" />
            </Carousel.Slide>
            <Carousel.Slide className={classes.slide}>
              <Image src="/img/portfolio/8.jpeg" alt="Portfolio" />
            </Carousel.Slide>
          </Carousel>
        </div>
      </Modal>

      <Box bg='#eeeeee'>
        <Container
          size='xl'
          mih='100vh'
          py={100}
          ref={anchor}
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
            <Image h='300px' className={classes.image} onClick={() => { openModal(0) }} src="/img/portfolio/1.jpeg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(1) }} src="/img/portfolio/2.jpeg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(2) }} src="/img/portfolio/3.jpeg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(3) }} src="/img/portfolio/4.jpeg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(4) }} src="/img/portfolio/5.jpeg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(5) }} src="/img/portfolio/6.jpeg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(6) }} src="/img/portfolio/7.jpeg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(7) }} src="/img/portfolio/8.jpeg" alt="Portfolio" />
          </SimpleGrid>
        </Container>
      </Box>
    </>
  )
};

export default LandingPortfolioBlock;
