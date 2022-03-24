import React, {useState} from 'react'

export default function Mode() {

    // useStateSnippet
    const [myStyle, setMyStyle] = useState({
        color: 'dark ',
        background: 'white'
    })

    const toggleStyle=()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'dark ',
                background: 'white'
            })
        }
        else{
            setMyStyle({
                color:'white',
                background: 'dark '
            })
        }

    }



  return (
    <>
    <div >
    <div className="container" style={myStyle}>
        <button className="btn btn-dark" style={myStyle} onClick={toggleStyle}>Change mode</button>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio suscipit voluptates iusto. Nesciunt aliquid perspiciatis similique distinctio odit, ullam accusantium animi, iusto quos, id eum perferendis molestiae tempore laboriosam exercitationem.</p>
    </div>
    </div>
    </>
  )
}
