import React, { Component } from 'react'
import { Card } from './Card/Card';

import './Card_list.css';

export const Card_list = (props) =>{
    return (
        <div className="Card_list">
            {props.monsters.map(monster => (
            <Card key={monster.id}  monster={monster} />
            ))}
        </div>
    )
};

