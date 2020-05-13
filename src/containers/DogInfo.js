import React from 'react';
import dogs from "../dogsdata";

const DogInfo = (props) => {

    const chosenDogId = props.match.params.id;
    const chosenOne = dogs.find((dog) =>  dog.id === chosenDogId);
    return (
        <div>
            <li>
                <h5>Name: {chosenOne.name}</h5>
                <h5>Description: {chosenOne.description}</h5>
                <h5>Breed: {chosenOne.breed}</h5>
                <h5>Ageasdfg: {chosenOne.age}</h5>
                <img src={chosenOne.image}/>
            </li>
        </div>
    )
};

export default DogInfo; 
