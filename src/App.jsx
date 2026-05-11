import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { UserMain } from "./features/users/UserMain";
import { Login } from "./features/auth/Login";
import { useState } from "react";
import loginService from "./services/login";
import serviceUser from "./services/serviceUser";
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUserapp");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      serviceUser.setToken(user.token);
      return user;
    }
    return null;
  });

  const handleLogout = () => {
    window.localStorage.removeItem("loggedUserapp");
    setUser(null);
    serviceUser.setToken(null);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggedUserapp", JSON.stringify(user));
      serviceUser.setToken(user.token);

      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      console.log("Wrong credentials", exception);
      setTimeout(() => {
        console.log("no se encontr");
      }, 1000);
    }
  };
  return (
    <>
      {user === null && (
        <Login
          user={({ target }) => setUsername(target.value)}
          pass={({ target }) => setPassword(target.value)}
          handle={handleLogin}
        />
      )}
      {user !== null && (
        <div className="flex h-screen overflow-hidden bg-(--color-bg-main) font-sans">
          <Sidebar user={user} handleLogout={handleLogout} />

          <main className="flex-1 flex flex-col overflow-hidden min-w-0">
            <Header user={user} />
            <UserMain />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
