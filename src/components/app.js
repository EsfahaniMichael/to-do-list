import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize'
import '../assets/css/app.css'
import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import axios from 'axios';
import List from './list';
import AddItem from './add_item';


const BASE_URL = 'http://api.reactprototypes.com/todos';
const API_KEY = '?key=c_918demouser';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            list: [],
            error: ''
        }
    }

    deleteItem = async (id) => {

        const resp = await axios.delete(`${BASE_URL}/${id + API_KEY}`)

        this.getListData();
    }


    addItem = async (item) => {
        const resp = await axios.post(BASE_URL + API_KEY, item);
        this.getListData();
    }

    componentDidMount(){
        this.getListData();
    }

     async getListData(){
            const resp = await axios.get(BASE_URL + API_KEY);

            this.setState({
                list: resp.data.todos
            });
    }

    render() {

        const { error, list } = this.state;

        return (
            <div>
                <div className="container">


                    <Route exact path="/" render={() => {
                        return <List delete={this.deleteItem} data = {list} error ={error} />
                    }}/>
                    <Route path = "/add-item" render={() => {
                        return <AddItem add={this.addItem} />
                    }}/>

                </div>
            </div>
        );
    }
}

export default App;
