import './About.css';

function About() {
    return (
        <div className='about-container'>
            <div className='about-content'>
                <div className="about-image">
                <img  src='/images/rocking.jpg'/>
                </div>
                <div className='meet-container'>
                    <h1 className='about-heading'>Meet</h1>
                    <div className='about-paragraph-container'>
                    <p>
                        My name is Mrs. Ally Drummond. I am a wife, 
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
                        click here.
                     </p>
                     </div>
                </div>
                
            </div>
        </div>
    )
}

export default About;