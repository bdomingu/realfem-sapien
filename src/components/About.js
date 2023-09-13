import './About.css';

function About() {
    return (
        <section id='about'>
        <div className='about-container'>
            <div className='about-content'>
                <div className="about-image">
                <img  src='/images/rocking.jpg' alt='rocking-baby'/>
                </div>
                <div className='meet-container'>
                    <h1 className='about-heading'>Meet <span className='about-heading-cursive'>Aly</span></h1> 
                    <div className='about-paragraph-container'>
                    <p>
                        My name is Mrs. Aly Drummond. I am a wife, 
                        mother, writer, and social media commentator
                        who finds joy in helping women uncover their own 
                        happiness in their romantic relationships!
                     </p>
                     <p>
                        Once I became a woman, I realized how ill-prepared
                        I was for modern dating and the women who came before 
                        me failed to give me any romantic education.
                     </p>
                     <p>
                        It has now been my mission to go out of my way to 
                        ensure women receive the education I so desperately
                        needed. If you want to learn more about my journey
                        click <a href='https://ladydrummond.substack.com/p/recapturing-western-wifeliness?r=1ga75j&utm_medium=ios&utm_campaign=post'>here</a>.
                     </p>
                     </div>
                </div>
                
            </div>
        </div>
        </section>
    )
}

export default About;