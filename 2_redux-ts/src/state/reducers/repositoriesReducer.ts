import { ActionType } from '../action-types';
import { Action } from '../actions';

/**
 * Represents the state of the repositories in the Redux store.
 */
interface RepositoriesState {
    /**
     * Indicates whether the repositories are currently being loaded.
     */
    loading: boolean;
    /**
     * Contains any error message related to the repositories.
     * If there is no error, this property is null.
     */
    error: string | null;
    /**
     * Contains an array of strings representing the names of the repositories.
     */
    data: string[];
};

const initialState = {
    loading: false,
    error: null,
    data: []
};

/**
 * Reducer function for managing the state of packages.
 * @param state - The current state of packages.
 * @param action - The action to be performed on the state.
 * @returns The new state of packages after the action has been performed.
 */
const reducer = (
    state: RepositoriesState = initialState,
    action: Action
): RepositoriesState => {

    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] };
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default reducer;