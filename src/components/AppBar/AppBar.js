import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/user/selectors';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

export function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
}
