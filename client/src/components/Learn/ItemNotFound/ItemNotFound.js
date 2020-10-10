import React from 'react';
import NotFoundImg from '../../../assets/404gif.gif';
import classes from './itemnotfound.module.css';

const ItemNotFound = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.Text}>
            Looks Like You are Lost!
            </div>
            <img src={NotFoundImg} alt="Item-Not-Found" className={classes.Img}/>
            <div className={classes.Text}>
                No Item Found
            </div>
        </div>
    )
}

export default ItemNotFound;