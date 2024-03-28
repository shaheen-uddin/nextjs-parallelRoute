import React from "react";
import Assignments from "../components/Assignments";
import Notification from "../components/Notification";
import Quiz from "../components/Quiz";

export default function DashBoardPage() {
  return (
    <>
      <Assignments />
      <Notification />
      <Quiz />
    </>
  );
}
