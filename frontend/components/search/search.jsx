import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


class Search extends React.Component{
  constructor(props){
    super(props);
    this.state={zip:'95035'}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  componentDidMount(){
    this.props.fetchAllWeather(this.state.zip);
    this.props.storeZip(this.state.zip);
  }

  onChange(field){
    return(e) => {
      this.setState({[field]:e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    //fire post request
    this.props.fetchAllWeather(this.state.zip);
    this.props.storeZip(this.state.zip);
    this.setState({zip: ''})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <input value={this.state.zip} onChange={this.onChange('zip')} className='search' placeholder='Search by zip code'></input>
          <input className = 'submit' type='submit'></input>
        </form>

        <Link to="/chart">Charts</Link>
        <Link to="/">Five Day Forecast</Link>
      </div>
    )
  }
}

export default Search;
