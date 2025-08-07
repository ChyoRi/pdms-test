const colors = {
  white01: '#fff',
  white02: '#f4f4f4',
  red: '#eb193a',
  navy: '#073863',
  beige: '#fff4ea',
  orange: '#f88017',
  lightpupple: '#eaedfa',
  blue: '#4f76ff',
  gray01: '#ECEDF0',
  gray02: '#ccc',
  gray03: '#bdbdbd',
  gray04: '#f4f4f4',
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