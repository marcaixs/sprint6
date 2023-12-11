import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div className="flex flex-col items-center m-5">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Benvingut/da!</h1>
          <h2 className="mb-4 dark:text-white font-bold text-xl">Calculadora de pressupostos</h2>
          <p className="">En aquesta pàgina podràs calcular el teu pressupost web</p>
          <Link to="checkbox" className="btn btn-outline m-5">Calcula</Link>
        </div>
      );
}
export default Welcome;
