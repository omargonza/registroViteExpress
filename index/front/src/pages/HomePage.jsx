import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className="bg-red-500 flex justify-center items-center">
    <header className="bg-zinc-800 p-10">
      <h1 className="text-5xl py-2 font-bold text-white">Mantenimiento eléctrico</h1>
      <p className="text-md text-slate-400 text-white">
        Sitio dedicado exclusivamente a las tareas del sector de mantenimiento eléctrico. Regístrate con un correo electrónico y usuario y comienza a utilizar esta App. Podrás guardar las tareas diarias y acceder a ellas cuando lo necesites. Así podrás tener un historial de tus trabajos.
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