import React, { Component } from 'react';
import './App.css';
import { Layout , Header, Navigation , Drawer, Content, Button} from 'react-mdl';
import Dog from './components/dog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    }
  }

  changeInterval(ev){
    clearInterval(this.myInterval);

    console.log (ev.target.textContent);
    let num = ev.target.textContent*1000;
      this.myInterval = setInterval(() => {
        fetch('https://dog.ceo/api/breeds/image/random/16')
          .then((res) => res.json())
          .then((data) => {
            this.setState({ dogs: data.message })
          })
      }, num)

  }

  componentWillUnmount(){
    clearInterval(this.myInterval);
  }

  render() {
    return (

<div style={{height: '1000px', position: 'relative'}}>
    <Layout style={{background: 'url(https://coolbackgrounds.io/images/backgrounds/index/disco-dba865f1.png) center / cover'}}>
        <Header transparent style={{color: 'white'}}>
          <h3 className="header"> Dog party! </h3>
        </Header>


        <Content>
          <h5 className="desc"> Choose how fast (in seconds) you want the dogs to update! </h5>

          <div className="buttons">
            <Button onClick={this.changeInterval.bind(this)} raised colored>0.5</Button>
            <Button onClick={this.changeInterval.bind(this)}  raised colored>1</Button>
            <Button onClick={this.changeInterval.bind(this)}  raised colored>2</Button>
            <Button onClick={this.changeInterval.bind(this)} raised colored>5</Button>
            <Button onClick={this.changeInterval.bind(this)} raised colored>10</Button>
          </div>

          <Dog dogs={this.state.dogs}/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
