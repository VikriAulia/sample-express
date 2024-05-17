"use strict";
// this is how to use it, we use object props as parameter, and return the weather string
const weatherComponent = (props) => props.weather;
const weatherComponent2 = (props) => props.zipcode;
//this object use type declaration file 'costom.d.ts' as interface
const weatherComponent3 = (properties) => properties.weather;
//this object use type decrlaration file 'custom.d.ts' as type declaration
