import LinkModel from './genus/links.view'
import BrandView from './genus/brand.view'
import ProductView from './plug/products.view'
import GuapView from './guap/guap.view'

export default (view) => {

    switch (view.data.model) {
        case "link":
            return <LinkModel data={view.data} id={view.data.id}/> 
        case "brand":
            return <BrandView data={view.data} id={view.data.id}/>
        case "product":
            return <ProductView data={view.data} id={view.data.id}/>
        case "service":
                return <ProductView data={view.data} id={view.data.id}/>
        case "guap":
                return <GuapView data={view.data} id={view.data.id}/>
        default:
            break;
    }
}

