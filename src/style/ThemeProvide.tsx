const colors = {
  white: '#fff',
  navy: '#073863',
  gray: '#EFEFEF'
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