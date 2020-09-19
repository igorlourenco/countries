import { theme } from "@chakra-ui/core";

const customTheme = {
    ...theme,
    fonts: {
        body: "Kumbh Sans, system-ui, sans-serif",
        heading: "Kumbh Sans, system-ui, sans-serif",
        mono: "Menlo, monospace",
    },
    fontWeights: {
        ...theme.fontWeights,
        normal: 300,
        medium: 400,
        bold: 700
    },
    radii: {
        ...theme.radii,
        sm: "5px",
        md: "8px",
    }
}

export default customTheme;