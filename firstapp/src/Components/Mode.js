import React, {useState} from 'react'


export default function Mode(props) {

    // useStateSnippet
    const [myStyle, setMyStyle] = useState({
        color: 'dark ',
        background: 'white'
    })

    const toggleStyle=()=>{
        if(myStyle.color === 'white'){
            setMyStyle({
                color: 'black ',
                background: 'white'
            })
        }
        else{
            setMyStyle({
                color:'white',
                background: 'black '
            })
        }

    }



  return (
    <>
  
    <div >
        <hr/>
    <div className="container" style={{color: props.mode ==='dark' ? 'white' : 'black' }} >
        <h3>About This Site</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio suscipit voluptates iusto. Nesciunt aliquid perspiciatis similique distinctio odit, ullam accusantium animi, iusto quos, id eum perferendis molestiae tempore laboriosam exercitationem.</p>
    </div>
    </div>
    </>
  )
}
