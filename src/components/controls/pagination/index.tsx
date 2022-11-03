import React, { BaseSyntheticEvent, useContext } from "react";
import { MapContext } from "../../context";

const Pagination = () => {
  const { launches, limit, offset, setLimit, setOffset } =
    useContext(MapContext)!;
  const page = (launches.count && Math.round(offset / limit) + 1) || 1;

  const onLimitChange = (e: BaseSyntheticEvent) => {
    const { value } = e.target;
    setLimit(value);
  };
  const seekPage = (direction: string) => () => {
    if (direction === "prev") {
      setOffset(offset - limit);
    } else {
      setOffset(offset + limit);
    }
  };
  return (
    <div className="pagination">
      <div className="pagination__limit">
        <label htmlFor="limit">Limit</label>
        <input
          type="number"
          name="limit"
          id="limit"
          defaultValue={10}
          onChange={onLimitChange}
        />
      </div>
      <div className="pagination__seek">
        <button disabled={!launches.previous} onClick={seekPage("prev")}>
          Prev
        </button>
        <input type="number" name="page" id="" disabled value={page} />
        <button disabled={!launches.next} onClick={seekPage("next")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
