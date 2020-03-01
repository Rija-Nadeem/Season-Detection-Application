import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component{
	state={lat:null, errMsg: ''};
	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			position=>this.setState({lat:position.coords.latitude}),
			err=>this.setState({errMsg:err.message}) 
			);
			
			
	}
	

	render(){
		
			if(!this.state.errMsg && this.state.lat){
				return <SeasonDisplay lati={this.state.lat}/>;
			}

			if(this.state.errMsg && !this.state.lat){
				return <div>Error: {this.state.errMsg}</div>;
			}
			
			
			return <Spinner message="please allow location access"/>;
			
		}
	
};
ReactDOM.render(<App/>,document.querySelector('#root'));