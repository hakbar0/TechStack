export const selectLibrary = (libraryId) => {
    return {
        type: 'selecT_library',
        payload: libraryId
    };
};