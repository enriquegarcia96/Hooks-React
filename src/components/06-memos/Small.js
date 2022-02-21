import React, {memo} from 'react'


/*
    para memorizar el componente, solo 
    se va a disparar si las props han cambiado
*/
export const Small = memo(( {value} ) => {

    console.log('  me volvi a llamar :( ')

  return (
    <small>
        {value}
    </small>
  )
})
