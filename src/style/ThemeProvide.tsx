const colors = {
  white01: '#fff',
  white02: '#f4f4f4',
  red: '#eb193a',
  navy: '#073863',
  beige01: '#fff4ea',
  beige02: '#FFEEDE',
  orange: '#f88017',
  lightpupple: '#eaedfa',
  blue01: '#4f76ff',
  blue02: '#0B1ABF',
  gray01: '#ECEDF0',
  gray02: '#ccc',
  gray03: '#bdbdbd',
  gray04: '#f4f4f4',
  gray05: '#888',
  gray06: '#666',
  gray07: '#e5e2e2',
  gray08: '#F0F3F9',
  black: '#212121',
  pink01: '#FFDDDD',
  pink02: '#F48193',
  pink03: '#FFEBEB'
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