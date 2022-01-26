import React from "react";
import transactions from "../../transactions.json";
import TableRow from "./TableRow";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = () => (
  <table className={styles.transactionHistory}>
    <thead className={styles.tHead}>
      <tr className={styles.tRow}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      <TableRow items={transactions} />
    </tbody>
  </table>
);

export default TransactionHistory;
