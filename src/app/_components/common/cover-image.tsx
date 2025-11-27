import cn from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  src: string;
  path?: string;
  slug?: string;
  width?: number;
  height?: number;
  addedClasses?: string;
};

const CoverImage = ({ title, src, slug, width, height, path = '', addedClasses}: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={`w-full rounded-lg ${addedClasses}` }
      width={width}
      height={height}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`${path}/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
