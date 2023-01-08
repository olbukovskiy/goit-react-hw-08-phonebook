import Box from "Box";
import { Container } from "components/AppBar/AppBar.styled";

export const Home = () => {
  return (
    <Container>
      <Box ml="auto" mr="auto" pt="32px" pb="32px">
        <div>
          <p>Welcome in our Phonebook Application!</p>
        </div>
      </Box>
    </Container>
  );
};
