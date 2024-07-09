import Header from '../BaseComponents/Header/Header'
import CharacteristicDescription from './components/CharacteristicDescripiton/CharacteristicDescription'
import ProductInfo from './components/ProductInfo/ProductInfo'

const ProductPage = (props) => {
    return (
        <div className=''>
            <Header />
            <ProductInfo />
            <CharacteristicDescription />
        </div>
    )
}

export default ProductPage