type CSSVariables = {
  [key: `--${string}`]: string | undefined;
};

type StyleWithVars = React.CSSProperties & CSSVariables;

export { type StyleWithVars };
