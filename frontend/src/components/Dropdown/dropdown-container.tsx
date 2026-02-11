import { useAuth } from "../../contexts/authContext";
import DropdownPresenter from "./dropdown-presenter";

export default function DropdownContainer() {
  const { login, logout } = useAuth();

  return <DropdownPresenter onLogin={login} onLogout={logout} />;
}
