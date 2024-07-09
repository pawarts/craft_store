import ProductCard from '../../BaseComponents/Product/ProductCard';
import s from './styles/StoreSection.module.css'

const StoreSection = (props) => {

    const { section } = props;

    const sectionTitle = (section) => {
        switch (section) {
            case "last_viewed":
                return "Останні переглягуті крафти"
            case "recommendations":
                return "Рекомендовано для вас"
            default:
                return "Type incorect"
        }
    }


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

    const view_card = test_data.map((element, index) => (
        <div key={index}>
            <ProductCard poster="" id={index} slug={element.slug} title={element.title}
                store_name={`@${element.store_name}`} price={`₴${element.price}`} />
        </div>
    ))

    return (
        <div className={s.wrapper}>
            <h3 className={"section_title"}>{sectionTitle(section)}</h3>
            <div className={s.card_wrapper}>
                {view_card}
            </div>
        </div>
    )
}

export default StoreSection