import logo from '../images/logo.svg';

const Footer = () => {
    const footer = `
        <img src=${logo} alt=''>
        <div class='info'>
            <div class='info__position'>
                <i class='fa-solid fa-location-dot fa-lg'></i>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
            <div class='info__contact'>
                <div class='info__contact--phone fa-lg'>
                    <i class='fa-solid fa-phone'></i>
                    <p>+1-543-123-4567</p>
                </div>
                <div class='info__contact--email fa-lg'>
                    <i class='fa-solid fa-envelope'></i>
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
                <a href='https://www.facebook.com/' target='_blank'>
                <i class='fa-brands fa-facebook-f'></i>
                </a>
                <a href='https://www.twitter.com/' target='_blank'>
                <i class='fa-brands fa-twitter'></i>
                </a>
                <a href='https://www.instagram.com/' target='_blank'>
                <i class='fa-brands fa-instagram'></i>
                </a>
            </div>
        </div>
    `
    return footer;
}

export default Footer;