import React, { Component } from 'react';
import './landing.css';
class Landing extends Component {
    render (){
        return(
            <div>
                <form>
                    <input type="text" name="name" placeholder="Username" />
                    <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Landing;