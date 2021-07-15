import React from 'react';
import Home from './Home';
import Login from './Login';
import Details from './Details';

export default {
  title: 'Views',
};

export const home = () => <Home />;
export const login = () => <Login />;
export const details = () => <Details />;
