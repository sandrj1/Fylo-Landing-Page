import logo from '../images/logo.svg';

const Header = () => {
    const header = `
        <img src=${logo} alt=''
        data-aos='fade-up'>
        <nav
        data-aos='fade-up'>
            <a href='#features'>Features</a>
            <a href='#about'>Team</a>
            <a href='#signup'>Sign In</a>
        </nav>
    `;
    return header;
}

export default Header;