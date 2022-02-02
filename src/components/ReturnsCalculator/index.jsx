import React, { useState, useEffect } from "react";
import "./returnsCalculator.scss";
import ButtonGroup from "../ButtonGroup";
import { TimeDuration, TimePeriod } from "../../constants";
import Slider from "../Slider";

function ReturnsCalculator(props) {
  const [price, setPrice] = useState(5000);

  const [totalReturns, setTotalReturns] = useState(0);

  const [sliderValue, setSliderValue] = useState(1);

  const [returnPercent, setReturnPercent] = useState(25);

  const [activeTimePeriodType, setActiveTimePeriodType] = useState(
    TimePeriod.MONTHLY
  );

  const [activeTimeDuration, setActiveTimeDuration] = useState(
    TimeDuration.ONE_YEAR
  );

  useEffect(() => {
    setPrice(activeTimePeriodType === TimePeriod.MONTHLY ? 500 : 5000);
    setSliderValue(1);
  }, [activeTimePeriodType]);

  useEffect(() => {
    setTotalReturns(price + price * (returnPercent / 100));
  }, [price, activeTimeDuration]);

  return (
    <div className="returns-calculator">
      <ButtonGroup
        onChange={(value) => {
          setActiveTimePeriodType(value);
        }}
        activeValue={activeTimePeriodType}
        options={[
          { label: "Monthly SIP", value: TimePeriod.MONTHLY },
          { label: "One-Time", value: TimePeriod.ONE_TIME },
        ]}
      />
      <div className="returns-calculator__amount">
        ₹{price}{" "}
        {activeTimePeriodType === TimePeriod.MONTHLY ? "per month" : "one-time"}
      </div>
      <div className="returns-calculator__slider">
        <Slider
          min={1}
          value={sliderValue}
          onChange={(value) => {
            setSliderValue(value);
            setPrice(
              activeTimePeriodType === TimePeriod.MONTHLY
                ? value * 500
                : value * 5000
            );
          }}
        />
      </div>
      <div className="returns-calculator__duration">
        <div className="returns-calculator__duration-title">Over the past</div>
        <div className="mt-5">
          <ButtonGroup
            onChange={(value) => {
              setActiveTimeDuration(value);
            }}
            activeValue={activeTimeDuration}
            options={[
              { label: "1 Year", value: TimeDuration.ONE_YEAR },
              { label: "3 Years", value: TimeDuration.THREE_YEARS },
              { label: "5 Years", value: TimeDuration.FIVE_YEARS },
            ]}
          />
        </div>
      </div>
      <div className="returns-calculator__total-investment">
        <div>Total investment of ₹{price}</div>
        <div
          className={`returns-calculator__total-returns ${
            returnPercent > 0 ? "increase" : "decrease"
          }`}
        >
          Would have become ₹{totalReturns}{" "}
          <span>
            ({returnPercent > 0 ? "+" : "-"}
            {returnPercent}%)
          </span>
        </div>
      </div>
    </div>
  );
}

export default ReturnsCalculator;
