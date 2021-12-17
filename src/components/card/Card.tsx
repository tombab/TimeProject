import './Card.scss'


function Card(props:any) {
    return (
        <div className='border'>
            {console.log(props.image)}
            <img src={props.image} alt="" />
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
    )
}

export default Card
