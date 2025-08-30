type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto max-w-screen-lg px-5">{children}</div>
  );
};

export default Container;
