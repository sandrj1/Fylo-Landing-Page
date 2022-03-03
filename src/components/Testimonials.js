import quotesImg from '../images/bg-quotes.png';
import profile1 from '../images/profile-1.jpg';
import profile2 from '../images/profile-2.jpg';
import profile3 from '../images/profile-3.jpg';

const testimonialsData = [
    {
        'image': profile1,
        'name': 'Satish Patel'
    },
    {
        'image': profile2,
        'name': 'Bruce McKenzie'
    },
    {
        'image': profile3,
        'name': 'Iva Boyd'
    }
]

const Testimonials = () => {
    const testimonialsCards = testimonialsData.map(item => {
        const testimonialsCard = `
                <div class='testimonials__card'>
                    <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                    <div class='testimonials__profile'>
                        <img src=${item.image} alt=''>
                        <h3>${item.name}</h3>
                        <p>Founder & CEO, Huddle</p>
                    </div>
                </div>
            `;
        return testimonialsCard;
    }).join('');
    
    const testimonials = `
        <img src=${quotesImg} alt=''>
        <div class='testimonials__container'>
            ${testimonialsCards}
        </div>
    `
    return testimonials
}

export default Testimonials;