export const ToothFace = ({ points, color, onClick }) => (
  <polygon points={points} fill={color} onClick={onClick} />
);