import React, {Component} from 'react'
import './counter.css'
import PropTypes from 'prop-types'
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        }
    }
    render = () => {
        return (
                <div className="counter">
                    <div>Counter</div>
                        <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
                        <CounterButton factor = {2} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                        <CounterButton factor = {5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                        <CounterButton factor = {10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                    <div>
                        <span className="count">{this.state.counter}</span>
                    </div>
                    <span>
                        <button className="reset" onClick={this.reset}>RESET</button>
                    </span>
                </div>

        )
    }
    // reset = () => {
    //     this.setState({
    //         counter : 0
    //     })
    // }
    reset = () => {
        this.setState(() => {
            return {
                counter : 0
            }
        })
    }
    // increment = (factor) => {
    //     console.log("increment");
    //     // this.state.counter +=1; // bad practice we never directly update the state.
    //     this.setState({
    //         counter: this.state.counter + factor
    //     });
    //     // this.props.increment(this.props.factor)
    // }
    increment = (factor) => {
        console.log("increment");
        // this.state.counter +=1; // bad practice we never directly update the state.
        this.setState((prevState)=>{
            return {
                counter: prevState.counter + factor
            }
        });
        // this.props.increment(this.props.factor)
    }
    // decrement = (factor) => {
    //     console.log("decrement");
    //     this.setState({
    //         counter : this.state.counter - factor
    //     })
    //     // this.props.decrement(this.props.factor)
    // }
    decrement = (factor) => {
        console.log("decrement");
        this.setState((prevState)=>{
           return {
                counter : prevState.counter - factor
            }
        })
        // this.props.decrement(this.props.factor)
    }
}
class CounterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        }
    }

    //The methods defined here and there are needed to be binded to the class
    //define the initial state in the constructor:

    //On the increment we just need to increment the state:
    //Very Important whenever we use arrow funtions we need not use the binnding this is really usefull.
    //With arrow functions alone you need not do the binding
    render = () => {
        return (
            <div className="counter">
                <div>
                    <button onClick={this.incrementMethod}>+{this.props.factor}</button>
                    <button onClick={this.decrementMethod}>-{this.props.factor}</button>
                </div>
            </div>
        );
    }
            // incrementMethod = () => {
            //     // this.state.counter +=1; // bad practice we never directly update the state.
            //     this.setState({
            //     counter: this.state.counter + this.props.factor
            // });
            //     this.props.incrementMethod(this.props.factor)
            // }
            incrementMethod = () => {
                // this.state.counter +=1; // bad practice we never directly update the state.
                this.setState(()=>{
                   return {
                       counter: this.state.counter + this.props.factor
                   }
                });
                this.props.incrementMethod(this.props.factor)
            }
            // decrementMethod = () => {
            //     this.setState({
            //
            //             counter : this.state.counter - this.props.factor
            //     })
            //     this.props.decrementMethod(this.props.factor)
            // }
            decrementMethod = () => {
                this.setState(()=>{
                  return  {
                        counter : this.state.counter - this.props.factor
                   }
            })
                this.props.decrementMethod(this.props.factor)
            }

}
CounterButton.defaultProps = {
    factor : 1
}
CounterButton.propTypes = {
    factor : PropTypes.number
}
export default Counter

