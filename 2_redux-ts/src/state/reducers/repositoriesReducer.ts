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

interface Action {
    type: string;
    payload?: any;
};

/**
 * Reducer function for managing the state of packages.
 * @param state - The current state of packages.
 * @param action - The action to be performed on the state.
 * @returns The new state of packages after the action has been performed.
 */
const reducer = (
    state: RepositoriesState,
    action: any
): RepositoriesState => {
    switch (action.type) {
        case 'search_repositories':
            return { loading: true, error: null, data: [] };
        case 'search_repositories_success':
            return { loading: false, error: null, data: action.payload };
        case 'search_repositories_error':
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default reducer;