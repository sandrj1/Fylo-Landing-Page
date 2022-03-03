import logo from '../images/logo.svg';

const Header = () => {
    const header = `
        <img src=${logo} alt=''>
        <nav>
            <a href='#'>Features</a>
            <a href='#'>Team</a>
            <a href='#'>Sign In</a>
        </nav>
    `;
    return header;
}

export default Header;