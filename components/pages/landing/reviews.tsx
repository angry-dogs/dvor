import { MutableRefObject } from "react";
import { Box, Card, Container, Group, Stack, Text, Image } from "@mantine/core";

interface IProps {
  isDesktop: boolean;
  reviewRef: MutableRefObject<HTMLDivElement>;
}

const LandingReviewsBlock = ({ isDesktop, reviewRef }: IProps) => {
  const comments = [
    {
      img: '/img/reviews/vlad.png',
      title: 'Влад, Москва',
      message: 'Команда работала на все 100, чтобы сделать наш дом таким, каким мы его хотели. Спасибо огромное за отличную работу! Удачи',
    },
    {
      img: '/img/reviews/mark-sofia.png',
      title: 'Марк и София, Казань',
      message: 'Спасибо команде "Кедровый двор", мы остались очень довольны результатом, дом получился красивым и комфортным местом для нашей новой жизни.',
    },
    {
      img: '/img/reviews/julia.png',
      title: 'Юлия, Красноярск',
      message: 'Соседи теперь нам завидуют, хах. Ребята построили нам отличный дом, за что им большое спасибо!',
    },
    {
      img: '/img/reviews/amir.png',
      title: 'Амир, Астана',
      message: 'Рекомендую эту компанию всем, кто хочет надёжный и красивый загородный дом! Наш получился просторный и уютный, как и хотели, спасибо большое.',
    },
  ];

  return (
    <Box bg='#eeeeee'>
      <Container
        size="lg"
        sx={{ minHeight: '100vh' }}
        py={100}
        ref={reviewRef}
      >
        <Stack align='center'>
          <Text size={isDesktop ? 42 : 30} weight={600} lh={1.1} align='center'>
            Отзывы наших клиентов
          </Text>
          <Stack align='center' my={60} spacing='xl'>
            {comments.map((comment, index) => {
              const img = <Image key={Math.random()} src={comment.img} alt={comment.title} width='100' height='100' radius='sm' />;
              const card = (
                <Card w={isDesktop ? '70%' : '100%'} key={Math.random()}>
                  <Text weight='bold' mb='sm'>{comment.title}</Text>
                  <Text color='gray.7'>{comment.message}</Text>
                </Card>
              );
              const isEven = index % 2 == 0;
              return (
                <Group
                  key={Math.random()}
                  align='start'
                  position={isEven ? 'left' : 'right'}
                  w='100%'
                  noWrap
                >
                  {isEven ? [img, card] : [card, img]}
                </Group>
              )
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
};

export default LandingReviewsBlock;
