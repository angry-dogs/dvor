import { MutableRefObject, useState } from "react";
import { Box, Container, createStyles, Image, SimpleGrid, Stack, Text, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

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
            <Image h='300px' className={classes.image} onClick={() => { openModal(0) }} src="/img/portfolio/preview/1.jpg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(1) }} src="/img/portfolio/preview/2.jpg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(2) }} src="/img/portfolio/preview/3.jpg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(3) }} src="/img/portfolio/preview/4.jpg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(4) }} src="/img/portfolio/preview/5.jpg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(5) }} src="/img/portfolio/preview/6.jpg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(6) }} src="/img/portfolio/preview/7.jpg" alt="Portfolio" />
            <Image h='300px' className={classes.image} onClick={() => { openModal(7) }} src="/img/portfolio/preview/8.jpg" alt="Portfolio" />
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
