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
                         <img alt="sorry" src="https://ksr-ugc.imgix.net/assets/026/920/261/bc262b06aa26da212fffdb7d0ef589fb_original.png?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1571647553&auto=format&frame=1&q=92&s=05b8ef9e066d9d54f2bced4868115db9"></img>
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
                     <img alt="sorry" src="https://ksr-ugc.imgix.net/assets/026/920/261/bc262b06aa26da212fffdb7d0ef589fb_original.png?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1571647553&auto=format&frame=1&q=92&s=05b8ef9e066d9d54f2bced4868115db9"></img>
                </div>
                <div>
                   <div>
                       <a href="/">Gwelf: The Survival Guide</a>
                   </div>
                   <div>
                       <span className="first-span">125% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY </span><a href="/">Austen Gray</a>
                   </div>
                </div>
            </div>      
                      <div className="slider-unit">
                <div>
                     <img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/153/381/63008927afbbc0ecdd59285111f0dca1_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1573292824&auto=format&frame=1&q=92&s=eedcffa96fdce7f7dac1b16ab6f58fac"></img>
                </div>
                <div>
                   <div>
                       <a href="/">Joker's Republic: Bringing NJ Ska-Punk ON TOUR!</a>
                   </div>
                   <div>
                       <span className="first-span">125% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY</span><a href="/">Austen Gray</a>
                   </div>
                </div>
            </div>
                      <div className="slider-unit">
                <div>
                     <img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/153/381/63008927afbbc0ecdd59285111f0dca1_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1573292824&auto=format&frame=1&q=92&s=eedcffa96fdce7f7dac1b16ab6f58fac"></img>
                </div>
                <div>
                   <div>
                       <a href="/">Joker's Republic: Bringing NJ Ska-Punk ON TOUR!</a>
                   </div>
                   <div>
                       <span className="first-span">125% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY</span><a href="/">Austen Gray</a>
                   </div>
                </div>
            </div>
                      <div className="slider-unit">
                <div>
                     <img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/153/381/63008927afbbc0ecdd59285111f0dca1_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1573292824&auto=format&frame=1&q=92&s=eedcffa96fdce7f7dac1b16ab6f58fac"></img>
                </div>
                <div>
                   <div>
                       <a href="/">Joker's Republic: Bringing NJ Ska-Punk ON TOUR!</a>
                   </div>
                   <div>
                       <span className="first-span">125% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY</span><a href="/">Austen Gray</a>
                   </div>
                </div>
            </div>
                      <div className="slider-unit">
                <div>
                     <img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/153/381/63008927afbbc0ecdd59285111f0dca1_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1573292824&auto=format&frame=1&q=92&s=eedcffa96fdce7f7dac1b16ab6f58fac"></img>
                </div>
                <div>
                   <div>
                       <a href="/">Joker's Republic: Bringing NJ Ska-Punk ON TOUR!</a>
                   </div>
                   <div>
                       <span className="first-span">125% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY</span><a href="/">Austen Gray</a>
                   </div>
                </div>
            </div>
                      <div className="slider-unit">
                <div>
                     <img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/153/381/63008927afbbc0ecdd59285111f0dca1_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1573292824&auto=format&frame=1&q=92&s=eedcffa96fdce7f7dac1b16ab6f58fac"></img>
                </div>
                <div>
                   <div>
                       <a href="/">Joker's Republic: Bringing NJ Ska-Punk ON TOUR!</a>
                   </div>
                   <div>
                       <span className="first-span">125% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY</span><a href="/">Austen Gray</a>
                   </div>
                </div>
            </div>
                      <div className="slider-unit">
                <div>
                     <img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/153/381/63008927afbbc0ecdd59285111f0dca1_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1573292824&auto=format&frame=1&q=92&s=eedcffa96fdce7f7dac1b16ab6f58fac"></img>
                </div>
                <div>
                   <div>
                       <a href="/">Joker's Republic: Bringing NJ Ska-Punk ON TOUR!</a>
                   </div>
                   <div>
                       <span className="first-span">125% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY</span><a href="/">Austen Gray</a>
                   </div>
                </div>
            </div>
                      <div className="slider-unit">
                <div>
                     <img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/153/381/63008927afbbc0ecdd59285111f0dca1_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1573292824&auto=format&frame=1&q=92&s=eedcffa96fdce7f7dac1b16ab6f58fac"></img>
                </div>
                <div>
                   <div>
                       <a href="/">Joker's Republic: Bringing NJ Ska-Punk ON TOUR!</a>
                   </div>
                   <div>
                       <span className="first-span">125% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY</span><a href="/">Austen Gray</a>
                   </div>
                </div>
            </div>
                      <div className="slider-unit">
                <div>
                     <img alt="sorry" src="https://ksr-ugc.imgix.net/assets/027/153/381/63008927afbbc0ecdd59285111f0dca1_original.jpg?ixlib=rb-2.1.0&crop=faces&w=1024&h=576&fit=crop&v=1573292824&auto=format&frame=1&q=92&s=eedcffa96fdce7f7dac1b16ab6f58fac"></img>
                </div>
                <div>
                   <div>
                       <a href="/">Joker's Republic: Bringing NJ Ska-Punk ON TOUR!</a>
                   </div>
                   <div>
                       <span className="first-span">125% funded</span>
                   </div>
                   <div className="by-div">
                       <span>BY</span><a href="/">Austen Gray</a>
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