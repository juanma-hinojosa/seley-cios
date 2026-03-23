export const ToothCenter = ({ color, onClick }) => (
  <rect
    x="12"
    y="12"
    width="16"
    height="16"
    fill={color}
    stroke="black"
    onClick={onClick}
  />
);