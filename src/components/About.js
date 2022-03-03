import productiveImg from '../images/illustration-stay-productive.png';
import arrowIcon from '../images/icon-arrow.svg';

const About = () => {
    const about = `
        <img src=${productiveImg} alt=''>
        <article>
            <h2>Stay productive, wherever you are</h2>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            <div class='about__link'>
                <a href='#'>See how Fylo works</a>
                <img src=${arrowIcon} alt=''>
            </div>
        </article>
    `
    return about;
}

export default About;