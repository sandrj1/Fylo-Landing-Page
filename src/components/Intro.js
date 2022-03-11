import introImg from '../images/illustration-intro.png';

const Intro = () => {
    const intro = `
        <img src=${introImg} alt=''
        data-aos='zoom-out'>
        <div class='intro__content'>
            <div class='intro__content--box'>
                <h1
                data-aos='fade-up'>All your files in one secure location, accessible anywhere.</h1>
                <p
                data-aos='fade-up'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                <a href='#'
                data-aos='fade-up'>Get Started</a>
            </div>
        </div>

    `;
    return intro;
}

export default Intro;