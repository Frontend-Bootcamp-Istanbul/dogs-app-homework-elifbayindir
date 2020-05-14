import React from 'react';
import dogs from "../dogsdata";
import {Button} from "reactstrap";
import FavoriteActions from "../components/FavoriteActions";
import Dog from "../components/Dog";
import axios from "axios";
import {connect} from "react-redux";
import {addFavorite, deleteFavorite} from "../redux/actions";

const apiHost = "https://5ea568a42d86f00016b45bff.mockapi.io";

class Homepage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            favorites: [],
            loadingFavorites: false,
            favoriteStatus: null
        }
    }
    componentDidMount() {
        // localstoragedan getirme
/*        this.setState({
            favorites: window.localStorage.getItem("favorites") ? JSON.parse(window.localStorage.getItem("favorites")): []
        })*/

        this.setState({
            loadingFavorites: true
        }, () => {
            axios.get(`${apiHost}/favorites`).then((result) => {
                this.setState({
                    favorites: result.data,
                    loadingFavorites: false
                })
            }).catch((err) => {
                console.true("Axios err", err);
                this.setState(({
                    loadingFavorites: false
                }))
            })
        })
    }

    toggle = (dogId)=>{
        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        if(foundDog){
            this.setState({
                favoriteStatus: true
            }, () => {
            axios.delete(`${apiHost}/favorites/${foundDog.id}`).then((result) => {
                this.setState(({
                    favorites: this.state.favorites.filter((dog) => dog.dogId !== dogId),
                    favoriteStatus: null
                }))
            }).catch((err) => {
                console.log(err);
            });
            })
        }else{
            // window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
            this.setState({
                favoriteStatus: true
            }, () => {
            axios.post(`${apiHost}/favorites`, {
                dogId
            }).then((result) => {
                const eklenenFavori = result.data; // {id: 1, dogId: benim yolladigim dog id, createdat: date}
                this.setState({
                    favorites: [...this.state.favorites, eklenenFavori],
                    favoriteStatus: null
                })
            }).catch((err) => {
                console.log(err);
                this.setState(({
                    favoriteStatus: null
                }))
            })
            })
        }
    }

    getStatus= (dogId) =>{
        const foundDog = this.state.favorites.find((favorite) => favorite.dogId === dogId);
        return foundDog;
    }

    render(){
        if(this.state.loadingFavorites){
            return <div>
                <h1>Sayfa Yukleniyor.....</h1>
            </div>
        }
        return (
            <div>
                <ul>
                    {
                        dogs.map((dog) => {
                            return <Dog 
                            favoriteStatus={this.state.favoriteStatus}
                            toggle={this.toggle} 
                            id={dog.id} 
                            getStatus={this.getStatus} 
                            {...dog}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = { 
    addFavorite, deleteFavorite 
};

export default connect(null, mapDispatchToProps)(Homepage);