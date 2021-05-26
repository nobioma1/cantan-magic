interface ButtonProps {
  title: string;
  onClick(): void;
}

const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <button
      className="h-10 px-4 bg-blue-400 text-white hover:bg-blue-500 outline-none"
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
