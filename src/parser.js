import React from 'react';
import ClickToSelect from '@mapbox/react-click-to-select';

export default class Parser extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            flop: '',
            flopCollection: [],
            copy:'Copy'
        }
        this.handleChange = this.handleChange.bind(this);
        this.convertToSymbol = this.convertToSymbol.bind(this);
        this.CopyToClipboard = this.CopyToClipboard.bind(this);
    }
    handleChange(e){
        this.setState({
            flop:e.target.value
        })
    }
    handleClick(e){
        this.divRef.click();
        this.setState({ copy:'Copied!'  })
    }
    Refresh(){
        window.location.reload();
    }
    CopyToClipboard(){
        document.execCommand('copy');
    }
    convertToSymbol(){
        let flop = this.state.flop;
        let flopCollection = [];
        for(let i = 0; i < flop.length; i+=7){
            // flopCollection[0] = flop.slice(0,6);
            // flopCollection[1] = flop.slice(7,13);
            // flopCollection[2] = flop.slice(14,20) 
            // flopCollection[3] = flop.slice(21,27)
            flopCollection[i] = flop.slice(i, i + 6);
        }
        // console.log(flopCollection);

        let FirstHandSelected = [];
        let SecondHandSelected = [];
        let ThirdHandSelected = [];
        let FirstHandConverted = [];
        let SecondHandConverted = [];
        let ThirdHandConverted = [];
        let flopConvertedList = [];
        let FirstColor = [];
        let SecondColor = [];
        let ThirdColor = [];

        // Verify every hand separately
        for(let i = 0; i < flopCollection.length; i+=7){

            let FirstHand = flopCollection[i].slice(0,2);
            let SecondHand = flopCollection[i].slice(2,4);
            let ThirdHand = flopCollection[i].slice(4,6);
            FirstHandSelected[i] = FirstHand;
            SecondHandSelected[i] = SecondHand;
            ThirdHandSelected[i] = ThirdHand;
        
                switch(FirstHandSelected[i]){
                    //Spades
                    case "As":
                        FirstHandConverted[i] = "🂡";
                        FirstColor[i] = "black";
                        break;
                    case "2s":
                        FirstHandConverted[i] = "🂢";
                        FirstColor[i] = "black";
                        break;
                    case "3s":
                        FirstHandConverted[i] = "🂣";
                        FirstColor[i] = "black";
                        break;
                    case "4s":
                        FirstHandConverted[i] = "🂤";
                        FirstColor[i] = "black";
                        break;
                    case "5s":
                        FirstHandConverted[i] = "🂥";
                        FirstColor[i] = "black";
                        break;
                    case "6s":
                        FirstHandConverted[i] = "🂦";
                        FirstColor[i] = "black";
                        break;
                    case "7s":
                        FirstHandConverted[i] = "🂧";
                        FirstColor[i] = "black";
                        break;
                    case "8s":
                        FirstHandConverted[i] = "🂨";
                        FirstColor[i] = "black";
                        break;
                    case "9s":
                        FirstHandConverted[i] = "🂩";
                        FirstColor[i] = "black";
                        break;
                    case "Ts":
                        FirstHandConverted[i] = "🂪";
                        FirstColor[i] = "black";
                        break;
                    case "Js":
                        FirstHandConverted[i] = "🂫";
                        FirstColor[i] = "black";
                        break;
                    case "Qs":
                        FirstHandConverted[i] = "🂭";
                        FirstColor[i] = "black";
                        break;
                    case "Ks":
                        FirstHandConverted[i] = "🂮";
                        FirstColor[i] = "black";
                        break;
                    // Hearts
                    case "Ah":
                        FirstHandConverted[i] = "🂱";
                        FirstColor[i] = "red";
                        break;
                    case "2h":
                        FirstHandConverted[i] = "🂲";
                        FirstColor[i] = "red";
                        break;
                    case "3h":
                        FirstHandConverted[i] = "🂳";
                        FirstColor[i] = "red";
                        break;
                    case "4h":
                        FirstHandConverted[i] = "🂴";
                        FirstColor[i] = "red";
                        break;
                    case "5h":
                        FirstHandConverted[i] = "🂵";
                        FirstColor[i] = "red";
                        break;
                    case "6h":
                        FirstHandConverted[i] = "🂶";
                        FirstColor[i] = "red";
                        break;
                    case "7h":
                        FirstHandConverted[i] = "🂷";
                        FirstColor[i] = "red";
                        break;
                    case "8h":
                        FirstHandConverted[i] = "🂸";
                        FirstColor[i] = "red";
                        break;
                    case "9h":
                        FirstHandConverted[i] = "🂹";
                        FirstColor[i] = "red";
                        break;
                    case "Th":
                        FirstHandConverted[i] = "🂺";
                        FirstColor[i] = "red";
                        break;
                    case "Jh":
                        FirstHandConverted[i] = "🂻";
                        FirstColor[i] = "red";
                        break;
                    case "Qh":
                        FirstHandConverted[i] = "🂽";
                        FirstColor[i] = "red";
                        break;
                    case "Kh":
                        FirstHandConverted[i] = "🂾";
                        FirstColor[i] = "red";
                        break;
                    // Diamonds
                    case "Ad":
                        FirstHandConverted[i] = "🃁";
                        FirstColor[i] = "blue";
                        break;
                    case "2d":
                        FirstHandConverted[i] = "🃂";
                        FirstColor[i] = "blue";
                        break;
                    case "3d":
                        FirstHandConverted[i] = "🃃";
                        FirstColor[i] = "blue";
                        break;
                    case "4d":
                        FirstHandConverted[i] = "🃄";
                        FirstColor[i] = "blue";
                        break;
                    case "5d":
                        FirstHandConverted[i] = "🃅";
                        FirstColor[i] = "blue";
                        break;
                    case "6d":
                        FirstHandConverted[i] = "🃆";
                        FirstColor[i] = "blue";
                        break;
                    case "7d":
                        FirstHandConverted[i] = "🃇";
                        FirstColor[i] = "blue";
                        break;
                    case "8d":
                        FirstHandConverted[i] = "🃈";
                        FirstColor[i] = "blue";
                        break;
                    case "9d":
                        FirstHandConverted[i] = "🃉";
                        FirstColor[i] = "blue";
                        break;
                    case "Td":
                        FirstHandConverted[i] = "🃊";
                        FirstColor[i] = "blue";
                        break;
                    case "Jd":
                        FirstHandConverted[i] = "🃋";
                        FirstColor[i] = "blue";
                        break;
                    case "Qd":
                        FirstHandConverted[i] = "🃍";
                        FirstColor[i] = "blue";
                        break;
                    case "Kd":
                        FirstHandConverted[i] = "🃎";
                        FirstColor[i] = "blue";
                        break;
                    //Clubs 
                    case "Ac":
                        FirstHandConverted[i] = "🃑";
                        FirstColor[i] = "green";
                        break;
                    case "2c":
                        FirstHandConverted[i] = "🃒";
                        FirstColor[i] = "green";
                        break;
                    case "3c":
                        FirstHandConverted[i] = "🃓";
                        FirstColor[i] = "green";
                        break;
                    case "4c":
                        FirstHandConverted[i] = "🃔";
                        FirstColor[i] = "green";
                        break;
                    case "5c":
                        FirstHandConverted[i] = "🃕";
                        FirstColor[i] = "green";
                        break;
                    case "6c":
                        FirstHandConverted[i] = "🃖";
                        FirstColor[i] = "green";
                        break;
                    case "7c":
                        FirstHandConverted[i] = "🃗";
                        FirstColor[i] = "green";
                        break;
                    case "8c":
                        FirstHandConverted[i] = "🃘";
                        FirstColor[i] = "green";
                        break;
                    case "9c":
                        FirstHandConverted[i] = "🃙";
                        FirstColor[i] = "green";
                        break;
                    case "Tc":
                        FirstHandConverted[i] = "🃚";
                        FirstColor[i] = "green";
                        break;
                    case "Jc":
                        FirstHandConverted[i] = "🃛";
                        FirstColor[i] = "green";
                        break;
                    case "Qc":
                        FirstHandConverted[i] = "🃝";
                        FirstColor[i] = "green";
                        break;
                    case "Kc":
                        FirstHandConverted[i] = "🃞";
                        FirstColor[i] = "green";
                        break;
                }
                switch(SecondHandSelected[i]){
                    //Spades
                    case "As":
                        SecondHandConverted[i] = "🂡";
                        SecondColor[i] = "black";
                        break;
                    case "2s":
                        SecondHandConverted[i] = "🂢";
                        SecondColor[i] = "black";
                        break;
                    case "3s":
                        SecondHandConverted[i] = "🂣";
                        SecondColor[i] = "black";
                        break;
                    case "4s":
                        SecondHandConverted[i] = "🂤";
                        SecondColor[i] = "black";
                        break;
                    case "5s":
                        SecondHandConverted[i] = "🂥";
                        SecondColor[i] = "black";
                        break;
                    case "6s":
                        SecondHandConverted[i] = "🂦";
                        SecondColor[i] = "black";
                        break;
                    case "7s":
                        SecondHandConverted[i] = "🂧";
                        SecondColor[i] = "black";
                        break;
                    case "8s":
                        SecondHandConverted[i] = "🂨";
                        SecondColor[i] = "black";
                        break;
                    case "9s":
                        SecondHandConverted[i] = "🂩";
                        SecondColor[i] = "black";
                        break;
                    case "Ts":
                        SecondHandConverted[i] = "🂪";
                        SecondColor[i] = "black";
                        break;
                    case "Js":
                        SecondHandConverted[i] = "🂫";
                        SecondColor[i] = "black";
                        break;
                    case "Qs":
                        SecondHandConverted[i] = "🂭";
                        SecondColor[i] = "black";
                        break;
                    case "Ks":
                        SecondHandConverted[i] = "🂮";
                        SecondColor[i] = "black";
                        break;
                    // Hearts
                    case "Ah":
                        SecondHandConverted[i] = "🂱";
                        SecondColor[i] = "red";
                        break;
                    case "2h":
                        SecondHandConverted[i] = "🂲";
                        SecondColor[i] = "red";
                        break;
                    case "3h":
                        SecondHandConverted[i] = "🂳";
                        SecondColor[i] = "red";
                        break;
                    case "4h":
                        SecondHandConverted[i] = "🂴";
                        SecondColor[i] = "red";
                        break;
                    case "5h":
                        SecondHandConverted[i] = "🂵";
                        SecondColor[i] = "red";
                        break;
                    case "6h":
                        SecondHandConverted[i] = "🂶";
                        SecondColor[i] = "red";
                        break;
                    case "7h":
                        SecondHandConverted[i] = "🂷";
                        SecondColor[i] = "red";
                        break;
                    case "8h":
                        SecondHandConverted[i] = "🂸";
                        SecondColor[i] = "red";
                        break;
                    case "9h":
                        SecondHandConverted[i] = "🂹";
                        SecondColor[i] = "red";
                        break;
                    case "Th":
                        SecondHandConverted[i] = "🂺";
                        SecondColor[i] = "red";
                        break;
                    case "Jh":
                        SecondHandConverted[i] = "🂻";
                        SecondColor[i] = "red";
                        break;
                    case "Qh":
                        SecondHandConverted[i] = "🂽";
                        SecondColor[i] = "red";
                        break;
                    case "Kh":
                        SecondHandConverted[i] = "🂾";
                        SecondColor[i] = "red";
                        break;
                    // Diamonds
                    case "Ad":
                        SecondHandConverted[i] = "🃁";
                        SecondColor[i] = "blue";
                        break;
                    case "2d":
                        SecondHandConverted[i] = "🃂";
                        SecondColor[i] = "blue";
                        break;
                    case "3d":
                        SecondHandConverted[i] = "🃃";
                        SecondColor[i] = "blue";
                        break;
                    case "4d":
                        SecondHandConverted[i] = "🃄";
                        SecondColor[i] = "blue";
                        break;
                    case "5d":
                        SecondHandConverted[i] = "🃅";
                        SecondColor[i] = "blue";
                        break;
                    case "6d":
                        SecondHandConverted[i] = "🃆";
                        SecondColor[i] = "blue";
                        break;
                    case "7d":
                        SecondHandConverted[i] = "🃇";
                        SecondColor[i] = "blue";
                        break;
                    case "8d":
                        SecondHandConverted[i] = "🃈";
                        SecondColor[i] = "blue";
                        break;
                    case "9d":
                        SecondHandConverted[i] = "🃉";
                        SecondColor[i] = "blue";
                        break;
                    case "Td":
                        SecondHandConverted[i] = "🃊";
                        SecondColor[i] = "blue";
                        break;
                    case "Jd":
                        SecondHandConverted[i] = "🃋";
                        SecondColor[i] = "blue";
                        break;
                    case "Qd":
                        SecondHandConverted[i] = "🃍";
                        SecondColor[i] = "blue";
                        break;
                    case "Kd":
                        SecondHandConverted[i] = "🃎";
                        SecondColor[i] = "blue";
                        break;
                    //Clubs 
                    case "Ac":
                        SecondHandConverted[i] = "🃑";
                        SecondColor[i] = "green";
                        break;
                    case "2c":
                        SecondHandConverted[i] = "🃒";
                        SecondColor[i] = "green";
                        break;
                    case "3c":
                        SecondHandConverted[i] = "🃓";
                        SecondColor[i] = "green";
                        break;
                    case "4c":
                        SecondHandConverted[i] = "🃔";
                        SecondColor[i] = "green";
                        break;
                    case "5c":
                        SecondHandConverted[i] = "🃕";
                        SecondColor[i] = "green";
                        break;
                    case "6c":
                        SecondHandConverted[i] = "🃖";
                        SecondColor[i] = "green";
                        break;
                    case "7c":
                        SecondHandConverted[i] = "🃗";
                        SecondColor[i] = "green";
                        break;
                    case "8c":
                        SecondHandConverted[i] = "🃘";
                        SecondColor[i] = "green";
                        break;
                    case "9c":
                        SecondHandConverted[i] = "🃙";
                        SecondColor[i] = "green";
                        break;
                    case "Tc":
                        SecondHandConverted[i] = "🃚";
                        SecondColor[i] = "green";
                        break;
                    case "Jc":
                        SecondHandConverted[i] = "🃛";
                        SecondColor[i] = "green";
                        break;
                    case "Qc":
                        SecondHandConverted[i] = "🃝";
                        SecondColor[i] = "green";
                        break;
                    case "Kc":
                        SecondHandConverted[i] = "🃞";
                        SecondColor[i] = "green";
                        break;
                }
                switch(ThirdHandSelected[i]){
                    //Spades
                    case "As":
                        ThirdHandConverted[i] = "🂡";
                        ThirdColor[i] = "black";
                        break;
                    case "2s":
                        ThirdHandConverted[i] = "🂢";
                        ThirdColor[i] = "black";
                        break;
                    case "3s":
                        ThirdHandConverted[i] = "🂣";
                        ThirdColor[i] = "black";
                        break;
                    case "4s":
                        ThirdHandConverted[i] = "🂤";
                        ThirdColor[i] = "black";
                        break;
                    case "5s":
                        ThirdHandConverted[i] = "🂥";
                        ThirdColor[i] = "black";
                        break;
                    case "6s":
                        ThirdHandConverted[i] = "🂦";
                        ThirdColor[i] = "black";
                        break;
                    case "7s":
                        ThirdHandConverted[i] = "🂧";
                        ThirdColor[i] = "black";
                        break;
                    case "8s":
                        ThirdHandConverted[i] = "🂨";
                        ThirdColor[i] = "black";
                        break;
                    case "9s":
                        ThirdHandConverted[i] = "🂩";
                        ThirdColor[i] = "black";
                        break;
                    case "Ts":
                        ThirdHandConverted[i] = "🂪";
                        ThirdColor[i] = "black";
                        break;
                    case "Js":
                        ThirdHandConverted[i] = "🂫";
                        ThirdColor[i] = "black";
                        break;
                    case "Qs":
                        ThirdHandConverted[i] = "🂭";
                        ThirdColor[i] = "black";
                        break;
                    case "Ks":
                        ThirdHandConverted[i] = "🂮";
                        ThirdColor[i] = "black";
                        break;
                    // Hearts
                    case "Ah":
                        ThirdHandConverted[i] = "🂱";
                        ThirdColor[i] = "red";
                        break;
                    case "2h":
                        ThirdHandConverted[i] = "🂲";
                        ThirdColor[i] = "red";
                        break;
                    case "3h":
                        ThirdHandConverted[i] = "🂳";
                        ThirdColor[i] = "red";
                        break;
                    case "4h":
                        ThirdHandConverted[i] = "🂴";
                        ThirdColor[i] = "red";
                        break;
                    case "5h":
                        ThirdHandConverted[i] = "🂵";
                        ThirdColor[i] = "red";
                        break;
                    case "6h":
                        ThirdHandConverted[i] = "🂶";
                        ThirdColor[i] = "red";
                        break;
                    case "7h":
                        ThirdHandConverted[i] = "🂷";
                        ThirdColor[i] = "red";
                        break;
                    case "8h":
                        ThirdHandConverted[i] = "🂸";
                        ThirdColor[i] = "red";
                        break;
                    case "9h":
                        ThirdHandConverted[i] = "🂹";
                        ThirdColor[i] = "red";
                        break;
                    case "Th":
                        ThirdHandConverted[i] = "🂺";
                        ThirdColor[i] = "red";
                        break;
                    case "Jh":
                        ThirdHandConverted[i] = "🂻";
                        ThirdColor[i] = "red";
                        break;
                    case "Qh":
                        ThirdHandConverted[i] = "🂽";
                        ThirdColor[i] = "red";
                        break;
                    case "Kh":
                        ThirdHandConverted[i] = "🂾";
                        ThirdColor[i] = "red";
                        break;
                    // Diamonds
                    case "Ad":
                        ThirdHandConverted[i] = "🃁";
                        ThirdColor[i] = "blue";
                        break;
                    case "2d":
                        ThirdHandConverted[i] = "🃂";
                        ThirdColor[i] = "blue";
                        break;
                    case "3d":
                        ThirdHandConverted[i] = "🃃";
                        ThirdColor[i] = "blue";
                        break;
                    case "4d":
                        ThirdHandConverted[i] = "🃄";
                        ThirdColor[i] = "blue";
                        break;
                    case "5d":
                        ThirdHandConverted[i] = "🃅";
                        ThirdColor[i] = "blue";
                        break;
                    case "6d":
                        ThirdHandConverted[i] = "🃆";
                        ThirdColor[i] = "blue";
                        break;
                    case "7d":
                        ThirdHandConverted[i] = "🃇";
                        ThirdColor[i] = "blue";
                        break;
                    case "8d":
                        ThirdHandConverted[i] = "🃈";
                        ThirdColor[i] = "blue";
                        break;
                    case "9d":
                        ThirdHandConverted[i] = "🃉";
                        ThirdColor[i] = "blue";
                        break;
                    case "Td":
                        ThirdHandConverted[i] = "🃊";
                        ThirdColor[i] = "blue";
                        break;
                    case "Jd":
                        ThirdHandConverted[i] = "🃋";
                        ThirdColor[i] = "blue";
                        break;
                    case "Qd":
                        ThirdHandConverted[i] = "🃍";
                        ThirdColor[i] = "blue";
                        break;
                    case "Kd":
                        ThirdHandConverted[i] = "🃎";
                        ThirdColor[i] = "blue";
                        break;
                    //Clubs 
                    case "Ac":
                        ThirdHandConverted[i] = "🃑";
                        ThirdColor[i] = "green";
                        break;
                    case "2c":
                        ThirdHandConverted[i] = "🃒";
                        ThirdColor[i] = "green";
                        break;
                    case "3c":
                        ThirdHandConverted[i] = "🃓";
                        ThirdColor[i] = "green";
                        break;
                    case "4c":
                        ThirdHandConverted[i] = "🃔";
                        ThirdColor[i] = "green";
                        break;
                    case "5c":
                        ThirdHandConverted[i] = "🃕";
                        ThirdColor[i] = "green";
                        break;
                    case "6c":
                        ThirdHandConverted[i] = "🃖";
                        ThirdColor[i] = "green";
                        break;
                    case "7c":
                        ThirdHandConverted[i] = "🃗";
                        ThirdColor[i] = "green";
                        break;
                    case "8c":
                        ThirdHandConverted[i] = "🃘";
                        ThirdColor[i] = "green";
                        break;
                    case "9c":
                        ThirdHandConverted[i] = "🃙";
                        ThirdColor[i] = "green";
                        break;
                    case "Tc":
                        ThirdHandConverted[i] = "🃚";
                        ThirdColor[i] = "green";
                        break;
                    case "Jc":
                        ThirdHandConverted[i] = "🃛";
                        ThirdColor[i] = "green";
                        break;
                    case "Qc":
                        ThirdHandConverted[i] = "🃝";
                        ThirdColor[i] = "green";
                        break;
                    case "Kc":
                        ThirdHandConverted[i] = "🃞";
                        ThirdColor[i] = "green";
                        break;
                }
        }
        for(let j = 0; j < FirstHandConverted.length; j++){
            if(
                FirstHandConverted[j] !== undefined && SecondHandConverted[j] !== undefined && ThirdHandConverted[j] !== undefined &&
                FirstColor[j] !== undefined && SecondColor[j] !== undefined && ThirdColor[j] !== undefined
            ){
                flopConvertedList[j] = {
                    'first': FirstHandConverted[j], 
                    'second': SecondHandConverted[j], 
                    'third': ThirdHandConverted[j], 
                    'firstColor': FirstColor[j], 
                    'secondColor': SecondColor[j], 
                    'thirdColor': ThirdColor[j]};
                }
        }
        this.setState({ 
            flopCollection: flopConvertedList
        });
    }
    render(){
        return(
            <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand abs">PokerConvertToSymbol</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="//codeply.com">Codeply</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#myAlert" data-toggle="collapse">Link</a>
                        </li> */}
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a href="https://github.com/victoramagalhaes/PokerConvertToSymbol" className="nav-link">
                            <i style={{marginRight:'6px'}} className="fab fa-github"></i>
                                How to use
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="mailto:victor@divweb.com.br" className="nav-link">
                            <i style={{marginRight:'6px'}} className="fas fa-envelope"></i>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="d-flex">
                        <textarea 
                        style={{height: '250px', width:'100%', marginTop:'50px', marginBottom:'5px'}} 
                        name="flop" 
                        value={this.state.flop} 
                        onChange={this.handleChange}
                        placeholder="Insert a flop or a flop set (with space), e.g., As8s6s JdTs9d JsJh3c"
                        >
                        </textarea>
                    </div>
                </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <button style={{width:'30%'}} type="button" className="btn btn-dark" onClick={this.convertToSymbol}> Convert </button>
                        <button style={{width:'30%', marginLeft:'5%'}} type="button" className="btn btn-dark" onClick={this.handleClick.bind(this)}> {this.state.copy} </button>
                        <button style={{width:'30%', marginLeft:'5%'}} type="button" className="btn btn-dark" onClick={this.Refresh}> Refresh </button>
                    </div>
                </div>
                <ClickToSelect onSelect={this.CopyToClipboard}>
                <div ref={divRef => this.divRef = divRef} className="row justify-content-center">
                    <div className="col-md-6">
                    {this.state.flopCollection.map((flop, i) => {
                        return(
                        <div key={i} className="d-flex flex-row sizeCards justify-content-center">
                            <span className={flop.firstColor}>{flop.first}</span>
                            <span className={flop.secondColor}>{flop.second}</span>
                            <span className={flop.thirdColor}>{flop.third}</span>
                        </div>
                        ) 
                    })}
                    </div>
                </div>
                </ClickToSelect>
            </div>
            </div>
        );
    }
}