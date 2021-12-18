import './Header.scss'
import profilPicture from '../../assets/image-jeremy.png'
import Selection from '../button/Selection'

function Header(props:any) {
    const value:any = {
        daily: 'Daily',
        monthly : 'Monthly',
        weekly: 'Weekly'
      }

    return (
        <div className='header'>
            
           <div className='profilEntete'>
               <img src={profilPicture} alt="profil" />
               <div>
                 <p>Report for</p>
                 <h3>Jeremy Robson</h3>
               </div> 
           </div>
           <div className='selection'>
            <Selection setTime={props.setTime} value={value.daily} />
            <Selection setTime={props.setTime} value={value.weekly}/>
            <Selection setTime={props.setTime} value={value.monthly}/>
           </div>
        </div>
    )
}

export default Header
