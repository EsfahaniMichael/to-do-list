import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize'
import '../assets/css/app.css'
import React, { Component } from 'react';
import List from './list';
import AddItem from './add_item'
import listData from "../dummy_data/list";
import { randomString } from '../helpers'

console.log('Random String:', randomString(20));
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: []
        }
    }

    addItem = (item) => {
        item._id = randomString(8);
        this.setState({
            list: [item, ...this.state.list]
        });
    }

    componentDidMount(){
        this.getListData();
    }

    getListData(){
        // Call server to get data
        this.setState({
            list: listData
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="center">To Do List</h1>

                    <AddItem add={this.addItem}/>
                    <List data={this.state.list}/>
                </div>
            </div>
        );
    }
}

export default App;
