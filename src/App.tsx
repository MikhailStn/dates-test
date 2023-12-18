import "./styles/index.scss";
import { Dates } from "./components/Dates/Dates";

export const App = () => {
  return (
    <div className="app-container">
      <Dates intervals={6} />
    </div>
  );
};
