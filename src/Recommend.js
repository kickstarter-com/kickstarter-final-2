  
import React from 'react';
import './Recommend.css';
import Slider from 'infinite-react-carousel';


class Recommend extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         }
    }

    render() { 
        console.log(this.props.article)
        const settings =  {
            arrows: false,
            dots: true,
            rows: 3
        };
        return (
            <div>
                <div className="First-section">
                    <div className="Featured-div">
                     <h6>FEATURED PROJECT</h6>
                      <div>
                         <img alt="sorry" src={this.props.article.length?this.props.article[0].projectImg:null}></img>
                      </div>
                      <div>
                          <div className="mark-div"></div>
                      </div>
                      <a href="https://proxy-kikstarter.herokuapp.com/?id=0" className="topic-link">
                          <h3>{this.props.article.length?this.props.article[0].projectName:null}</h3>
                          <p>{this.props.article.length?this.props.article[0].projectTeazer:null}</p>
                      </a>
                      <div className="by-div">
                       <span>BY </span><a href="/">{this.props.article.length?this.props.article[0].owner:null}</a>
                      </div>
                    </div>
                    <div className="Recommended-dev">
                     <h6>RECOMMENDED</h6>
                     <div>
              <Slider { ...settings } >
               <div className="slider-unit">
                <div>
                     <img alt="sorry" src={this.props.article.length?this.props.article[1].projectImg:null}></img>
                </div>
                <div>
                   <div>
                       <a href="https://proxy-kikstarter.herokuapp.com/?id=1">{this.props.article.length?this.props.article[1].projectName:null}</a>
                   </div>
                   <div>
                       <span className="first-span">{this.props.article.length?this.props.article[1].rate:null}% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY </span><a href="/">{this.props.article.length?this.props.article[1].owner:null}</a>
                   </div>
                </div>
            </div>
               <div className="slider-unit">
                <div>
                     <img alt="sorry" src={this.props.article.length?this.props.article[2].projectImg:null}></img>
                </div>
                <div>
                   <div>
                       <a href="https://proxy-kikstarter.herokuapp.com/?id=2">{this.props.article.length?this.props.article[2].projectName:null}</a>
                   </div>
                   <div>
                       <span className="first-span">{this.props.article.length?this.props.article[2].rate:null}% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY </span><a href="/">{this.props.article.length?this.props.article[2].owner:null}</a>
                   </div>
                </div>
            </div> 
               <div className="slider-unit">
                <div>
                     <img alt="sorry" src={this.props.article.length?this.props.article[3].projectImg:null}></img>
                </div>
                <div>
                   <div>
                       <a href="https://proxy-kikstarter.herokuapp.com/?id=3">{this.props.article.length?this.props.article[3].projectName:null}</a>
                   </div>
                   <div>
                       <span className="first-span">{this.props.article.length?this.props.article[3].rate:null}% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY </span><a href="/">{this.props.article.length?this.props.article[3].owner:null}</a>
                   </div>
                </div>
            </div>  
               <div className="slider-unit">
                <div>
                     <img alt="sorry" src={this.props.article.length?this.props.article[4].projectImg:null}></img>
                </div>
                <div>
                   <div>
                       <a href="https://proxy-kikstarter.herokuapp.com/?id=4">{this.props.article.length?this.props.article[4].projectName:null}</a>
                   </div>
                   <div>
                       <span className="first-span">{this.props.article.length?this.props.article[4].rate:null}% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY </span><a href="/">{this.props.article.length?this.props.article[4].owner:null}</a>
                   </div>
                </div>
            </div> 
               <div className="slider-unit">
                <div>
                     <img alt="sorry" src={this.props.article.length?this.props.article[5].projectImg:null}></img>
                </div>
                <div>
                   <div>
                       <a href="https://proxy-kikstarter.herokuapp.com/?id=5">{this.props.article.length?this.props.article[5].projectName:null}</a>
                   </div>
                   <div>
                       <span className="first-span">{this.props.article.length?this.props.article[5].rate:null}% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY </span><a href="/">{this.props.article.length?this.props.article[5].owner:null}</a>
                   </div>
                </div>
            </div>
               <div className="slider-unit">
                <div>
                     <img alt="sorry" src={this.props.article.length?this.props.article[6].projectImg:null}></img>
                </div>
                <div>
                   <div>
                       <a href="https://proxy-kikstarter.herokuapp.com/?id=6">{this.props.article.length?this.props.article[6].projectName:null}</a>
                   </div>
                   <div>
                       <span className="first-span">{this.props.article.length?this.props.article[6].rate:null}% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY </span><a href="/">{this.props.article.length?this.props.article[6].owner:null}</a>
                   </div>
                </div>
            </div>
               <div className="slider-unit">
                <div>
                     <img alt="sorry" src={this.props.article.length?this.props.article[7].projectImg:null}></img>
                </div>
                <div>
                   <div>
                       <a href="https://proxy-kikstarter.herokuapp.com/?id=7">{this.props.article.length?this.props.article[7].projectName:null}</a>
                   </div>
                   <div>
                       <span className="first-span">{this.props.article.length?this.props.article[7].rate:null}% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY </span><a href="/">{this.props.article.length?this.props.article[7].owner:null}</a>
                   </div>
                </div>
            </div>
               <div className="slider-unit">
                <div>
                     <img alt="sorry" src={this.props.article.length?this.props.article[8].projectImg:null}></img>
                </div>
                <div>
                   <div>
                       <a href="https://proxy-kikstarter.herokuapp.com/?id=8">{this.props.article.length?this.props.article[8].projectName:null}</a>
                   </div>
                   <div>
                       <span className="first-span">{this.props.article.length?this.props.article[8].rate:null}% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY </span><a href="/">{this.props.article.length?this.props.article[8].owner:null}</a>
                   </div>
                </div>
            </div>
               <div className="slider-unit">
                <div>
                     <img alt="sorry" src={this.props.article.length?this.props.article[9].projectImg:null}></img>
                </div>
                <div>
                   <div>
                       <a href="https://proxy-kikstarter.herokuapp.com/?id=9">{this.props.article.length?this.props.article[9].projectName:null}</a>
                   </div>
                   <div>
                       <span className="first-span">{this.props.article.length?this.props.article[9].rate:null}% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY </span><a href="/">{this.props.article.length?this.props.article[9].owner:null}</a>
                   </div>
                </div>
            </div>
            </Slider>
            </div>
          </div>
       </div>
     </div>
        );
    }
}
 
export default Recommend;