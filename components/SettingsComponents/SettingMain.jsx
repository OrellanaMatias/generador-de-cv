import { motion, AnimatePresence } from "framer-motion";

import ContactBtn from "../UI Component/ContactBtn";
import GithubBtn from "../UI Component/GithubBtn";
import SetEmpty from "../UI Component/SetEmpty";
import SetSample from "../UI Component/SetSample";
import TemplateSwitcher from "../UI Component/TemplateSwitcher";

const SettingMain = () => {
  return (
    <AnimatePresence>
      <motion.div layout className="cardStyle">
        <h1 className="text-2xl font-bold">Generador de CV</h1>
        <div className="mt-5">
          <p>
            Este generador de curriculums permite armar un CV rápidamente.<br />
          </p>
          <div className="bg-sky-50 border-2 border-sky-700/50 px-2 mt-4 mb-2 pt-4 py-2 rounded-xl">
            <h1 className="text-sky-900 text-xl font-bold">¿Como se usa?</h1>
            <ol className="list-none mt-2 text-sky-900 space-y-2">
              <li>
                ● El boton de <strong>Reset</strong> y el boton de 
                <strong> Datos de ejemplo </strong>
                borran todos los datos que ya hayas ingresado, y no los podras volver a recuperar.
              </li>
              <li>
                ● <strong>Contactame</strong> si encontraste problemitas.
              </li>
              <li>
                ● Aveces las casillas de verificacion no funcionan.
                <strong> Solo hay que hacer doble clic para que funcionen correctamente.</strong>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex space-x-2 ">
            <SetEmpty />
            <SetSample />
          </div>
          <motion.div
            layout
            className="w-44 h-1 mx-auto mt-2 bg-gray-200 rounded-full"
          />
          <div className="flex space-x-2 mt-2">
            <ContactBtn />

            <GithubBtn />
          </div>

          <div className="mt-5">
            <h1 className="text-xl font-bold">Plantillas</h1>
            <div className="flex flex-row space-x-4 mt-2">
              <TemplateSwitcher value={1} />
              <TemplateSwitcher value={2} />
              <TemplateSwitcher value={3} />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SettingMain;
