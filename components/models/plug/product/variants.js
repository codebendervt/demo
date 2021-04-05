const variants = [{
    name:"name",
    type:"text",
    label:"Name"
},{
    name:"cost",
    type:"number",
    label:"Additional Cost"
}
]



export default {
    data: [
        {
            name:"variant",
            label:"Variant Name",
            type:"text",
        },  {
            name:"variants",
            label:"Add Variants",
            type:"list",
            data: variants
        },{
            name:"type",
            label: "Variant Type",
            type: "options",
            options: ["default"]
        }
    ]
}


