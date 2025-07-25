import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      navy: string;
      gray: string;
    };
    mixin: {
      flex: (align?: string, justify?: string) => string;
    };
  }
}