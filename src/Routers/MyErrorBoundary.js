import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import PropType from 'prop-types';

class MyErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  /*   componentDidCatch(error, errorInfo) {
    // Você também pode registrar o erro em um serviço de relatórios de erro
    // console.log(error, errorInfo);
  }
 */
  render() {
    if (this.state.hasError) {
      // Você pode renderizar qualquer UI alternativa
      return <Navigate to="/" replace />;
    }

    return this.props.children;
  }
}
MyErrorBoundary.propTypes = {
  children: PropType.node.isRequired,
};

export default MyErrorBoundary;
