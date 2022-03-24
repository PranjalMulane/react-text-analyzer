import React, {useState} from 'react'

export default function Mode() {

    const [myStyle, setMyStyle] = useState({
        color: 'white',
        background: 'black'
    })
     
    const toggleStyle=()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black',
                background: 'white'
            })
        }
        else{
            setMyStyle({
                color: 'white',
                background: 'black'
            })  
        }
    }

  return (
    <>
        <div className="container" style={myStyle}>
            <button className="btn btn-primary" style={myStyle} onClick={toggleStyle}>Change mode</button>
        </div>
    </>
  )
}
