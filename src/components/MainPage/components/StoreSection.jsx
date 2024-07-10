
import ProductCard from '../../BaseComponents/Product/ProductCard';
import s from './styles/StoreSection.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { setFavoriteProducts, setViewedHistory } from '../../../_store/slices/productsSlice';
import { useEffect, useState } from 'react';

const StoreSection = (props) => {

    const { section } = props;

    const [sectionBody, setSectionBody] = useState({ title: "", products: [] });

    const dispatch = useDispatch()

    useEffect(() => {
        /* Variable of test_data need to delete after connect with server */

        const test_data = [
            {
                poster: "",
                slug: "lamp",
                title: "В’язана лампа",
                store_name: `craft_man`,
                price: 10000
            },
            {
                poster: "",
                slug: "lamp",
                title: "В’язана лампа",
                store_name: `craft_man`,
                price: 10000
            },
            {
                poster: "",
                slug: "lamp",
                title: "В’язана лампа",
                store_name: `craft_man`,
                price: 10000
            },
            {
                poster: "",
                slug: "lamp",
                title: "В’язана лампа",
                store_name: `craft_man`,
                price: 10000
            },
        ]

        dispatch(setViewedHistory(test_data))
        dispatch(setFavoriteProducts(test_data))

    }, [dispatch])


    const viewedHistoryProducts = useSelector(state => state.products.viewedHistory)
    const favoritesProducts = useSelector(state => state.products.viewedHistory)

    useEffect(() => {


        switch (section) {
            case "last_viewed":
                setSectionBody({ title: "Останні переглягуті крафти", products: viewedHistoryProducts })
                break
            case "recommendations":
                setSectionBody({ title: "Рекомендовано для вас", products: favoritesProducts })
                break
            default:
                return "Type incorect"
        }
    }, [section, viewedHistoryProducts, favoritesProducts])

    const view_card = Array(sectionBody.products) ? sectionBody.products.map((element, index) => (
        <div key={index}>
            <ProductCard poster="" id={index} slug={element.slug} title={element.title}
                store_name={`@${element.store_name}`} price={`₴${element.price}`} />
        </div>
    )) : ''

    return (
        <div className={s.wrapper}>
            <h3 className={"section_title"}>{sectionBody.title}</h3>
            <div className={s.card_wrapper}>
                {view_card}
            </div>
        </div>
    )
}

export default StoreSection