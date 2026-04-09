import { useRef, useState } from "react";
import PacienteDataFetcher from "./PacienteDataFetcher";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PacientePDF from "./PacientePDF";
import OdontogramaPreview from "./OdontogramaPreview";
import { toPng } from "html-to-image";


function PDFManager() {
  const [data, setData] = useState(null)
  const [imgOdonto, setImgOdonto] = useState(null);
  const ref = useRef();
  const generarImagen = async () => {
    if (!ref.current) return;

    const img = await toPng(ref.current, {
      backgroundColor: "#ffffff"
    });

    setImgOdonto(img);
  };

  return (
    <div className="poppins-regular" >
      <h2>Descargar Historia Clínica</h2>


      <PacienteDataFetcher onDataReady={setData} />

      {/* 👇 ODONTOGRAMA OCULTO */}
      {data && (
        <div
          style={{
            position: "absolute",
            left: "-9999px",
            top: 0
          }}
        >
          <div ref={ref}>
            <OdontogramaPreview pacienteId={data.paciente._id} />
          </div>
        </div>
      )}

      {/* 👇 BOTÓN GENERAR */}
      {data && !imgOdonto && (
        <button onClick={generarImagen} style={styles.boton}>
          Preparar PDF
        </button>
      )}

      {/* 👇 DESCARGA */}
      {data && imgOdonto && (
        <PDFDownloadLink
          document={<PacientePDF data={data} imgOdonto={imgOdonto} />}
          fileName={`Paciente_${data.paciente.dni}.pdf`}
          style={styles.boton}
        >
          {({ loading }) =>
            loading ? "Generando PDF..." : "📄 Descargar PDF"
          }
        </PDFDownloadLink>
      )}
    </div>
  );
}

export default PDFManager;

const styles = {
  boton: {
    backgroundColor: "#f5f0fa",
    color: "#765584",
    border: "2px solid #765584",
    padding: "10px 18px",
    borderRadius: "12px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    display: "inline-block",
    textDecoration: "none",
    marginTop: "10px"
  }
};