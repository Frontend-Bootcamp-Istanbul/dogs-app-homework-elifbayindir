import React from 'react';
import {Button} from "reactstrap";

const FavoriteActions = (props) => {
    return (
        <div>
            {
                props.getStatus(props.id) ?
                    <Button disabled={props.favoriteStatus} color="danger" onClick={() => {props.toggle(props.id)}}>Favorilerden Cikar</Button>
                    : <Button disabled={props.favoriteStatus} color="primary" onClick={() => {props.toggle(props.id)}}>Favoriye Ekle</Button>
            }
        </div>
    );
};

export default FavoriteActions;