import React, {Component} from 'react';
import {Form} from "reactstrap";
var myPerson={"id":"e1601140", "name":"Nguyen Quoc Huy"}
var aPerson;
//var myPerson
class Person extends Component {
    constructor(props){
        super(props);
        this.state={
            person:{}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //https://git.vamk.fi/tka/reactsimple/src/branch/json/src/Person.js
        const target = event.target;    //what ui component caused the event
        const value = target.value;     //What is the new value
        const name = target.name;       //What data need to be updated (here person.name)
        let aPerson = {...this.state.person};    //variable to refer to member variable
        aPerson[name] = value;                  //add the value of name for the json object
        this.setState({person:aPerson});        //Update the member variable status

    }

    async componentDidMount(){
        //read the file person.js from folder public
        const personRemote = await(
            await fetch('myPerson.json')).json();
        //Overwrite the empty person in constructor with the
        //data from the file
        this.setState({person : personRemote});
    }    

    render(){
        //read this.state.person to a local variable
        aPerson = {...this.state.person};
        //if(this.state.person)
        return(
            <div>
                <Form>
                    <h1>Hello {aPerson.name}</h1>
                    <h1>Suomi on maailman onnellisin maa</h1>
                    <input type="text" name="name" id="name" value={aPerson.name}
                     onChange={this.handleChange}></input>
                </Form>
            </div>
        )
    }
}
export default Person;