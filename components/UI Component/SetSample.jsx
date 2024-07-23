import { useContext } from "react";
import { CvContext } from "../../hooks/CvContext";

const SetSample = () => {
  const { setCV } = useContext(CvContext);
  return (
    <button
      className="resetButton  transition-all h-10  bg-emerald-500 group  active:bg-emerald-500/90 overflow-hidden relative flex-1"
      onClick={setCV}
    >
      Datos de ejemplo
    </button>
  );
};

export default SetSample;
