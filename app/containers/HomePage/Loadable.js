/**
 * Asynchronously loads the component for HomePage
 */
import Loadable from 'react-loadable';
const LoadableScreen  = Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
export default LoadableScreen; 
