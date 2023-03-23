import { ActionIcon, Card, Switch, Table, Text, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { Moon, Sun } from 'tabler-icons-react';

const SettingsUi = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const theme = useMantineTheme();

  return (
    <Card
      shadow='sm'
      padding='md'
      withBorder
    >
      <Text weight='bold' mb='sm' color='gray.7'>Interface</Text>
      <Table>
        <tbody>
          <tr>
            <td>Dark Mode</td>
            <td>
              {/* <ActionIcon
                variant="outline"
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
              >
                {dark ? <Sun size="1.1rem" /> : <Moon size="1.1rem" />}
              </ActionIcon> */}
              <Switch
                size="md"
                color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
                onLabel={<Sun size="1rem" color={theme.colors.yellow[4]} />}
                offLabel={<Moon size="1rem" color={theme.colors.blue[6]} />}
              />
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
};

export default SettingsUi;
