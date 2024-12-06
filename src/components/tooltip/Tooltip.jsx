import classNames from "classnames";
import React from "react";
import styles from "./Tooltip.module.scss";

const Tooltip = ({
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  color = "",
  bgColor = "",
  orientation = "top",
  message,
  ...restProps
}) => {
  const style = {
    top,
    right,
    bottom,
    left,
    color,
    backgroundColor: bgColor,
  };

  const setOrientationClass = (type) => {
    switch (type) {
      case "top":
        return styles.orientationTop;
      case "bottom":
        return styles.orientationBottom;
      case "left":
        return styles.orientationLeft;
      case "right":
        return styles.orientationRight;
      default:
        return "";
    }
  };
  return (
    <span
      style={style}
      className={classNames(styles.tooltip, setOrientationClass(orientation))}
      role="tooltip"
      {...restProps}
    >
      {message}
    </span>
  );
};

export default Tooltip;
