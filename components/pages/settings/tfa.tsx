import { Badge, Button, Card, Table, Text } from '@mantine/core';

const SettingsTfa = () => (
  <Card
    shadow='sm'
    padding='md'
    withBorder
  >
    <Text weight='bold' mb='sm' color='gray.7'>Two-Factor Authentication</Text>
    <Table>
      <tbody>
        <tr>
          <td>Google Authenticator</td>
          <td>
            <Badge color="red">Inactive</Badge>
          </td>
          <td align='right'>
            <Button variant='light' compact>
              Activate
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default SettingsTfa;
