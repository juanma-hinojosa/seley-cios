import {
  Document,
  Page,
  Text,
  View,
  StyleSheet
} from "@react-pdf/renderer";
import { Image } from "@react-pdf/renderer";
import Logo from '/img/logo-violeta.png'

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10
  },
  section: {
    marginBottom: 15
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 5,
    fontWeight: "bold"
  },
  box: {
    border: "1px solid #ccc",
    padding: 8,
    marginBottom: 5
  },
  colorContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  column: {
    flex: 1
  },
  colorRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5
  },
  colorBox: {
    width: 10,
    height: 10,
    marginRight: 5,
    border: "1px solid #000"
  },
  markSection: {
    marginTop: 12,
    borderTop: "1px solid #ddd",
    paddingTop: 10
  },
  markTitle: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 8
  },
  markGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8
  },
  markItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: 6,
    padding: 6,
    marginBottom: 6
  },
  markBadge: {
    width: 24,
    height: 24,
    border: "1px solid #000",
    borderRadius: 4,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 10,
    fontWeight: "bold"
  },
  markBadgeCircle: {
    width: 24,
    height: 24,
    border: "1px solid #000",
    borderRadius: 12,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  markText: {
    fontSize: 9,
    flex: 1
  }
});

const COLOR_INFO = [
  {
    categoria: "Principales",
    items: [
      {
        nombre: "Celeste",
        descripcion: "Tratamientos realizados y en buen estado",
        color: "#00aae4"
      },
      {
        nombre: "Rojo",
        descripcion: "Caries, lesiones o tratamientos pendientes",
        color: "#E63946"
      }
    ]
  },
  {
    categoria: "Complementarios",
    items: [
      {
        nombre: "Verde",
        descripcion: "Tratamientos temporales",
        color: "#008000"
      },
      {
        nombre: "Negro",
        descripcion: "Ausencias naturales de piezas",
        color: "#000"
      },
      {
        nombre: "Amarillo",
        descripcion: "Sellantes de fosas y fisuras",
        color: "#FFFF00"
      },
      {
        nombre: "Naranja",
        descripcion: "Hallazgos particulares o materiales específicos",
        color: "#FFA500"
      }
    ]
  }
];

const MARK_INFO = [
  {
    inicial: "TC",
    descripcion: "Tratamiento de conducto"
  },
  {
    inicial: "O",
    descripcion: "Corona"
  },
  {
    inicial: "P",
    descripcion: "Pivot / Perno"
  },
  {
    inicial: "I",
    descripcion: "Incrustación"
  },
  {
    inicial: "=",
    descripcion: "Extracción"
  },
  {
    inicial: "X",
    descripcion: "Pieza Ausente"
  }
];

const PacientePDF = ({ data, imgOdonto }) => {
  const { paciente, historia, odontograma } = data;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 15 }}>

          {/* 🏥 COLUMNA IZQUIERDA */}
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>

            {/* Logo */}
            <Image src={Logo} style={{ width: 60, marginRight: 10 }} />

            {/* Info consultorio */}
            <View>
              {/* <Text style={styles.title}>Consultorio Integral Odontológico SEL "C.I.O.S"</Text> */}
              <Text>Consultorio Integral Odontológico SEL "C.I.O.S."</Text>
              <Text>Beauchef 1612 PB - Parque Chacabuco - CABA</Text>
              <Text>WhatsApp: 1132160533</Text>
              <Text>Email: cios.dental.rr@gmail.com</Text>
            </View>

          </View>

          {/* 👤 COLUMNA DERECHA (PACIENTE) */}
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text style={styles.title}>Ficha del Paciente</Text>
            <Text>{paciente.nombre} {paciente.apellido}</Text>
            <Text>DNI: {paciente.dni}</Text>
            <Text>N°: {paciente.numeroPaciente}</Text>
          </View>

        </View>

        {/* 🦷 ODONTOGRAMA (básico) */}
        <View style={styles.section}>
          <Text style={styles.title}>Odontograma</Text>

          {imgOdonto && (
            <Image src={imgOdonto} style={{ width: "100%", marginTop: 10 }} />
          )}

          <View style={styles.colorContainer}>

            {COLOR_INFO.map((grupo, i) => (
              <View key={i} style={styles.column}>
                <Text style={{ fontSize: 11, marginBottom: 5 }}>
                  {grupo.categoria}
                </Text>

                {grupo.items.map((item, j) => (
                  <View key={j} style={styles.colorRow}>
                    <View
                      style={{
                        ...styles.colorBox,
                        backgroundColor: item.color
                      }}
                    />
                    <Text>
                      {item.nombre}: {item.descripcion}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          <View style={styles.markSection}>
            <Text style={styles.markTitle}>
              Referencias de pieza completa
            </Text>

            <View style={styles.markGrid}>
              {MARK_INFO.map((item, i) => (
                <View key={i} style={styles.markItem}>
                  {item.inicial === "O" ? (
                    <View style={styles.markBadgeCircle} />
                  ) : (
                    <View style={styles.markBadge}>
                      <Text
                        style={{
                          fontSize: item.inicial === "TC" ? 8 : 10,
                          fontWeight: "bold"
                        }}
                      >
                        {item.inicial}
                      </Text>
                    </View>
                  )}

                  <Text style={styles.markText}>
                    <Text style={{ fontWeight: "bold" }}>
                      {item.inicial}
                    </Text>{" "}
                    {item.descripcion}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* 📄 HISTORIA CLÍNICA */}
        <View style={styles.section}>
          <Text style={styles.title}>Historia Clínica</Text>

          {historia.map((r) => (
            <View key={r._id} style={styles.box}>
              <Text style={styles.subtitle}>{r.titulo}</Text>
              <Text>Doctor: {r.doctor?.name}</Text>
              <Text>{r.descripcion}</Text>

              <Text>
                Fecha: {new Date(r.fecha).toLocaleDateString("es-AR")}
              </Text>
            </View>
          ))}
        </View>



      </Page>
    </Document>
  );
};

export default PacientePDF;