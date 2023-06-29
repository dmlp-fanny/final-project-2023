export default function reducer (context, action) {

switch (action.type) {

        case 'attribute/set':
            return {
                ...context,
                width: action.payload
            }
            break;
    }

    return context;
}