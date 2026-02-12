import { useAuth } from "../../contexts/authContext";
import DropdownPresenter from "./dropdown-presenter";

export default function DropdownContainer() {
  const { user, login, logout } = useAuth();

  return <DropdownPresenter user={user} onLogin={login} onLogout={logout} />;
}
