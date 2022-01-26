import React from "react";
import FriendListItem from "./FriendListItem";
import friends from "../../friends.json";
import styles from "./FriendList.module.css";

const FriendList = () => (
  <ul className={styles.friendList}>
    <FriendListItem items={friends} />
  </ul>
);

export default FriendList;
