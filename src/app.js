import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.css';
import Header from './components/Header';
import Intro from './components/Intro';
import Features from './components/Features';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Signup from './components/Signup';
import Footer from './components/Footer';

const header = document.querySelector('header');
const intro = document.querySelector('.intro');
const features = document.querySelector('.features');
const about = document.querySelector('.about');
const testimonials = document.querySelector('.testimonials');
const signup = document.querySelector('.signup');
const footer = document.querySelector('footer');

window.addEventListener('load', () => {
    AOS.init({
        easing: 'ease',
        duration: '2000',
        once: true,
        disable: true,
        anchorPlacement: 'center-bottom'
    });

    header.innerHTML = Header();
    intro.innerHTML = Intro();
    features.innerHTML = Features();
    about.innerHTML = About();
    testimonials.innerHTML = Testimonials();
    signup.innerHTML = Signup();
    footer.innerHTML = Footer();

    const form = document.querySelector('form');
    const email = document.querySelector('#email');
    let validEmail = false;

    email.onkeyup = (e) => {
        let value = e.target.value;
        let at = value.indexOf('@');
        let dot = value.lastIndexOf('.');

        if (
            value.includes('@') &&
            value.includes('.') &&
            !value.startsWith('@') &&
            !value.endsWith('@') &&
            !value.startsWith('.') &&
            !value.endsWith('.') &&
            (dot - at > 2)
        ) {
            validEmail = true;
        } else {
            validEmail = false;
        }
    }

    form.onsubmit = () => {
        if (email.value === '') {
            email.nextElementSibling.innerHTML = 'This field cannot be empty';
            email.nextElementSibling.style.display = 'block'; 
        } else if (!validEmail) {
            email.nextElementSibling.innerHTML = 'Please enter a valid email address';
            email.nextElementSibling.style.display = 'block'; 
        }

        return validEmail;
    }
})