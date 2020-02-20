import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {

    //Transforms the ingredients object in state to an array. Object is a default JS object with .keys() method, which
    // extracts the keys of a given object and turns it into an array and .map() executes a function on each element in the array
    //ingredient Key igKey is the name of the ingredient
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {

        //creates an array with the amount of elements as the given ingredient. _ element doesn't matter, but index i is important
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            //returns jsx elements with unique keys (bacon2)
            return <BurgerIngredient key={igKey + i} type={igKey}/>;
        });
    })
        //.reduce((previous value, current value) => {}, initial value) is a built-in array function that allows us to
        // transform and array into something else. Loops through all the elements and adds them to the initial value.
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length ===0) {
        transformedIngredients = <p>Please add some ingredients</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;