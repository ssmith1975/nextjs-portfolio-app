import Image from 'next/image';

type Props = {
  name: string;
  picture: string;
  width?: number;
  height?: number;
};

const Avatar = ({ name, picture, width, height }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        className="mr-4 h-12 w-12 rounded-full"
        alt={name}
        width={width}
        height={height}
      />
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
