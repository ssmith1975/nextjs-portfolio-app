type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto lg:max-w-screen-lg 2xl:max-w-screen-2xl px-5">{children}</div>
  );
};

export default Container;
