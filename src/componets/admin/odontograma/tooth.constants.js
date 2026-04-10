export const STATES = ["", "caries", "restaurado",
  // "ausente",
  'temporales', 'sellantes', 'ausentes', 'materialesEspecificos'];

export const COLORS = {
  "": "#f5f5f5",
  caries: "#E63946",
  restaurado: "#00aae4",
  // ausente: "#9e9e9e",
  temporales: '#008000',
  sellantes: '#FFFF00',
  ausentes: '#000',
  materialesEspecificos: '#FFA500'
};

export const INITIAL_FACES = {
  top: "",
  right: "",
  bottom: "",
  left: "",
  center: ""
};

export const TOOTH_MARKS = [
  { value: "", label: "-" },
  { value: "TC", label: "TC" },
  { value: "O", label: "O" }, // Corona / círculo
  { value: "P", label: "P" },
  { value: "I", label: "I" },
  { value: "=", label: "=" },
  { value: 'X', label: 'X' }
];