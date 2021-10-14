import React, {Component} from 'react';
import './App.css';
import {Card_list} from './components/card_list/Card_list';
import {Search_Box} from './components/Search_Box/Search_Box';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField:''
    };
    
  }

  handleSearch = e =>{
    this.setState({searchField: e.target.value});
  }
  

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(user=>this.setState({monsters:user}));
  }

  render()  {
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search_Box placeholder='Search Here...' handleSearch = {this.handleSearch}/>
        <Card_list monsters = {filteredMonster}/>
      </div>
    );
  }
}

export default App;



