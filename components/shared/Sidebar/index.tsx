import React, { useState } from 'react';
import { createStyles, getStylesRef, Navbar } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ChartLine, Id, Settings } from 'tabler-icons-react';

const useStyles = createStyles((theme) => {
  return {
    header: {
      fontSize: '22px',
      fontWeight: 'bold',
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.lg,
      borderBottom: `1px solid ${theme.colors.gray[2]}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[7],
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.colors.gray[0],
        color: theme.black,

        [`& .${getStylesRef('icon')}`]: {
          color: theme.black,
        },
      },
    },

    linkIcon: {
      ref: getStylesRef('icon'),
      color: theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.colors[theme.primaryColor][0],
        color: theme.colors[theme.primaryColor][7],
        [`& .${getStylesRef('icon')}`]: {
          color: theme.colors[theme.primaryColor][7],
        },
      },
    },

    linkDisabled: {
      '&, &:hover': {
        pointerEvents: 'none',
        backgroundColor: theme.colors.white,
        color: theme.colors.gray[6],
        [`& .${getStylesRef('icon')}`]: {
          color: theme.colors.gray[6],
        },
      },
    },
  };
});

interface IProps {
  // user: ITokenData;
  onSelect: () => void;
}

const Sidebar = ({ onSelect }: IProps) => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState(router.asPath);

  useEffect(() => setCurrentPath(router.asPath), [router.asPath])

  return (
    <>
      <Navbar.Section grow>
        <Link
          href='/accounts'
          onClick={onSelect}
          className={cx(classes.link, { [classes.linkActive]: currentPath === '/accounts' })}
        >
          <Id className={classes.linkIcon} />
          <span>Accounts & Groups</span>
        </Link>
        <Link
          href='/orders'
          onClick={onSelect}
          className={cx(classes.link, { [classes.linkActive]: currentPath === '/orders' })}
        >
          <ChartLine className={classes.linkIcon} />
          <span>Orders</span>
        </Link>
        <Link
          href='/settings'
          onClick={onSelect}
          className={cx(classes.link, { [classes.linkActive]: currentPath === '/settings' })}
        >
          <Settings className={classes.linkIcon} />
          <span>Settings</span>
        </Link>
      </Navbar.Section>
    </>
  );
}

export default Sidebar;
