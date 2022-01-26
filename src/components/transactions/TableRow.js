import React from "react";
import PropTypes from "prop-types";
import styles from "./TableRow.module.css";

const TableRow = ({ items = [] }) =>
  items.map(item => (
    <tr key={item.id}>
      <td className={styles.tData}>{item.type}</td>
      <td className={styles.tData}>{item.amount}</td>
      <td className={styles.tData}>{item.currency}</td>
    </tr>
  ));

TableRow.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired
    })
  ).isRequired
};

export default TableRow;
