import Image from 'next/image';

type Props = {
  name: string;
  picture: string;
  width?: number;
  height?: number;
};

const Icon = ({ name, picture, width, height }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        className="mr-5 h-12 w-12"
        alt={name}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Icon;
