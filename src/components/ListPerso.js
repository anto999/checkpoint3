import React from 'react'
import { ListGroup } from 'reactstrap'
import Tableau from './Tableau'
import Perso from './Perso'

const ListPerso = ({ articles, remove }) => <ListGroup>
  { Perso.map( (perso) => <Tableau
  key={perso.id}
  {...perso}
  remove={() => remove(perso.id)}
  />) }
</ListGroup>

export default ListPerso
