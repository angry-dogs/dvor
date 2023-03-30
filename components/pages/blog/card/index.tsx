import { createStyles, Group, Paper, rem, Text, ThemeIcon } from "@mantine/core";
import { IArticle } from "interfaces";
import Link from "next/link";
import { Article } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: 'none !important',
    cursor: 'pointer',
  },
  card: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 150ms ease, box-shadow 100ms ease',
    padding: theme.spacing.xl,
    paddingLeft: `calc(${theme.spacing.xl} * 2)`,
    textDecoration: 'none !important',

    '&:hover': {
      boxShadow: theme.shadows.md,
      transform: 'scale(1.02)',
    },

    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: rem(6),
      backgroundImage: theme.fn.linearGradient(0, theme.colors.pink[6], theme.colors.orange[6]),
    },
  },
}));

interface IProps {
  article: IArticle;
}

const BlogCard = ({ article }: IProps) => {
  const { classes } = useStyles();
  return (
    <Link href={article.path} className={classes.link}>
      <Paper withBorder radius="md" className={classes.card}>
        <Group position='apart'>
          <ThemeIcon
            size="xl"
            radius="md"
            variant="gradient"
            gradient={{ deg: 0, from: 'pink', to: 'orange' }}
          >
            <Article size={rem(28)} />
          </ThemeIcon>
          <Text color='gray' mr='sm'>{article.publishDate}</Text>
        </Group>
        <Text size="xl" weight={500} mt="md">
          {article.title}
        </Text>
        <Text size="sm" mt="sm" color="dimmed">
          {article.previewDesc} ...
        </Text>
      </Paper>
    </Link>
  )
};

export default BlogCard;
