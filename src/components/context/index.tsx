import { createContext, useState, useEffect, useCallback } from "react";
import {
  IMapContext,
  ILaunches,
  IMapContextValues,
  ILaunchesResults,
} from "./interface";
import { makeApiCall } from "../../utils";

export const MapContext = createContext<IMapContextValues | null>(null);

export const MapContextProvider = ({ children }: IMapContext) => {
  const today = new Date();
  const month3 = today.setMonth(today.getMonth() + 3);
  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date().toISOString());
  const [endDate, setEndDate] = useState(new Date(month3).toISOString());
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterResults, setFilterResults] = useState<ILaunchesResults[] | null>(
    null
  );
  const [launches, setLaunches] = useState<ILaunches>({
    count: 0,
    results: [],
    previous: null,
    next: null,
  });
  // const [errorThrown, setErrThrown] = useState({ show: false, message: "" });
  const baseUrl = "https://lldev.thespacedevs.com/2.2.0/";

  const getLaunch = useCallback(async () => {
    try {
      setIsLoading(true);
      setIsFiltered(false);
      const data = await makeApiCall({
        url: `${baseUrl}launch/?window_start__gte=${startDate}&window_end__lte=${endDate}&limit=${limit}&offset=${offset}`,
      });
      console.log({ data });

      if (data) setLaunches({ ...data });
      setIsLoading(false);
    } catch (error) {
      // setErrThrown({ show: true, message: "" });
      console.error(error);
      setIsLoading(false);
    }
  }, [startDate, endDate, limit, offset]);

  const filterBySuccess = (value: string) => {
    const { results: data } = launches;
    if (!value) return setIsFiltered(false);

    if (data?.length) {
      const foundSuccess = data.filter(
        (launch) =>
          launch.status.abbrev === "Success" ||
          launch.status.name === "Launch Successful"
      );
      setIsFiltered(true);
      setFilterResults(foundSuccess);
    }
  };

  useEffect(() => {
    getLaunch();
  }, [getLaunch]);

  return (
    <MapContext.Provider
      value={{
        isLoading,
        setIsLoading,
        setStartDate,
        startDate,
        baseUrl,
        endDate,
        setEndDate,
        limit,
        setLimit,
        offset,
        setOffset,
        launches,
        setLaunches,
        filterBySuccess,
        isFiltered,
        setIsFiltered,
        filterResults,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
