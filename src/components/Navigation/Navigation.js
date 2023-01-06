import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/user/selectors";

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </>
  );
}
