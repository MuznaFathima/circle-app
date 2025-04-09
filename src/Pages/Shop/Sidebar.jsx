import React, { useState } from "react";
import style from "./Sidebar.module.css";
import { FaChevronRight } from "react-icons/fa";
import { Slider } from "@mui/material";

const Sidebar = () => {
  const [value, setValue] = useState([20, 80]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <div className={style.search}>
          <input type="text" placeholder="Search Products..." />

          <button>
            <FaChevronRight />
          </button>
        </div>
        <div className={style.filter}>
          <div className={style.filterHeader}>
            <p>Filter by price</p>
          </div>
          <div className={style.rangeSlider}>
            <Slider
              value={value}
              onChange={handleSliderChange}
              valueLabelFormat={(value) => `$${value}`}
              min={15}
              max={40}
              step={1}
              aria-labelledby="range-slider"
              sx={{
                "& .MuiSlider-thumb": {
                  borderRadius: "50%",
                  backgroundColor: "#8bc34a",
                },
                "& .MuiSlider-rail": {
                  backgroundColor: "#808285",
                },
                "& .MuiSlider-track": {
                  backgroundColor: "#8bc34a",
                  border: "none",
                },
              }}
            />
            <div className={style.priceBox}>
              <div className={style.minBox}>
                <input type="text" value={`$ ${value[0]}`} />
                <p>Min.Price</p>
              </div>
              <div className={style.minBox}>
                <input type="text" value={`$ ${value[1]}`} />
                <p>Max.Price</p>
              </div>
            </div>
            <div className={style.categorySection}>
              <p>Category (11)</p>
              <p>Category (12)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
