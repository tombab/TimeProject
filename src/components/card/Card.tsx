import './Card.scss'
import ellipse from '../../assets/ellipse.svg'

function Card(props:any) {
    return (
        <div className='cardContainer'>
            <p className='enteteContainer'></p>
            <div className='textContainer'>
                <div className='current'>
                    <div>{props.title}</div>
                    <div className='currentHours'>
                        {props.selection === 'daily'? (
                            <p>{props.timeframes.daily.current}hrs</p>
                        ) : props.selection === 'weekly'? (
                            <p>{props.timeframes.weekly.current}hrs</p>
                        ) : (
                            <p>{props.timeframes.monthly.current}hrs</p>
                        )
                        
                        }
                    </div>
                </div>
                <div className='previous'>
                    <img src={ellipse} alt="options" id='ellipse'/>
                    <div>
                        <div>{props.selection === 'daily'? (
                            <p>Last Week - {props.timeframes.daily.previous}hrs</p>
                        ) : props.selection === 'weekly'? (
                            <p>Last Week - {props.timeframes.weekly.previous}hrs</p>
                        ) : (
                            <p>Last Week - {props.timeframes.monthly.previous}hrs</p>
                        )
                        
                        }</div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
