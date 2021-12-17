import './Header.scss'
import profilPicture from '../../assets/image-jeremy.png'
import Selection from '../button/Selection'

function Header(props:any) {
    return (
        <div className='header'>
           <div className='profilEntete'>
               <img src={profilPicture} alt="profil picture" />
               <p>Report for</p>
               <h1>Jeremy Robson</h1>
           </div>
           <div>
            <Selection value={'Daily'}/>
            <Selection value={'Weekly'}/>
            <Selection value={'Monthly'}/>
           </div>
        </div>
    )
}

export default Header
