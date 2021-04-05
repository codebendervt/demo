var Sortable = null;
if (typeof window !== 'undefined') {
    Sortable = require('@shopify/draggable');

    const sortable = new Sortable.Sortable(document.querySelectorAll('ul'), {
        draggable: 'li'
    });

    sortable.on('sortable:stop', (e) => console.log('sortable:stop', e.data.dragEvent.sourceContainer.children));
}




// const sortable = new Sortable(document.querySelectorAll('ul'), {
//   draggable: 'li'
// });



// sortable.on('sortable:start', (e) => console.log('sortable:start'));
// sortable.on('sortable:sort', () => console.log('sortable:sort'));
// sortable.on('sortable:sorted', () => console.log('sortable:sorted'));



export default function Draggable(props) {

    return (

        <ul>
            {props.children}
            <li className="text-white cursor-emoji" id="1">name</li>
            <li className="text-white cursor-emoji" id="2">surname</li>
            <li className="text-white cursor-emoji" id="3">password</li>
        </ul>

    )
}



