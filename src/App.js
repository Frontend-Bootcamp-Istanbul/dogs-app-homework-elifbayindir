import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Header";
import {Switch, Route} from "react-router-dom"; // react-router switch case yapısıyla çalışıyor, router farklı url'ye gittiğinde farklı component render ediliyor
import routes from "./routes";
import Homepage from "./containers/Homepage";
import FilteredDogs from "./containers/FilteredDogs";
import DogInfo from "./containers/DogInfo";

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Header /> {/* her sayfada header olsun istediğimizden bu, switchin dışında olacak */}
                <Switch>
                    <Route path="/" exact component={Homepage} /> {/* farklı url lerin hepsi bir route */}
                    <Route path='/hakkinda' exact component={() => <div>Hakkimizda Componenti</div>} />
                    <Route path="/tur/:yazilanTur" exact component={FilteredDogs} />
                    <Route path="/detail/:id" exact component={DogInfo} />
                    <Route component={() => <div><h1>404 sayfa bulununamadi</h1></div>} />
                    {/*{*/}
                    {/*    routes.map((route) => {*/}
                    {/*        // <Route {...route} />*/}
                    {/*        return <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />*/}
                    {/*    })*/}
                    {/*}*/}
                </Switch>
            </div>
        );
    }
}

export default App;
