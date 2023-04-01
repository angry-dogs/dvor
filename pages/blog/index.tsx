import { Stack } from "@mantine/core"
import BlogCard from "components/pages/blog/card";
import { IArticle } from "interfaces";
import { activeArticles } from "helpers/articles";
import { NextSeo } from "next-seo";
import { PublicDomain } from "next-seo.config";
import BlogLayout from "components/shared/layout/blog";

interface IProps {
  isDesktop: boolean;
};

const BlogIndexPage = ({ isDesktop }: IProps) => {
  const seo = {
    title: 'Блог',
    desc: 'Блог строительной компании «Кедровый двор» расскажет об особенностях строительства домов из дерева в России и странах СНГ',
    url: `${PublicDomain}/blog`,
  };

  return (
    <>
      <NextSeo
        title={seo.title}
        description={seo.desc}
        canonical={seo.url}
        openGraph={{
          title: seo.title,
          description: seo.desc,
          url: seo.url,
        }}
      />
      <BlogLayout title='Блог' hideBackLink isDesktop={isDesktop}>
        <Stack spacing='xl'>
          {activeArticles.map((article: IArticle) => <BlogCard key={Math.random()} article={article} />)}
        </Stack>
      </BlogLayout>
    </>
  )
};

export default BlogIndexPage;
