import Footer from "./Footer"

export default function Home(props) {
    return (
        <div className='about'>
                <div className="main-heading">
                    <div className="main-heading-typed">
                        Hey, I'm Saumya ;)
                    </div>
                </div>
                <p className="main-subheading">
                    Backend Software Engineer
                </p>
                <div className="main-subtext">
                    I am a BITS Pilani graduate and love to build robust and scalable applications. Being a film enthusiast, I often write reviews on my blog site <a 
                        rel='noreferrer' 
                        target='_blank' 
                        href="http://mbts.studio" 
                        className="main-mbts">
                        Movies By The Sea.
                    </a> 
                    <br />
                    In my free time, I love to watch football and play badminton or scroll through cat reels on Instagram :)
                </div>
                <div className="main-navigation">
                        <a href="#Experience">01 - Experience</a>
                        <a href="#Projects">02 - Projects</a>
                        <a href="#Skills">03 - Skills</a>
                        <a href="#Resources">04 - Resources</a>
                    </div>
                <br />
                <br />
                <br />
            <Footer socialsData={props.socialsData} />
        </div>
    )
}