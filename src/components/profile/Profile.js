import React from "react";
import user from "../../user.json";
import UserDescription from "./UserDescription";
import UserStats from "./UserStats";
import styles from "./Profile.module.css";

const Profile = () => (
  <div className={styles.profile}>
    <UserDescription {...user} />
    <UserStats {...user.stats} />
  </div>
);

export default Profile;
