import { Link } from "react-router-dom";

function HomePage() {
  return (
  <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold">Mantenimiento electrico</h1>
      <p className="text-md text-slate-400">
       Sitio dedicado exclusivamente a las tareas del sector de mantenimiento electrico. Registrate con un mail y usuario
       y comienza a utilizar esta App. Ya que en ellla podras guardar las tareas diarias y acceder a ellas cuando te sea necesario. Y asi podras
       tener un historial de tus trabajos.
      </p>

      <Link
        className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
        to="/register"
      >
        Empezar
      </Link>
    </header>
  </section>
  );
}

export default HomePage;