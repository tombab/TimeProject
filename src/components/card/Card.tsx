import { ReactEventHandler, useState } from 'react';
import './Card.scss'
import ellipse from '../../assets/ellipse.svg'
import { timeframesProp } from '../../data/data';

function Card({
    title, 
    timeframes, 
    selection, 
    setCardTime} : 
    { 
    title : string, 
    timeframes : timeframesProp,
    selection : string, 
    setCardTime : ReactEventHandler}) 
    {

    //permet de définir le toggle pour l'ellipse
    const [isOpen, setIsOpen] = useState<boolean>(false)

    let className : string = 'optionEllipse';
        if(isOpen === true)className += ' buttonActif';

    return (
        <div className='cardContainer'>
            <p className='enteteContainer'></p>
            <div className='textContainer'>
                <span className='setCardTimeClicker' onClick={setCardTime}></span>
                <div className='title'>
                    {title}
                </div>
                <div className='ellipsis' onClick={() => setIsOpen(!isOpen)}>
                    <img src={ellipse} alt="options" id='ellipse' />
                    <span className={className}>Inserez ici les options que vous désirez</span>
                </div>
                
                {/* affiche les current hours en fonction du click dans le bouton du header */}
                <div className='currentHours'>
                        {selection === 'Daily' ? (
                            <p>{timeframes.daily.current}hrs</p>
                        ) : selection === 'Weekly' ? (
                            <p>{timeframes.weekly.current}hrs</p>
                        ) : (
                            <p>{timeframes.monthly.current}hrs</p>
                        )
                        }
                </div>

                {/* affiche les previous hours en fonction du click dans le bouton du header*/}
                <div className='previousHours'>
                    <div>{selection === 'Daily' ? (
                        <p>Last Week - {timeframes.daily.previous}hrs</p>
                    ) : selection === 'Weekly' ? (
                        <p>Last Week - {timeframes.weekly.previous}hrs</p>
                    ) : (
                        <p>Last Week - {timeframes.monthly.previous}hrs</p>
                    )

                    }</div>
                </div>
            </div>
        </div>
    )
}

export default Card
