
import React, { useEffect, useRef } from "react";
export const OutsideClickHandler = ({
  children,
  onOutsideClick,
  ...props
}) => {
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef?.current && !wrapperRef?.current.contains(event.target)) {
        onOutsideClick();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <div ref={wrapperRef} {...props}>
      {children}
    </div>
  );
}