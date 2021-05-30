import React from 'react';
import cubeBigAll from '../../images/cubeBigAll.png'
import home from '../../images/home.png'

const BlockThree = () => {
    return (
        <section className='blockThree'>
            <img className='blockThree__img' src={cubeBigAll} alt="cubeBigAll"/>
            <div className='blockThree__titleTextImg'>
                <h3 className='blockThree__title'> <span className='blockThree__titleBlock'>Commercial</span>  <br/>
                    real estate</h3>
                <p className='blockThree__textMain'> <span className='blockThree__textMainBlock'>Commercial real estate objects are</span>  premises, buildings, structures, and sites that are intended for generating a profit by renting out or conducting business activities directly by the owner. Either a legal entity or an individual can
                    own a commercial real estate object. Profitability of commercial real estate is the main criterion of its evaluation.</p>
                <div className='blockThree__homeImg_text'>
                    <img className='blockThree__homeImg' src={home} alt="home"/>
                    <p className='blockThree__text'> <span className='blockThree__textBlock'>Commercial real estate for retail trade.</span>  <br/>Shopping and entertainment
                        centers, stores, pharmacies, car dealerships. That is, everything that is associated with retail sale.</p>
                </div>
                <div className='blockThree__homeImg_text'>
                    <img className='blockThree__homeImg' src={home} alt="home"/>
                    <p className='blockThree__text'> <span className='blockThree__textBlock'>Industrial commercial real estate.</span>Production areas of plants and enterprises as well as warehouses belong to this group.</p>
                </div>
                <div className='blockThree__homeImg_text'>
                    <img className='blockThree__homeImg' src={home} alt="home"/>
                    <p className='blockThree__text'> <span className='blockThree__textBlock'>Commercial office real estate. </span><br/>Commercial office real estate. The most demanded kind of real estate at the moment: the market is evolving and new companies are appearing, for which a personal office is a necessity, with renting office space a
                        common form of relations. The huge demand for this type of real estate affects its price. </p>
                </div>
            </div>
        </section>
    );
};

export default BlockThree;