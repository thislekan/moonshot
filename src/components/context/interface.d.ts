export interface IMapContext {
  children: React.ReactNode;
}

export interface IMapContextValues {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  setStartDate: (value: string) => void;
  setEndDate: (value: string) => void;
  baseUrl: string;
  startDate: string;
  endDate: string;
  limit: number;
  setLimit: (value: number) => void;
  offset: number;
  setOffset: (value: number) => void;
  launches: ILaunches;
  setLaunches: (value: ILaunches) => void;
  filterBySuccess: (value: string) => void;
  isFiltered: boolean;
  setIsFiltered: (value: boolean) => void;
  filterResults: ILaunchesResults[] | null;
}

export interface IPad {
  longitude: string | number;
  latitude: string | number;
  name: string;
  id: number;
  url: string;
  // agency_id: 121;
  // name: "Space Launch Complex 40";
  // info_url: null;
  // wiki_url: "https://en.wikipedia.org/wiki/Cape_Canaveral_Air_Force_Station_Space_Launch_Complex_40";
  // map_url: "http://maps.google.com/maps?q=28.56194122,-80.57735736";
  // latitude: "28.56194122";
  // longitude: "-80.57735736";
  // location: {
  //   id: 12;
  //   url: "https://lldev.thespacedevs.com/2.2.0/location/12/";
  //   name: "Cape Canaveral, FL, USA";
  //   country_code: "USA";
  //   map_image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/location_12_20200803142519.jpg";
  //   total_launch_count: 862;
  //   total_landing_count: 24;
  // };
  // map_image: "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/launch_images/pad_80_20200803143323.jpg";
  // total_launch_count: 157;
  // orbital_launch_attempt_count: 156;
}

export interface IStatus {
  id: number;
  name: string;
  abbrev: string;
  description: string;
}

export interface IFilteredResults {
  results: ILaunchesResults[];
}

export interface ILaunchesResults {
  id: string;
  url: string;
  slug: string;
  name: string;
  status: IStatus;
  // last_updated: string;
  // net: string;
  window_end: string;
  window_start: string;
  // probability: string | null;
  // holdreason: string;
  // failreason: string;
  // hashtag: string | null;
  // launch_service_provider: {
  //   id: 121;
  //   url: "https://lldev.thespacedevs.com/2.2.0/agencies/121/";
  //   name: "SpaceX";
  //   type: "Commercial";
  // };
  // rocket: {
  //   id: 2953;
  //   configuration: {
  //     id: 164;
  //     url: "https://lldev.thespacedevs.com/2.2.0/config/launcher/164/";
  //     name: "Falcon 9";
  //     family: "Falcon";
  //     full_name: "Falcon 9 Block 5";
  //     variant: "Block 5";
  //   };
  // };
  // mission: {
  //   id: 1373;
  //   name: "Hotbird 13G";
  //   description: "Hotbird 13G is a communications satellite built by Airbus Defense and Space which will provide television broadcast services over Europe, the Middle East, and North Africa for Eutelsat.";
  //   launch_designator: null;
  //   type: "Communications";
  //   orbit: {
  //     id: 2;
  //     name: "Geostationary Transfer Orbit";
  //     abbrev: "GTO";
  //   };
  // };
  pad: IPad;
  // webcast_live: boolean;
  // image: string;
  // infographic: string | null;
  // program: any[];
  // orbital_launch_attempt_count: number;
  // location_launch_attempt_count: number;
  // pad_launch_attempt_count: number;
  // agency_launch_attempt_count: number;
  // orbital_launch_attempt_count_year: number;
  // location_launch_attempt_count_year: number;
  // pad_launch_attempt_count_year: number;
  // agency_launch_attempt_count_year: number;
}

export interface ILaunches {
  count?: number | null;
  previous?: string | null;
  next?: string | null;
  results?: ILaunchesResults[];
}
