import { useSelector } from "react-redux";

import { FaRegAddressBook } from "react-icons/fa";

import { selectIsLoggedIn } from "redux/user/selectors";

import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import {
  AppBarTitle,
  AppBarTitleText,
  AppBarWrapper,
  Container,
  Header,
} from "./AppBar.styled";

export function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Header>
      <Container>
        <AppBarWrapper>
          <AppBarTitle>
            <FaRegAddressBook />
            <AppBarTitleText>Phonebook</AppBarTitleText>
          </AppBarTitle>
          <Navigation />
        </AppBarWrapper>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Header>
  );
}
