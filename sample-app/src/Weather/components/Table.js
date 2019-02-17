
import React from "react";
import styles from "../weather.module.scss"

const Table = ({ headers, data }) => (
  <table className="table is-fullwidth is-hoverable">
    <thead>
      <tr>{headers.map((title, index) => <th key={index}>{title}</th>)}</tr>
    </thead>
    <tbody>
      {data.map((data, index) => (
        <tr key={index}>
          <td>{data.location}</td>
          <td>{data.lat}</td>
          <td>{data.lng}</td>
          <td>
            {data.data.map((hour, index) => (
              <span key={index} className={styles.weatherItem}>
                <img src={hour.icon} alt="icon" width="25px" />
                {hour.percent_chance_of_rain}
              </span>
            ))}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
