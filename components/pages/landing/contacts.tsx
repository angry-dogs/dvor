import { MutableRefObject } from "react";
import { Anchor, Box, Container, Group, Table, Text, Tooltip, useMantineTheme } from "@mantine/core";
import { At, BrandTelegram, BrandWhatsapp, PhoneCall } from "tabler-icons-react";

interface IProps {
  isDesktop: boolean;
  anchor: MutableRefObject<HTMLDivElement>;
}

const LandingContactsBlock = ({ isDesktop, anchor }: IProps) => {
  const theme = useMantineTheme();

  return (
    <Box bg='#eeeeee'>
      <Container
        size="lg"
        // mih='100vh'
        py={100}
        ref={anchor}
      >
        <Text size={isDesktop ? 42 : 30} weight={600} lh={1.1} align='center'>
          Контакты
        </Text>

        <Group position='center' my={60}>
          <Table w='auto'>
            <tbody>
              <tr>
                <td>
                  <Anchor href='tel:+79029913632' size={32} weight={600} color='black'>
                    +7 (902) 991 36-32
                  </Anchor>
                </td>
                <td style={{ paddingLeft: '40px' }}>
                  <Tooltip label="Звонок" withArrow>
                    <Box display='inline-block'>
                      <PhoneCall color='green' />
                    </Box>
                  </Tooltip>
                </td>
              </tr>
              <tr>
                <td style={{ borderTop: '0' }}>
                  <Anchor href='tel:+79135673916' size={32} weight={600} color='black'>
                    +7 (913) 567 39-16
                  </Anchor>
                </td>
                <td style={{ borderTop: '0', paddingLeft: '40px' }}>
                  <Group>
                    <Tooltip label="WhatsApp" withArrow>
                      <Box display='inline-block'>
                        <BrandWhatsapp color='#25d366' />
                      </Box>
                    </Tooltip>
                    <Tooltip label="Telegram" withArrow>
                      <Box display='inline-block'>
                        <BrandTelegram color='#0088cc' />
                      </Box>
                    </Tooltip>
                  </Group>
                </td>
              </tr>
              <tr>
                <td style={{ borderTop: '0' }}>
                  <Anchor href='mailto:kedrovy-dvor@mail.ru' size={32} weight={600} color='orange'>
                    kedrovy-dvor@mail.ru
                  </Anchor>
                </td>
                <td style={{ borderTop: '0', paddingLeft: '40px' }}>
                  <Tooltip label="Электронная почта" withArrow>
                    <Box display='inline-block'>
                      <At color={theme.colors.grape[7]} />
                    </Box>
                  </Tooltip>
                </td>
              </tr>
            </tbody>
          </Table>
        </Group>
      </Container>
    </Box>
  )
};

export default LandingContactsBlock;
