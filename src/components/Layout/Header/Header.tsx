import { useNavigate } from "react-router";
import Container from "../../ui/Container/Container";
import styles from "./Header.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/useRedux";
import { fetchUser } from "../../../store/asyncActions/user";
import { userSlice } from "../../../store/reducers/userReducer";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    await dispatch(fetchUser());
    localStorage.setItem("token", "token");
    navigate("/posts");
  };

  const handleLogout = async () => {
    dispatch(userSlice.actions.setUserUserSlice(null));
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className={styles.header}>
      <Container>
        <div>logo</div>
        <div>
          {user && <span>{user.email}</span>}
          {user ? (
            <button onClick={handleLogout}>Exit</button>
          ) : (
            <button onClick={handleLogin}>Login</button>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
