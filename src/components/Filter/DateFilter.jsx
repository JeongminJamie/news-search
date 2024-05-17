import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./DateFilter.css";
import { useDispatch } from "react-redux";
import { newsActions } from "../../store/news-slice";

const DateFilter = () => {
  const [date, setDate] = useState(new Date());
  const dateRef = useRef(date);

  const dispatch = useDispatch();

  // convert the datepicker value to like new Date(news.publishedAt).toLocaleDateString() for comparison
  const dateMDY = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  // handle DatePicker onChange
  const dateChangeHandler = (date) => {
    setDate(date);
  };

  // set dateFilteredNews state when the date converted has been changed
  useEffect(() => {
    dispatch(newsActions.dateFilterNews(dateMDY));
  }, [dispatch, dateMDY]);

  /* set the isDateFiltered state only when the date has been changed 
  used useRef to store the initial date value and compare to the date modified
   */
  useEffect(() => {
    if (dateRef.current !== date) {
      dispatch(newsActions.checkDateFiltered(true));
    }
  }, [dispatch, date]);

  return (
    <div className="date-filter--container">
      <DatePicker
        className="date-filter--picker"
        selected={date}
        onChange={dateChangeHandler}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="calender-icon"
      >
        <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
        <path
          fillRule="evenodd"
          d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default DateFilter;
