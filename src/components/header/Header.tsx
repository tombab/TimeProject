import React, {useState} from 'react';

import './Header.scss'
import profilPicture from '../../assets/image-jeremy.png'


function Header({ setSelection, buttons } : { setSelection:React.Dispatch<React.SetStateAction<string>>, buttons:Array<string>})  {
  // useState qui permet de donner l'id du button qui a été click et y ajoute la classe active
  const [clickedId, setClickedId] = useState<number>(-1);

  //set le state sur la valeur du bouton qui est click et change l'id pour le classname
    const handleClick = (event:React.ChangeEvent<HTMLButtonElement>, id:number):void => {
      setClickedId(id);
      setSelection(event.target.value)
    };
  
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
             {/* map a travers la liste de buttons possible présent dans le header */}
           {buttons.map((buttonName:string, i:number) => (
              <button
                key={i}
                value={buttonName}
                onClick={(event:React.MouseEvent<HTMLElement> ) => handleClick(event as any, i)}
                className={i === clickedId ? "customButton active" : "customButton"}
              >
                {buttonName}
              </button>
            ))}
           </div>
        </div>
    )
}

export default Header
