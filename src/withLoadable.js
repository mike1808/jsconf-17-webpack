import Loadable from 'react-loadable';

import Loading from './Loading';

const withLoadable = loader => Loadable({
  loader,
  loading: Loading,
});

export default withLoadable;
