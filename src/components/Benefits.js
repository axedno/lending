import React from 'react';
import cards from '../images/cards.png'
import correct_copy_5 from '../images/correct_copy_5.png'
import placeholderBlack from '../images/placeholderBlack.png'
import placeholderColor from '../images/placeholderColor.png'
import Hungary from  '../images/Hungary.png'



const Benefits = () => {
    return (
        <section className='benefits'>
            <div className='benefits__blockOne'>
                <img className='benefits__imgTitle' src={cards} alt="cards"/>
                <div className='benefits__blockOneText'>
                    <p className='benefits__title'>Many people wish to know how to obtain a residence permit in Europe. There are many reasons for this:</p>
                    <div className='benefits__imgText'>
                        <img className='benefits__img' src={correct_copy_5} alt="correct_copy_5"/>
                        <p className='benefits__reason'>transfer of business to a stable economic zone;</p>
                    </div>
                    <div className='benefits__imgText'>
                        <img className='benefits__img' src={correct_copy_5} alt="correct_copy_5"/>
                        <p className='benefits__reason'>obtaining loans at low interest rates;</p>
                    </div>
                    <div className='benefits__imgText'>
                        <img className='benefits__img' src={correct_copy_5} alt="correct_copy_5"/>
                        <p className='benefits__reason'>opening accounts with reliable banks;</p>
                    </div>
                    <div className='benefits__imgText'>
                        <img className='benefits__img' src={correct_copy_5} alt="correct_copy_5"/>
                        <p className='benefits__reason'>guaranteed security of personal assets;</p>
                    </div>
                    <div className='benefits__imgText'>
                        <img className='benefits__img' src={correct_copy_5} alt="correct_copy_5"/>
                        <p className='benefits__reason'>the ability to move around Europe without visas;</p>
                    </div>
                    <div className='benefits__imgText'>
                        <img className='benefits__img' src={correct_copy_5} alt="correct_copy_5"/>
                        <p className='benefits__reason'>availability of high-quality medical services;</p>
                    </div>
                    <div className='benefits__imgText'>
                        <img className='benefits__img' src={correct_copy_5} alt="correct_copy_5"/>
                        <p className='benefits__reason'>the opportunity to provide children with education at the
                            best universities.</p>
                    </div>
                </div>

            </div>
            <div className='benefits__blockTwo'>
                <h2 className='benefits__mainTitle'> <span className='benefits__mainTitleBlock'>Benefits of a residence <br/>
                    permit</span>  in Europe</h2>
                <p className='benefits__text'>For some, however, it's even more: they perceive obtaining a residence permit
                    in the European Union as the first step to obtaining permanent residence and European citizenship.</p>
                <div className='benefits__cardLocationCountry'>
                        <div>
                            <p className='benefits__parts'>Some of the possible jurisdictions: </p>
                            <div className='benefits__locationCountry'>
                                <img className='benefits__location' src={placeholderBlack} alt="location"/>
                                <p className='benefits__country'>Bulgaria</p>
                            </div>
                            <div className='benefits__locationCountry'>
                                <img className='benefits__locationColor' src={placeholderColor} alt="location"/>
                                <p className='benefits__countryColor'>Hungary</p>
                            </div>
                            <div className='benefits__locationCountry'>
                                <img className='benefits__location' src={placeholderBlack} alt="location"/>
                                <p className='benefits__country'>Spain</p>
                            </div>
                            <div className='benefits__locationCountry'>
                                <img className='benefits__location' src={placeholderBlack} alt="location"/>
                                <p className='benefits__country'>Cyprus</p>
                            </div>
                            <div className='benefits__locationCountry'>
                                <img className='benefits__location' src={placeholderBlack} alt="location"/>
                                <p className='benefits__country'>Latvia</p>
                            </div>
                            <div className='benefits__locationCountry'>
                                <img className='benefits__location' src={placeholderBlack} alt="location"/>
                                <p className='benefits__country'>Portugal</p>
                            </div>
                        </div>
                       <img className='benefits__hungary' src={Hungary} alt="Hungary"/>
                    </div>

                </div>


        </section>
    );
};

export default Benefits;