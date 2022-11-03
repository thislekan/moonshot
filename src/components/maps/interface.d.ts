import { ILaunchesResults } from "../context/interface";

export interface IMapChart {
  geoUrl: string;
}

export interface IMarkersComponent {
  markers: ILaunchesResults[];
  handleClick: (mark: ILaunchesResults) => void;
}

export interface IMarkerType {
  name: string;
  coordinates: [number, number];
  markerOffset: number;
}
