import MyErrorBoundary from './MyErrorBoundary';
import PropType from 'prop-types';

const Myroute = ({ children }) => {
  return <MyErrorBoundary>{children}</MyErrorBoundary>;
};

Myroute.propTypes = {
  children: PropType.node.isRequired,
};
export default Myroute;
