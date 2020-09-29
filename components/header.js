import Link from 'next/link';

const Header = () => (
  <div className="flex justify-between items-center">
    <div>
      <Link href={'/'}>
        <a>Logo</a>
      </Link>
    </div>
    <div>
      <Link href={'/posts/create'}>
        <a className="text-base bg-blue-600 text-white rounded py-2 px-4 hover:bg-blue-700 transition duration-150">
          Create a new article
        </a>
      </Link>
    </div>
  </div>
);

export default Header;
