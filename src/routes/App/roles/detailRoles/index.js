export default (store) => ({
    path : '/app/role/roles/detail-roles/:id',
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
          and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
            dependencies for bundling   */
        const detailRoles = require('./containers/detailRolesContainer').default
        // const reducer = require('./modules/realestateAdd').default
  
        /*  Add the reducer to the store on key 'counter'  */
        // injectReducer(store, { key: 'realEstateAdd', reducer })
  
        /*  Return getComponent   */
        cb(null, detailRoles)
  
        /* Webpack named bundle   */
      }, 'detailUsers')
    }
  })
  /**
 * Created by minmin on 10/9/18.
 */