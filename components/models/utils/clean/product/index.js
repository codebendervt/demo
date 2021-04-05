const initSingleOrder = (data) =>{
        
    let user = {}

    if(data.query.location){
        let location = JSON.parse(data.query.location)
        user.name = data.query.name
        user.contact = data.query.contact
        user.location = location
    
    }

    
    let _custom = JSON.parse(data.query.custom)


     let order = JSON.parse(_custom.data)
     let customOrder = JSON.parse(order.custom)


    let _order = {}

     _order.quantity = order.quantity;

    if(order.variant){
        console.log('variatns are supported now')
    }

    _order.price = customOrder.price
    _order.brand = customOrder.brand
    _order.id = customOrder.id
    _order.name = customOrder.name

    let _data = { }
    _data.user = user
    _data.product = _order


    console.log("order",_data)
    setData(_data)
}


export default initSingleOrder