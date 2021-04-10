import React from 'react';
import './style.css';
import axios from 'axios';
import  //import something using form

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],

        }
    }

    //handle input change to .sort through the names
    

//componentDidMount lifestyle method will happen as the page loads
componentDidMount(){
    axios.get(`https://randomuser.me/api/?results=25&nat=us`)
    .then((res) => {
        this.setState({ users: res.data.results })
    })
}

// render and return axios call info in here 
render() {
    return(
        //return all our data and display to the page
        <div className="App">

        </div>
    )
}
}

export default App;
