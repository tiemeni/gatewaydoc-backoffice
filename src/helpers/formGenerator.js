/**
 * @store var that contains a store of our application
 * @type var that contains a type of form or a location where the form is generate
 * @dataId an id of a value that we want update
 */
export const getValueFromReducer = (store, type, dataId) => {
    let datas = [];

    if (!dataId) return null
    switch (type) {
        case "user":
            datas = store.Users.users;
            break;
        case "practitioner":
            datas = store.Practitioner.practitioner;
            break;
        case "speciality":
            datas = store.Specialities.specialites;
            break;
        default:
            break;
    }

    const filteredData = datas.find((data) => data._id === dataId);

    return filteredData;
};