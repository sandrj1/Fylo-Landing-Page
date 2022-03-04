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
    header.innerHTML = Header();
    intro.innerHTML = Intro();
    features.innerHTML = Features();
    about.innerHTML = About();
    testimonials.innerHTML = Testimonials();
    signup.innerHTML = Signup();
    footer.innerHTML = Footer();
})