import React from 'react'
import "./Navbar.css"

class Navbar extends React.Component {
  listener = null;
  state = {
    nav:false
  }
  componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
   }
   componentWillUnmount() {
      window.removeEventListener('scroll');
    }
   handleScroll= () => {
     if (window.pageYOffset > 977) {
         if(!this.state.nav){
           this.setState({ nav: true });
         }
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
         }
     }

   }

  render(){
  return (
    <div>
      <div className={`Nav ${this.state.nav && 'Nav__black'}`}>
          <div className="navbar">
            <div className="links">
              <div><a style={{color:'#E94C72'}} href="" className="home">HOME</a></div>
              <div><a href="/CardList" className="about">ABOUT</a></div>
              <div><a href="" className="portfolio">PORTFOLIO</a></div>
              <div><a href="" className="contact">CONTACT</a></div>
          </div>
          {/* <div className="opacity"></div> */}
            {/* <div className="line"></div> */}
        </div>
      </div>
    </div>
  );}
}
export default Navbar
