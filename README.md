# vuex_helper
帮助工具方法

# Installation

```
    npm install -S vuex_helper
```

# Example
```js
    import createNamespacedStore from 'vuex_helper';
    import Vuex from 'vuex';

    const demo = createNamespacedStore('nameSpace-demo', {
        state: {
            key1: ''
        },
        mutations: {},
        ...
    });

    const store = new Vuex.Store({
    	modules: {
    		demo
    	},
    	strict: process.env.NODE_ENV !== 'production'
    });

    // set module state
    store.commit('nameSpace-demo/key1.set', 'key1')
```

#Contribution
If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/jiereal/vuex_helper/issues) or a [pull request](https://github.com/jiereal/vuex_helper/pulls) .

#License
[MIT](https://opensource.org/licenses/MIT)