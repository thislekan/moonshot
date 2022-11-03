import { useState, useEffect } from "react";
import { MapContext } from "../../../context";
import { BaseSyntheticEvent, useContext } from "react";

const StatusFilter = (): JSX.Element => {
  const [status, setStatus] = useState("");
  const { filterBySuccess, isLoading } = useContext(MapContext)!;
  const handleChange = (e: BaseSyntheticEvent) => {
    const { value } = e.target;
    filterBySuccess(value);
    setStatus(value);
  };

  useEffect(() => {
    if (isLoading) setStatus("");
  }, [isLoading]);

  return (
    <div className="success">
      <div className="success__content">
        <select name="" id="" onChange={handleChange} value={status}>
          <option value="">Select Status</option>
          <option value="Failed">Failed</option>
          <option value="Success">Success</option>
        </select>
      </div>
    </div>
  );
};

export default StatusFilter;
