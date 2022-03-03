import accessIcon from '../images/icon-access-anywhere.svg';
import securityIcon from '../images/icon-security.svg';
import collaborationIcon from '../images/icon-collaboration.svg';
import storeIcon from '../images/icon-any-file.svg';


const featuresData = [
    {
        'images': accessIcon,
        'title': 'Access your files, anywhere',
        'description': 'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.'
    },
    {
        'images': securityIcon,
        'title': 'Security you can trust',
        'description': '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.'
    },
    {
        'images': collaborationIcon,
        'title': 'Real-time collaboration',
        'description': 'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.'
    },
    {
        'image': storeIcon,
        'title': 'Store any type of file',
        'description': 'Whether you\'re sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.'
    }
]

const Features = () => {
    return (featuresData.map(item => {
        const featuresCard = `
            <article class='features'>
                <img src=${item.image} alt=''>
                <h2>${item.title}</h2>
                <p>${item.description}</p>
            </article>
        `;
        return featuresCard
    })).join('');
}

export default Features;