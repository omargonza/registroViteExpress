import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-7 px-10 rounded-lg">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-12 h-12 rounded-full mr-2"
        />
        <h1 className="text-2xl font-bold">
          <Link to={isAuthenticated ? "/tasks" : "/"}>
            Mantenimiento eléctrico
          </Link>
        </h1>
      </div>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>Bienvenido {user.username}!!</li>
            <li>
              <ButtonLink to="/add-task">Agregar tarea</ButtonLink>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => logout()}
                className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded"
              >
                Cerrar sesión
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink
                to="/login"
                className="hover:bg-yellow-500 hover:text-black px-4 py-2 rounded-lg border border-yellow-500 text-yellow-500 font-semibold transition-colors duration-300"
              >
                Iniciar sesión
              </ButtonLink>
            </li>
            <li>
              <ButtonLink
                to="/register"
                className="hover:bg-blue-500 hover:text-white px-3 py-2 rounded"
              >
                Registrarse
              </ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
