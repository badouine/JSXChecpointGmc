import React, {Component} from 'react';
import Picture from './Picture';
import player from './image/video.mp4'

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
                    <img src="public/images/imageInPublic.jpg" width={570} height={400} alt=""/>
                </>
                </div>

               <video width={320} height={240} controls>
                    <source src={player} type="video/mp4"></source>
               </video>
            </React.Fragment>
        );
    }
}

export default Photo;