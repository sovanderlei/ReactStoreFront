import React from 'react';

export default class  ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message 
      

      console.log("============== Error: ");
      //console.log(error.toString());
      var myObj = JSON.parse(error.toString().replace("Error:", ""));
      console.log(myObj.message);
      console.log("============== Error: ");

      this.setState({
        error: myObj.message,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }

    static getDerivedStateFromError(error) {
      // Atualiza o state para que a próxima renderização mostre a UI alternativa.
      return { hasError: true };
    }
  
    

    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  }