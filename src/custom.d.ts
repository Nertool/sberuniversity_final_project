/// <reference types="vite/client" />

declare module '*.svg' {
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
declare module '*.svg?react' {
  import { FunctionComponent, SVGProps } from 'react';

  const component: FunctionComponent<SVGProps<SVGSVGElement>>;
  export default component;
}
declare module '*.png' {
  const content: unknown;
  export default content;
}
declare module '*.jpg' {
  const content: unknown;
  export default content;
}
declare module '*.json' {
  const content: unknown;
  export default content;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
