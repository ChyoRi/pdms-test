import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white01: string;
      white02: string;
      navy: string;
      gray01: string;
      gray02: string;
      black: string;
    };
    mixin: {
      flex: (align?: string, justify?: string) => string;
    };
  }
}