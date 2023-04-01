import { MutableRefObject } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, Card, Container, SimpleGrid, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { ArrowNarrowRight } from 'tabler-icons-react';
import Img1 from 'public/img/services/bar.webp';
import Img2 from 'public/img/services/circle-log.webp';
import Img3 from 'public/img/services/manual-log.webp';

interface IProps {
  isDesktop: boolean;
  servicesRef: MutableRefObject<HTMLDivElement>;
}

const LandingServicesBlock = ({ isDesktop, servicesRef }: IProps) => {
  const theme = useMantineTheme();
  return (
    <Container
      size="lg"
      sx={{ minHeight: '100vh' }}
      py={100}
      ref={servicesRef}
    >
      <Stack align='center'>
        <Text size={isDesktop ? 42 : 30} weight={600} lh={1.1} align='center'>
          Что мы предлагаем
        </Text>
        <Text size={isDesktop ? 20 : 14} align='center' px={isDesktop ? 80 : theme.spacing.md} mt='lg'>
          Мы выполняем проектирование и строительно-монтажные работы из бруса, оцилиндрованного бревна и бревна ручной рубки любой сложности
        </Text>
        <SimpleGrid
          cols={3}
          my={60}
          spacing="lg"
          breakpoints={[
            { maxWidth: theme.breakpoints.sm, cols: 1, spacing: 'sm' },
          ]}
        >
          <Card withBorder shadow='sm'>
            <Card.Section>
              <Image src={Img1.src} alt='Брус' width='400' height='200' />
            </Card.Section>
            <Text size={20} weight='bold' my='md'>Брус</Text>
            <Link href='/blog/dom-iz-brusa'>
              <Button
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
              >
                Читать подробнее&nbsp;
                <ArrowNarrowRight />
              </Button>
            </Link>
          </Card>
          <Card withBorder shadow='sm'>
            <Card.Section>
              <Image src={Img2.src} alt='Брус' width='400' height='200' />
            </Card.Section>
            <Text size={20} weight='bold' my='md'>Оцилиндрованное бревно</Text>
            <Link href='/blog/dom-iz-ocilindrovannogo-brevna'>
              <Button
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
              >
                Читать подробнее&nbsp;
                <ArrowNarrowRight />
              </Button>
            </Link>
          </Card>
          <Card withBorder shadow='sm'>
            <Card.Section>
              <Image src={Img3.src} alt='Брус' width='400' height='200' />
            </Card.Section>
            <Text size={20} weight='bold' my='md'>Бревно ручной рубки</Text>
            <Link href='/blog/dom-iz-brevna-ruchnoy-rubki'>
              <Button
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}
              >
                Читать подробнее&nbsp;
                <ArrowNarrowRight />
              </Button>
            </Link>
          </Card>
        </SimpleGrid>
      </Stack>
    </Container>
  )
};

export default LandingServicesBlock;
