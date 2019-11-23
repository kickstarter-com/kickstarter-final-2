import React from 'react';
import './OneTopic.css';

class OneTopic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        var num =Math.floor(Math.random() * 11)
        return ( 
                <div>
                   <div className="second-section">                      
                       <div className="second-section-img-div">
                           <img alt="sorry" src={this.props.article.length?this.props.article[num].projectImg:null}></img>
                       </div>
                       <div className="second-section-link-div">
                           <a href={"https://proxy-kikstarter.herokuapp.com/?id="+num}>
                               <h3>{this.props.article.length?this.props.article[num].projectName:null}</h3>
                               <p>{this.props.article.length?this.props.article[num].projectTeazer:null}</p>
                           </a>
                       </div>
                   </div>
                </div> 
                );
    }
}

export default OneTopic;