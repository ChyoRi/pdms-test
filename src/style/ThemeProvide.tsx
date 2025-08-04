const colors = {
  white01: '#fff',
  white02: '#f4f4f4',
  navy: '#073863',
  gray01: '#ECEDF0',
  gray02: '#ccc',
  black: '#212121'
}

const mixin = {
  flex : (align = "flex-start", justify = "flex-start") => `
    display: flex;
    align-items: ${align};
    justify-content: ${justify}
  `
}

const theme = {
  colors, mixin
}

export default theme;