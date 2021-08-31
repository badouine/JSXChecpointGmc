import React, {Component} from 'react';
import Picture from './Picture';

class Photo extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{border:'solid 1px black', maxWidth:'100vw',fontFamily:'Arial'}}>
                    <h1 className="title red">Your name here</h1>

                <>
                    <Picture/>
                </>
                <>
                    <img src="../public/images/imageInPublic.jpg" width={570} height={400} alt=""/>
                </>
                </div>
               
            </React.Fragment>
        );
    }
}

export default Photo;