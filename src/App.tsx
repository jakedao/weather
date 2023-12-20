import { CityInfo, CitySearchForm, CitySearchHistory } from "./components";
import "./index.scss";

const App = () => {
  return (
    <div className="wrapper">
      <h3>Today's Weather</h3>
      <hr />
      <CitySearchForm />
      <CityInfo />
      <CitySearchHistory />
    </div>
  );
};
export default App;
