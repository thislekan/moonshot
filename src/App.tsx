import "./index.scss";
import MapChart from "./components/maps";
import { MapContextProvider } from "./components/context";
import Pagination from "./components/controls/pagination";
import DatesComponent from "./components/controls/calendars";
import StatusFilter from "./components/controls/filters/successFilter";

function App() {
  return (
    <MapContextProvider>
      <div className="App">
        <div className="control">
          <StatusFilter />
          <DatesComponent />
          <Pagination />
        </div>
        <div className="map">
          <MapChart geoUrl="https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json" />
        </div>
      </div>
    </MapContextProvider>
  );
}

export default App;
