import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return function (dispatch, getState) {
        const promise = await jsonPlaceholder.get('/posts');

        return {
            type: 'FETCH_POSTS',
            payload: promise
        };
    }
};