import { useState } from 'react';
import './Card.scss'
import ellipse from '../../assets/ellipse.svg'

function Card(props: string | any) {

    //permet de définir le toggle pour l'ellipse
    const [isOpen, setIsOpen] = useState<boolean>(false)

    let className : string = 'optionEllipse';
        if(isOpen === true)className += ' buttonActif';

    return (
        <div className='cardContainer'>
            <p className='enteteContainer'></p>
            <div className='textContainer'>
                <span className='setCardTimeClicker' onClick={props.setCardTime}></span>
                <div className='title'>
                    {props.title}
                </div>
                <div className='ellipsis' onClick={() => setIsOpen(!isOpen)}>
                    <img src={ellipse} alt="options" id='ellipse' />
                    <span className={className}>Inserez ici les options que vous désirez</span>
                </div>

                {/* affiche les current hours en fonction du click dans le bouton du header */}
                <div className='currentHours'>
                        {props.selection === 'Daily' ? (
                            <p>{props.timeframes.daily.current}hrs</p>
                        ) : props.selection === 'Weekly' ? (
                            <p>{props.timeframes.weekly.current}hrs</p>
                        ) : (
                            <p>{props.timeframes.monthly.current}hrs</p>
                        )
                        }
                </div>

                {/* affiche les previous hours en fonction du click dans le bouton du header*/}
                <div className='previousHours'>
                    <div>{props.selection === 'Daily' ? (
                        <p>Last Week - {props.timeframes.daily.previous}hrs</p>
                    ) : props.selection === 'Weekly' ? (
                        <p>Last Week - {props.timeframes.weekly.previous}hrs</p>
                    ) : (
                        <p>Last Week - {props.timeframes.monthly.previous}hrs</p>
                    )

                    }</div>
                </div>
            </div>
        </div>
    )
}

export default Card
