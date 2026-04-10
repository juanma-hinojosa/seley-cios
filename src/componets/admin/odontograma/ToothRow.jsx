import Tooth from "./Tooth";

const ToothRow = ({ teeth, dientesData, onChange, editable }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "6px",
      maxWidth: "100%",
      padding: "0 8px"
    }}
  >
    {teeth.map(n => {
      const diente = dientesData.find(d => d.numero === String(n));

      return (
        <Tooth
          key={n}
          number={n}
          data={diente}
          onChange={onChange}
          editable={editable}
        />
      );
    })}
  </div>
);

export default ToothRow;