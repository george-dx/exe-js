import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  return (
    <secion className={"section " + (isFancy ? "fancy" : "")}>
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </secion>
  );
}
