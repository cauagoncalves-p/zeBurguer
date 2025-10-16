import { FlatList } from 'react-native';
import Card from './Card';

const Cards = () => {
const ofertas = [
  {
    id: '1',
    nome: 'Layers of Value',
    descricao: '6pc Onion Rings for R15.00',
    imagem: require('../../assets/onion.png'),
  },
  {
    id: '2',
    nome: 'Extra Chilled',
    descricao: '2x Extra-Long Chilli Cheese Medium Meals + 2 Small Hot Drinks',
    imagem: require('../../assets/chilli.png'),
  },
  {
    id: '3',
    nome: 'Texas Jr Save-em',
    descricao: 'Texas BBQ Jr Medium Meal for R65.00',
    imagem: require('../../assets/texas.png'),
  },
  {
    id: '4',
    nome: 'Fierce Fam Combo',
    descricao: '2x Fierce Whopper Medium Meals and 4pc Original Chicken Nuggets',
    imagem: require('../../assets/fierce.png'),
  },
  {
    id: '5',
    nome: 'Chicken King’s 2.0',
    descricao: '2x Big King’s Chicken Medium Meals + 2 King Jr Chicken Meals',
    imagem: require('../../assets/chicken.png'),
  },
];
const renderItem = ({item}) => (
        <Card titulo={item.nome} descricao={item.descricao} imagem={item.imagem}/>
)
    return(
        <FlatList data={ofertas} renderItem={renderItem} keyExtractor={(ofertas) => ofertas.id}/>
    )
}

export default Cards;