
import React from "react";
import Navbar from "./Components/Navbar";
import BandsList from "./Components/BandsList";
import ModalDialog  from "./Components/Modal";


class App extends React.Component{
    
    state = {
        bands : [],
        currendBand: {},
        show : false
    }

    handleClose = ()=>{
        this.setState({show:false})
    }
    handleShow = ()=>{
        this.setState({show:true})
    }

    changeCurrentBand = (band) => {
       this.setState({currendBand:band})
       this.handleShow();
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/Danilovesovic/bands/master/bands_with_id.json')
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            this.setState({bands:data})
        })
    }
    render(){
        return(
            <>
            <Navbar/>
            <BandsList bands={this.state.bands} changeCurrentBand={this.changeCurrentBand}/>
            <ModalDialog show={this.state.show} currendBand={this.state.currendBand} handleClose={this.handleClose}/>
            </>
        )
    }
}

export default App;