import lodash from 'lodash';
import {createNamespacedHelpers} from 'vuex';

function createMutations(initialState) {
    return Object.keys(initialState).reduce((obj, key) => {
        obj[`${key}.set`] = (state, value) => {
            if (initialState[key] === null || lodash.isPlainObject(initialState[key])) {
                state[key] = Object.assign({}, state[key], lodash.cloneDeep(value));
            } else {
                state[key] = value;
            }
        };
        return obj;
    }, {});
}

export default function createNamespacedStore(name, {state: initialState, mutations = {}, actions = {}, getters = {}}) {
    const {mapMutations, mapState, mapActions, mapGetters} = createNamespacedHelpers(name);
    const _mutations = {
        ...createMutations(initialState),
        ...mutations
    };
    return {
        namespaced: true,
        state: lodash.cloneDeep(initialState),
        getters,
        actions,
        mutations: _mutations,
        mapState,
        mapMutations,
        mapGetters,
        mapActions
    };
}
