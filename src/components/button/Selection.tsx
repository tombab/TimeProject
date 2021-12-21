

import './Selection.scss'

function Selection(props: any) {
  
  return (
    <>
      <button className='button' onClick={props.setTime} value={props.value}>{props.value}</button>
    </>
  )
}

export default Selection
