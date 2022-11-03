import { Marker } from "react-simple-maps";
import { ILaunchesResults } from "../context/interface";
import { IMarkersComponent } from "./interface";

const MarkersComponent = ({ markers, handleClick }: IMarkersComponent) => {
  const handleMarkClick = (mark: ILaunchesResults) => () => handleClick(mark);
  return (
    <>
      {markers.map((mark, index) => {
        const { name, longitude, latitude, id } = mark.pad;
        return (
          <Marker
            key={name + id + index}
            coordinates={[Number(longitude), Number(latitude)]}
            onClick={handleMarkClick(mark)}
          >
            <g
              fill="none"
              stroke="#000C66"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              y={10}
              style={{ fontFamily: "system-ui", fill: "#FFFFF5" }}
            >
              {id}
            </text>
          </Marker>
        );
      })}
    </>
  );
};

export default MarkersComponent;
