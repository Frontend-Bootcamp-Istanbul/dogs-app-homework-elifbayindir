import React from "react";
import Homepage from "./containers/Homepage";
import Goldens from "./containers/Goldens";
import Cavaliers from "./containers/Cavaliers";
import FilteredDogs from "./containers/FilteredDogs";
import DogInfo from "./containers/DogInfo";


const routes = [
    {
        path: "/",
        exact: true,
        component: Homepage,
        title: "Anasayfa"
    },
    {
        path: "/tur/:yazilanTur",
        exact: false,
        component: FilteredDogs,
        title: "Filtrelenmis Dogs"
    },
    {
        path: "/hakkinda",
        exact: false,
        component: () => {return <div>Hakkinda Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse eveniet expedita fugiat harum iure laudantium libero maxime nesciunt non, nulla odio pariatur porro, quibusdam quis sed suscipit temporibus veritatis voluptate?</div>},
        title: "Hakkinda"
    },
    {
        path: "/detail/:id",
        exact: false,
        component: DogInfo
    }
];

export default routes;