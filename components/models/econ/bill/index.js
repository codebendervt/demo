export default {
    data: [
        {
            name: "bill_name",
            label: "Bill Name",
            type: "text",
            placeholder: "Spotify"
        },
        {
            name: "bill",
            label: "Bill Amount",
            type: "number",
            placeholder: "R60"
        }
        ,
        {
            name: "bill_type",
            label: "Bill Type",
            type: "options",
            options: ["Credit", "Debt"]
        }
    ]
}