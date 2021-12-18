

import './Selection.scss'

function Selection(props: any) {
  
  return (
    <>
      <button className='button' onClick={props.setTime}>{props.value}</button>
    </>
  )
}

export default Selection
