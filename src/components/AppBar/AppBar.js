import { useSelector } from "react-redux";
import { FaRegAddressBook } from "react-icons/fa";

import { selectIsLoggedIn } from "redux/user/selectors";

import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";

export function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <div>
        <h1>
          <FaRegAddressBook />
          <p>Phonebook</p>
        </h1>
      </div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
}
