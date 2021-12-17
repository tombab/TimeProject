import './Card.scss'

function Card(props:any) {
    return (
        <div className='cardContainer'>
            <p className='enteteContainer'></p>
            <div className='textContainer'>
                <div>
                    <div>{props.title}</div>
                    <div>
                        {props.timeframes === 'daily'? (
                            <div>{props.timeframes.daily.current}{props.timeframes.daily.previous}</div>
                        ) : props.timeframes === 'weekly'? (
                            <div>{props.timeframes.weekly.current}{props.timeframes.weekly.previous}</div>
                        ) : (
                            <div>{props.timeframes.monthly.current}{props.timeframes.monthly.previous}</div>
                        )
                        
                        }
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Card
