import React , {Component} from 'react';


class Welcome extends Component {

    render(){
        return (
            <div>
                <div>
                      <div>Hello {this.props.name}</div>  
                </div>
               
            </div>
        )
    }


}

export default Welcome;