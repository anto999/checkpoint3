// TODO Panier qui affiche le panier
import React, { Component } from 'react'
import { Button, Container } from 'reactstrap'
import ListPerso from './ListPerso'

class Tableau extends Component {

    constructor() {
        super()
        //state initial
        this.state = {
            articles: [
              {
                  name: "Leia Organa",
                  status: "alive",
                  picture: "https://starwars-visualguide.com/assets/img/characters/5.jpg"
              },
              {
                  name: "C-3PO",
                  status: "alive",
                  picture: "https://starwars-visualguide.com/assets/img/characters/2.jpg"
              },
              {
                  name: "Biggs Darklighter",
                  status: "dead",
                  picture: "https://starwars-visualguide.com/assets/img/characters/9.jpg"
              }
          ]
        }
        this.removeArticle = this.removeArticle.bind(this)
    }

    removeArticle (articleId) {
        console.log(`remover article ${articleId} from panier`)
        this.setState(
            prevState => ({
                articles: prevState.articles.filter(
                    article => article.id !== articleId
                )
            })
        )
    }

    render() {
        return <Container>
            <ListPerso
                articles={this.state.articles}
                remove = {this.removeArticle}
            />
            <Button />
        </Container>
    }
}

export default Tableau
