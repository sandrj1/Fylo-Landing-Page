const Signup = () => {
    const signup = `
        <div class='signup__container'>
            <h2
            data-aos='zoom-in'
            data-aos-anchor-placement='bottom-top'>Get early access today</h2>
            <p
            data-aos='zoom-in'
            data-aos-anchor-placement='bottom-top'>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <form name='form' action='#' novalidate
            data-aos='zoom-in'
            data-aos-anchor-placement='bottom-top'>
                <div class='email__container'>
                    <input type='email' id='email' name='email' placeholder='email@example.com'>
                    <p></p>
                </div>
                <input type='submit' id='submit' value='Get Started For Free'>
            </form>
        </div>
    `;

    return signup;
}

export default Signup;