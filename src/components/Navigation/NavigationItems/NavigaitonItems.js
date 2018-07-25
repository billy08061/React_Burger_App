import React from 'react'; 
import classes from '../NavigationItems/NavigationItem/NavigationItem.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => (
    <ul className ={classes.NavigationItem}>
        <NavigationItem link = "/" active > Burger Builder </NavigationItem>
        <NavigationItem link = "/"> Checkout      </NavigationItem>
    </ul>


);

 
export default NavigationItems;