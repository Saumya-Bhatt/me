import me from '../../images/me.png';

export default function Footer(props) {

    return (
        <div 
            className="main-footer-links"
        >
            {/* <img 
                src={me} 
                alt="Saumya Bhatt" 
                className='main-footer-img' 
            /> */}
            {
                props.socialsData.map((item) => {
                    return (
                        <div 
                            key={item.name}
                            className="main-footer-item"
                        >
                            <img 
                                src={item.icon} 
                                alt={item.name} 
                                className="social-img"
                            />
                            <a 
                                href={item.link}
                                rel='noreferrer'
                                target='_blank'>
                                {item.name}
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}
