import React, { useState } from "react";
import Ascending from "./AscendingButton/AscendingButton";
import Descending from "./Descending/DescendingButton";
interface FilterDataProps {}

const FilterData: React.FunctionComponent<FilterDataProps> = () => {
  const [visibleButton, setVisibleButton] = useState(true);
  const toggleButtons = (visible: boolean): void => setVisibleButton(visible);
  return (
    <div>
      {visibleButton === true ? (
        <Ascending toggleButtons={toggleButtons} />
      ) : (
        <Descending toggleButtons={toggleButtons} />
      )}
    </div>
  );
};

export default FilterData;
