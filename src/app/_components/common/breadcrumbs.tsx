// components/Breadcrumbs.js
'useClient';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  //const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((s) => s); // Filter empty strings

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const label =
      segment.charAt(0).toUpperCase() +
      segment.slice(1).replace(/-/g, ' '); // Basic formatting

    return { href, label };
  });

  return (
    <nav className="mb-4 text-sm text-gray-700">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-orange-500 hover:underline">
            Home
          </Link>
        </li>
        {breadcrumbItems.map((item, index) => (
          <li
            key={item.href}
            className="flex items-center"
            style={{ textTransform: 'capitalize' }}
          >
            <span className="mx-2">/</span>
            {index < breadcrumbItems.length - 1 ? (
              <Link
                href={item.href}
                className="text-orange-500 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
