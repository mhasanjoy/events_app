import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div>
                <div className="top-nav">
                    <Image
                        src={'/images/logo_black.png'}
                        alt="logo"
                        width={50}
                        height={50}
                    />
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/events">Events</Link>
                            </li>
                            <li>
                                <Link href="/about-us">About Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <h1>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
            </div>
        </header>
    );
};

export default Header;
