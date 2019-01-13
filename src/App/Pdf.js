import React from 'react'
import resume from './resume.pdf'

class Pdf extends React.Component{
    render(){
        return(
            <div>
                <embed src={resume} width="100%" height="800px"/>
            </div>
        )
    }
}

export default Pdf