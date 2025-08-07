import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white01: string;
      white02: string;
      red: string;
      navy: string;
      beige: string;
      orange: string;
      lightpupple: string;
      blue: string;
      gray01: string;
      gray02: string;
      gray03: string;
      gray04: string;
      black: string;
    };
    mixin: {
      flex: (align?: string, justify?: string) => string;
    };
  }
}