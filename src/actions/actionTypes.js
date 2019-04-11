export default {
  SIDEBAR: {
    LOADING: {
      START: '/sidebar/loading/start',
      SUCCESS: '/sidebar/loading/success',
    },
  },
  DOMAIN: {
    ENVIRONMENTS: {
      LIST: {
        LOADING: {
          START: '/domain/environments/loading/start',
          SUCCESS: '/domain/environments/loading/success',
        },
        REMOVE: {
          START: '/domain/environments/remove/start',
          SUCCESS: '/domain/environments/remove/success',
          FAILED: '/domain/environments/remove/failed',
        },
        CREATE: {
          START: '/domain/environments/create/start',
          SUCCESS: '/domain/environments/create/success',
          FAILED: '/domain/environments/create/failed',
        },
      },
    },
  },
  PREDICATES: {
    LIST: {
      LOADING: {
        START: '/predicates/list/load/start',
        SUCCESS: '/predicates/list/load/success',
      },
    },
  },
  COUNTER: {
    DECREASE: '/counter/decrease',
    INCREASE: '/counter/increase',
  },
  CONFIG: {
    LOADING: {
      START: '/config/loading/start',
      SUCCESS: '/config/loading/success',
    },
  },
};
