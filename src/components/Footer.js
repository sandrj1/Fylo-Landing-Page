import logo from '../images/logo.svg';

const Footer = () => {
    const footer = `
        <img src=${logo} alt=''>
        <div class='info'>
            <div class='info__position'>
                POSITION ICON
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div class='info__contact'>
                <div class='info__contact--phone'>
                    PHONE ICON
                    <p>+1-543-123-4567</p>
                </div>
                <div class='info__contact--email'>
                    EMAIL ICON
                    <p>example@fylo.com</p>
                </div>
            </div>
            <div class='info__links--about'>
                <a href='#'>About Us</a>
                <a href='#'>Jobs</a>
                <a href='#'>Press</a>
                <a href='#'>Blog</a>
            </div>
            <div class='info__links--terms'>
                <a href='#'>Contact Us</a>
                <a href='#'>Terms</a>
                <a href='#'>Privacy</a>
            </div>
            <div class='info__links--social'>
                <a href='#'>FB ICON</a>
                <a href='#'>TWITTER ICON</a>
                <a href='#'>IG ICON</a>
            </div>
        </div>
    `
    return footer;
}

export default Footer;