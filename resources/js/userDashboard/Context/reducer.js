export default function reducer (state, action) {

switch (action.type) {

        case 'user/set':
            return {
                ...state,
                user: action.payload
            }
            break;
    }

    return state;
}