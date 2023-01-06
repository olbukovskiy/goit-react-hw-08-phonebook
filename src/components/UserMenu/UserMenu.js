import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/user/operations';
import { selectIsLoading, selectUser } from 'redux/user/selectors';

export function UserMenu() {
  const { name } = useSelector(selectUser);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const handleClick = () => {
    dispatch(logOutUser());
  };
  return (
    <>
      <p>{`Welcome, ${name}`}</p>
      <button type="button" onClick={handleClick} disabled={isLoading}>
        Log Out
      </button>
    </>
  );
}
