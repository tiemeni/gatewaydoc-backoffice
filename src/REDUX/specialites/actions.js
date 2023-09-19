import * as types from './types'

export const saveSpecialities = (payload) => {
    return {
        type: types.SAVE_SPECIALITIES,
        payload
    }
}


export default {
    save: saveSpecialities
}