import { ReactNode } from "react";

import "../../styles/IconButton.scss";

type TOwnProps = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  label?: string;
  handleClick: (arg?: unknown) => void;
};

const IconButton = (props: TOwnProps) => {
  const { label, startIcon, endIcon, handleClick } = props;

  return (
    <div className="icon-button" onClick={handleClick}>
      {startIcon}
      {label}
      {endIcon}
    </div>
  );
};
export default IconButton;
