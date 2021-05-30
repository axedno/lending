import React from 'react';
import skyline from '../images/skyline.png'
import mortgage from '../images/mortgage.png'
import placeholder1 from '../images/placeholder1.5x.png'

const HowUse = () => {
    return (
        <section className='howUse'>
            <h2 className='howUse__title'> <span className='howUse__titleBlock'>How one can use</span>  commercial real estate?</h2>
            <h3 className='howUse__subTitle'>Commercial real estate is used to make a profit. To this end, real estate can be:</h3>
            <div className='howUse__blocks'>
                <div className='howUse__imgTitleText'>
                    <img  className='howUse__img' src={skyline} alt="skyline"/>
                    <h4 className='howUse__smallTitle'>Organized for your
                        own enterprise </h4>
                    <p className='howUse__text'>By enterprise, not only production of goods is meant but also any other kind of business. This option is suitable for owners who have a well-thought-out business plan and a desire to
                        conduct extensive business activities. Your own premises help you save funds and channel them to business development.</p>
                </div>
                <div className='howUse__imgTitleText'>
                    <img  className='howUse__img' src={mortgage} alt="mortgage"/>
                    <h4 className='howUse__smallTitle'>Rented out </h4>
                    <p className='howUse__text'>If you own a commercial space, you can rent it out to other entrepreneurs and receive passive income. After paying taxes on renting out your real estate, you will obtain net profit without any additional capital or labor investments. You can compensate for the wear and
                        tear of the premises at the expense of the lessee by specifying this condition in the agreement.</p>
                </div>
                <div className='howUse__imgTitleText'>
                    <img  className='howUse__img' src={placeholder1} alt="placeholder"/>
                    <h4 className='howUse__smallTitle'>Resold</h4>
                    <p className='howUse__text'>If you buy a real estate object in bad condition,
                        for example, without repair, you may improve it and resell it at a more favorable price.</p>
                </div>
            </div>

            <div className='howUse__finalText'>In some cases, it is inadvisable to manage commercial type objects on your own, for example, if the owner doesn't have the necessary skills, information, or time. To increase the profitability of your investment, you can sign a contract with a company that provides commercial real estate brokerage services. In the course of the transaction, the owner transfers
                the property to third parties who will do their best to increase the profitability of the real estate object.</div>

        </section>
    );
};

export default HowUse;