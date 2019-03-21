import React, {Component} from 'react';

var myPerson={"id":"e1601140", "name":"Nguyen Quoc Huy"}
//var myPerson
class Person extends Component {
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