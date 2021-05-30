import React from 'react';
import secure from '../images/secure.png'
import cards from '../images/cards.png'
import cub from '../images/cub.png'

const Management = () => {
    return (
        <section className='management'>
            <div className='management__blockOne'>
                <h3 className='management__title'>Fiduciary management</h3>
                <p className='management__subTitle'>When buying real estate in another country, you will face a number of new tasks related to the maintenance or service of the purchased apartment or house after the purchase.
               <span className='management__offers'>The ACALISTA company offers</span> its clients the function of fiduciary management of purchased real estate.</p>
                <div className='management__imgText'>
                    <img className='management__img' src={secure} alt="secure"/>
                    <p className='management__text'>We will not just be an intermediary in search of lessees — we will represent your interests in all legal, financial, and economic matters
                        to ensure that your property is in perfect technical condition and brings profit.</p>
                </div>
                <div className='management__imgText'>
                    <img className='management__img' src={secure} alt="secure"/>
                    <p className='management__text'>We will enter into contracts on your behalf with utility companies (electricity, gas, water and sewage, heating). </p>
                </div>
                <div className='management__imgText'>
                    <img className='management__img' src={secure} alt="secure"/>
                    <p className='management__text'>When selecting lessees most carefully since it is essential that the lessee not only pays all bills and rent on time, but also does not spoil or damage the property.</p>
                </div>
                <div className='management__imgText'>
                    <img className='management__img' src={secure} alt="secure"/>
                    <p className='management__text'>We help the owner of the apartment choose the most convenient and optimal way for to pay the rent. We constantly monitor the lessee on a long-term basis.</p>
                </div>
                <div className='management__imgText'>
                    <img className='management__img' src={secure} alt="secure"/>
                    <p className='management__text'>If there are any defects or technical malfunctions, we will solve these issues.</p>
                </div>
                <div className='management__imgText'>
                    <img className='management__img' src={secure} alt="secure"/>
                    <p className='management__text'>If necessary, we will register you as a taxpayer when renting the property, prepare a tax return, and help you to pay this tax correctly.</p>
                </div>
                <div className='management__imgText'>
                    <img className='management__img' src={secure} alt="secure"/>
                    <p className='management__text'>We will solve any legal issues and disputes, if any.</p>
                </div>
                <div className='management__imgText'>
                    <img className='management__img' src={secure} alt="secure"/>
                    <p className='management__text'>We will insure your property in case of unforeseen or force majeure damage.</p>
                </div>
            </div>
            <div className='management__blockTwo'>
                <img className='management__cards' src={cards} alt="cards"/>
                <img className='management__cub' src={cub} alt="cub"/>
            </div>
            
            
        </section>
    );
};

export default Management;