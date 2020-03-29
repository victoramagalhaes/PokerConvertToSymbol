import React from 'react';

export default class Parser extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            flop: '',
            flopCollection: [],
            firstCard:[],
            secondCard:[],
            thirdCard:[],
            firstColor:[],
            secondColor:[],
            thirdColor:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.convertToSymbol = this.convertToSymbol.bind(this);
    }
    handleChange(e){
        this.setState({
            flop:e.target.value
        })
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
        console.log(flopCollection);

        let flopConverted = [];
        let FirstHandSelected = [];
        let SecondHandSelected = [];
        let ThirdHandSelected = [];
        let FirstHandConverted = [];
        let SecondHandConverted = [];
        let ThirdHandConverted = [];
        let flopConvertedList = [];
        let firstConverted = [];
        let secondConverted = [];
        let thirdConverted = [];
        let FirstColor = [];
        let SecondColor = [];
        let ThirdColor = [];
        let FirstColorConverted = [];
        let SecondColorConverted = [];
        let ThirdColorConverted = [];

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
            if(FirstHandConverted[j] !== undefined && SecondHandConverted[j] !== undefined && ThirdHandConverted[j] !== undefined){
                firstConverted[j] = [FirstHandConverted[j]];
                secondConverted[j] = [SecondHandConverted[j]];
                thirdConverted[j] = [ThirdHandConverted[j]];
            }
            if(FirstColor[j] !== undefined && SecondColor[j] !== undefined && ThirdColor[j] !== undefined){
                FirstColorConverted[j] = [FirstColor[j]];
                SecondColorConverted[j] = [SecondColor[j]];
                ThirdColorConverted[j] = [ThirdColor[j]];
            }
        }
        this.setState({ 
            firstCard : firstConverted, 
            secondCard: secondConverted, 
            thirdCard: thirdConverted,
            firstColor: FirstColorConverted,
            secondColor: SecondColorConverted,
            thirdColor: ThirdColorConverted
        });
    }
    render(){
        console.log(this.state.firstCard, this.state.secondCard, this.state.thirdCard, this.state.firstColor, this.state.secondColor, this.state.thirdColor)
        return(
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-6 flex-column">
                    <div className="d-flex flex-column">
                        <textarea style={{height: '250px', marginTop:'50px', marginBottom:'5px'}} name="flop" value={this.state.flop} onChange={this.handleChange}></textarea>
                        <button type="button" class="btn btn-dark" onClick={this.convertToSymbol}> Converter </button>
                    </div>
                </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                    {this.state.firstCard.map((first, i) => {
                        return(
                        <div className="d-flex flex-row">
                            <p className="color">{first}</p>
                        </div>
                        ) 
                    })}
                    </div>
                </div>
            </div>
        );
    }
}