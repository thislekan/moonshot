import { useContext, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { IMapChart } from "./interface";
import MarkersComponent from "./markers";
import { MapContext } from "../context";
import SpinnerComponent from "../spinner";
import LaunchDetails from "../message";
import { ILaunchesResults } from "../context/interface";

const MapChart = ({ geoUrl }: IMapChart): JSX.Element => {
  const { launches, isLoading, isFiltered, filterResults } =
    useContext(MapContext)!;
  const data = isFiltered ? filterResults : launches.results;
  const [showDetails, setShowDetails] = useState(false);
  const [markDetails, setMarkDetails] = useState<ILaunchesResults>();

  const handleClick = (value: ILaunchesResults) => setMarkDetails(value);

  return (
    <>
      {isLoading && <SpinnerComponent />}
      {/* {!isLoading && showDetails && <LaunchDetails mark={markDetails} />} */}
      <ComposableMap projection="geoEqualEarth" width={1000} height={500}>
        <Geographies geography={geoUrl}>
          {({ geographies }) => {
            return geographies.map((geo, index) => (
              <Geography
                key={geo.rmsKey || geo + index}
                geography={geo}
                // fill="#EAEAEC"
                // stroke="#D6D6DA"
                // fill="#868B8E"
                stroke="#D6D6DA"
                fill="#3D550C"
                style={{
                  hover: {
                    fill: "#F53",
                  },
                  pressed: {
                    fill: "#E42",
                  },
                }}
              />
            ));
          }}
        </Geographies>
        <MarkersComponent markers={data || []} handleClick={handleClick} />
      </ComposableMap>
    </>
  );
};

export default MapChart;
