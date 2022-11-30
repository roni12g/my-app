import React from "react";
import './item.scss';
import {useSelector} from 'react-redux';

const Item = (props) => {

    const count = useSelector((state)=> state.items.count);
    return (
        <div className="items-info">
            <h1>Item Information</h1>
            <h2>Items : </h2>
            <h3>{count}</h3>
        </div>
    );

};

export default Item;

