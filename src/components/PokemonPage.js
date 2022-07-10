import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor() {
    super(); 
    this.state = {
      pokemon: [],
      filteredPokemon: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then((res) => res.json())
    .then(this.setPokemonInState);
  }

  setPokemonInState = (pokemon) => {
    this.setState ({
      pokemon: pokemon,
      filteredPokemon: pokemon
    })
  }

  searchPokemon = (event) => {
    let searchTerm = event.target.value;
    console.log(searchTerm)
    this.setState({
      filteredPokemon: this.state.pokemon.filter((pokemon) => pokemon.name.startsWith(searchTerm))
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search searchPokemon={this.searchPokemon}/>
        <br />
        <PokemonCollection pokemonList={this.state.filteredPokemon} />
      </Container>
    )
  }
}

export default PokemonPage
