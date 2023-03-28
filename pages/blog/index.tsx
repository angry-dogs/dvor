import { Container, Stack } from "@mantine/core"
import BlogCard from "components/pages/blog/card";
import { IArticle } from "interfaces";
import { activeArticles } from "helpers/articles";

const BlogIndexPage = () => {
  // const theme = useMantineTheme();
  // const isDesktop = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`);

  return (
    <Container
      size="lg"
      mih='100vh'
      py={100}
    >
      <Stack spacing='xl'>
        {activeArticles.map((article: IArticle) => <BlogCard key={Math.random()} article={article} />)}
      </Stack>
    </Container>
  )
};

export default BlogIndexPage;
