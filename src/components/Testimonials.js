import quotesImg from '../images/bg-quotes.png';
import profile1 from '../images/profile-1.jpg';
import profile2 from '../images/profile-2.jpg';
import profile3 from '../images/profile-3.jpg';

const testimonialsData = [
    {
        'image': profile1,
        'name': 'Satish Patel',
        'order': 'first-card'
    },
    {
        'image': profile2,
        'name': 'Bruce McKenzie',
        'order': 'second-card'
    },
    {
        'image': profile3,
        'name': 'Iva Boyd',
        'order': 'last-card'
    }
];

const Testimonials = () => {
    const testimonialsCards = testimonialsData.map(item => {
        const testimonialsCard = `
                <div class='testimonials__card' id=${item.order}
                data-aos='fade-up'
                ${item.order === 'first-card'
                ? 'data-aos-offset= "400"'
                : 'data-aos-offset= "450"'}>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div class='testimonials__profile'>
                        <img src=${item.image} alt=''>
                        <div class='testimonials__profile--description'>
                            <h3>${item.name}</h3>
                            <p>Founder & CEO, Huddle</p>
                        </div>
                    </div>
                </div>
            `;
        return testimonialsCard;
    }).join('');
    
    const testimonials = `
        <img src=${quotesImg} alt=''
        data-aos='fade-up'
        data-aos-offset='450'>
        <div class='testimonials__cards'>${testimonialsCards}</div>
    `
    return testimonials
}

export default Testimonials;