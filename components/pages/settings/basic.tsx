import { Card, Table, Text } from '@mantine/core';

const SettingsBaseInfo = () => (
  <Card
    shadow='sm'
    padding='md'
    withBorder
  >
    <Text weight='bold' mb='sm' color='gray.7'>Basic Information</Text>
    <Table>
      <tbody>
        <tr>
          <td>Full name</td>
          <td>Angry Dog</td>
          <td></td>
        </tr>
        <tr>
          <td>User Name</td>
          <td>ybMoBe872XMzW8p7BoJT</td>
          <td></td>
        </tr>
        <tr>
          <td>Email</td>
          <td>test@example.com</td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  </Card>
);

export default SettingsBaseInfo;
