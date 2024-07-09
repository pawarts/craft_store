import Header from "../BaseComponents/Header/Header"
import CategorySection from "./components/Category/CategorySection"
import StoreSection from "./components/StoreSection"


const Main = (props) => {
    return (
        <div>
            <Header />
            <CategorySection />
            <StoreSection section="last_viewed" />
            <StoreSection section="recommendations" />
        </div>
    )
}

export default Main