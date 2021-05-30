import React from 'react';
import ribbon from '../../images/ribbon.png'
import ribbonWhite from '../../images/ribbonWhite.png'

const BlockOne = () => {
    return (
        <div className='blockOne'>
          <h3 className='blockOne__title'><span className='blockOne__titleBlock'>Why invest</span>  in real estate?</h3>
            <div className='blockOne__textRibbonDescr'>
                <div className='blockOne__ribbonDescr'>
                    <div className='blockOne__whiteBlock'>
                        <img className='blockOne__ribbon' src={ribbon} alt="ribbon"/>
                        <p className='blockOne__reason'>High profitability</p>
                    </div>
                    <div className='blockOne__defaultBlock'>
                        <img className='blockOne__ribbon' src={ribbon} alt="ribbon"/>
                        <p className='blockOne__reason'>Preservation of value</p>
                    </div>
                    <div className='blockOne__defaultBlock'>
                        <img className='blockOne__ribbon' src={ribbon} alt="ribbon"/>
                        <p className='blockOne__reason'>Low volatility</p>
                    </div>
                    <div className='blockOne__defaultBlock'>
                        <img className='blockOne__ribbon' src={ribbon} alt="ribbon"/>
                        <p className='blockOne__reason'>Optimization of income tax</p>
                    </div>
                    <div className='blockOne__defaultBlock'>
                        <img className='blockOne__ribbon' src={ribbon} alt="ribbon"/>
                        <p className='blockOne__reason'>Protection against inflation</p>
                    </div>
                    <div className='blockOne__colorBlock'>
                        <img className='blockOne__ribbon' src={ribbonWhite} alt="ribbon"/>
                        <p className='blockOne__reasonWhite'>Possibillity of price Increase</p>
                    </div>
                    <div className='blockOne__defaultBlock'>
                        <img className='blockOne__ribbon' src={ribbon} alt="ribbon"/>
                        <p className='blockOne__reason'>Cash flows</p>
                    </div>
                    <div className='blockOne__defaultBlock'>
                        <img className='blockOne__ribbon' src={ribbon} alt="ribbon"/>
                        <p className='blockOne__reason'>Use of leverage</p>
                    </div>
                </div>
                <div className='blockOne__textBlock'>
                    <p className='blockOne__text'>Normally, real estate follows inflation.
                        Standard lease agreements provide for annual indexation, which may be expressed as a fixed percentage or equal to the consumer price index.
                        When selling apartments, the price, with stable demand, grows with inflation.</p>
                </div>


            </div>
        </div>
    );
};

export default BlockOne;