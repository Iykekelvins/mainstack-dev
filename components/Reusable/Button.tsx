type ButtonProps = {
  background: "white" | "pink" | "black" | "transparent";
} & React.ComponentProps<"button">;

const Button = ({ background, children, ...rest }: ButtonProps) => {
  return (
    <button className={`btn btn--${background}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
