import React from 'react';
import FavoriteActions from "./FavoriteActions";
import {Card} from 'reactstrap'; 
import { Link, Switch } from "react-router-dom";

const Dog = ({id, name, toggle, getStatus}) => {
    return <li key={id}>
            <Link to={`/detail/${id}`}>
                {name}
            </Link>
            <Card style={styles.card}>
                <FavoriteActions 
                toggle={toggle} 
                id={id} 
                getStatus={getStatus}/>
            </Card>
         </li>
};

const styles = { // reacstrap stil ekler
    card: {
        textDecoration: 'none',
        textAlign: "center",
        alignItems: 'center',
        width: "12.5rem",
        height: "3rem",
        boxShadow: "5px 5px 17px",
        padding: "3px",
        margin: "0.3rem"
    }
}

export default Dog;