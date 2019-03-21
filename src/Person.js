import React, {Component} from 'react';

//var myPerson={"id":"e1601140", "name":"Nguyen Quoc Huy"}
//var myPerson
class Person extends Component {
    constructor(props){
        super(props);
        this.state={
            person:{}
        }
    }

    async componentDidMount(){
        //read the file person.js from folder public
        const personRemote = await( 
            await fetch('person.json')).json();
        //Overwrite the empty person in constructor with the
        //data from the file
        this.setState({person : personRemote});
    }    

    render(){
        return(
            <div>
                <h1>Hello {myPerson.name} id {myPerson.id}</h1>
                <h1>Suomi on maailman onnellisin maa</h1>            
            </div>
        )
    }
}
export default Person;