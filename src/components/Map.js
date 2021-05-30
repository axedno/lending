import React from 'react';
import map from '../images/map.png'

const Map = () => {
    return (
        <section className='map'>
            <div className='map__text'>
                <h2 className='map__title'><span className='map__titleBlock'>Obtaining a Residence Permit </span><br/>
                    in Europe</h2>
                <p className='map__question'> <span className='map__questionBlock'>The answer to the question "Where can I obtain a residence permit most easily?"</span>
                    depends on multiple factors: expenses, time spent, trust of the authorities,
                    conditions for obtaining, income from investments, and prospects of obtaining a second citizenship.
                    The standard of living in the country is of importance too as well as whether it's easy to adapt to
                    this particular country.</p>
                <div className='map__paragraphBlock'>
                    <div className='map__colorBlock'></div>
                    <p className='map__paragraph'>There are absolutely legal, affordable, and in some countries cheap, ways to get a residence permit in Europe.
                        It's up to each to decide where the procedure is the easiest and cheapest, depending on their own goals
                        and resources.
                        Countries that offer to obtain a residence permit for real estate investments are a win-win option.</p>
                </div>
                <p className='map__conclusion'>It's also worth remembering that, because of the easy movement within Europe it provides, <span className='map__conclusionBlock'>obtaining a
                    residence permit in the Schengen Area </span><span className='map__conclusionBlockTwo'>is the best option</span> .</p>
            </div>
            <img className='map__img' src={map} alt="map"/>

        </section>
    );
};

export default Map;