import React from "react";
import { resolve } from "styled-jsx/css";

export default function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}
