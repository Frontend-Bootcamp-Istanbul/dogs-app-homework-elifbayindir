import React from 'react';
import dogs from "../dogsdata";

const DogInfo = (props) => {

    const chosenDogId = props.match.params.id;
    const chosenOne = dogs.find((dog) =>  dog.id === chosenDogId);
    return (
        <div>
            <li>
                <h5>{chosenOne.name}</h5>
                <h5>{chosenOne.description}</h5>
                <h5>{chosenOne.breed}</h5>
                <h5>{chosenOne.age}</h5>
            </li>
        </div>
    )
};

export default DogInfo; 
