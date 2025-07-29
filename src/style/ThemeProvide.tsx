const colors = {
  white: '#fff',
  navy: '#073863',
  gray: '#ECEDF0'
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