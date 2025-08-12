import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white01: string;
      white02: string;
      red: string;
      navy: string;
      beige01: string;
      beige02: string;
      orange: string;
      lightpupple: string;
      blue01: string;
      blue02: string;
      gray01: string;
      gray02: string;
      gray03: string;
      gray04: string;
      gray05: string;
      gray06: string;
      gray07: string;
      black: string;
      pink01: string;
      pink02: string;
      pink03: string;
    };
    mixin: {
      flex: (align?: string, justify?: string) => string;
    };
  }
}