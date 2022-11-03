import { BaseSyntheticEvent, useContext } from "react";
import { MapContext } from "../../context";

const DatesComponent = (): JSX.Element => {
  const { startDate, endDate, setStartDate, setEndDate } =
    useContext(MapContext)!;

  const toggleDates = (what: string) => (e: BaseSyntheticEvent) => {
    const { value } = e.target;
    if (value.length === 10 && new Date(value)) {
      if (what === "startDate") {
        const start = new Date(value).toISOString();
        setStartDate(start);
      } else {
        const end = new Date(value).toISOString();
        setEndDate(end);
      }
    }
  };

  return (
    <div className="dates">
      <div className="dates__start">
        <label htmlFor="startDate">Start:</label>
        <input
          type="datetime"
          name="startDate"
          id="startDate"
          placeholder="DD/MM/YY"
          onChange={toggleDates("startDate")}
        />
      </div>
      <div className="date__end">
        <label htmlFor="endDate">End:</label>
        <input
          type="datetime"
          name="endDate"
          id="endDate"
          placeholder="DD/MM/YY"
          onChange={toggleDates("endDate")}
        />
      </div>
    </div>
  );
};

export default DatesComponent;
