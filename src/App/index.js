import React from 'react'
import Header from '../Component/Header'
import { Grid } from 'sematic-ui-react'
import images  from '../Component/Header/foto.png'

const styles = {
        parents: {
            position: 'relative'
    },
    child: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    footer: {
        fontsize: "1.2em"
    }
}

class App extends React.Component {
    render(){
        return (
            <div style={styles.position}>
                <div style={styles.child}>
                <Grid centered>
                <Grid.Row>
                    <Grid.colomn mobile={16} tablet={8} computer={4}>
                        <img src={images} alt="imgs"/>
                    </Grid.colomn>
                </Grid.Row>
                <Grid.Row>
                <Grid.Column mobile={16} tablet={8} computer={4}>
                <Headers/>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid columns='equal' style={styles.footers}>
                    <Grid.Column><a className="text-dark" href="https://www.linkedin.com/in/raymondleons/" target="_blank" rel="noopener noreferrer">LinkedIn</a></Grid.Column>
                    <Grid.Column><a className="text-dark" href="https://merahlabs.id/resume" target="_blank" rel="noopener noreferrer"> Resume </a> </Grid.Column>
                    </Grid>
                </Grid.Row>
                </Grid>                
                </div>
            </div>
        )
    }
}

export default App 