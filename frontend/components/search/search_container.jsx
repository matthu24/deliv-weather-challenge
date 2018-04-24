import React from 'react';
import Search from './search';
import {connect} from 'react-redux';
import {fetchAllWeather} from '../../actions/weather';


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  fetchAllWeather: zip => dispatch(fetchAllWeather(zip))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
