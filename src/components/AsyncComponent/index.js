import React, { useState, useRef, useEffect } from 'react';

const asyncComponent = (importComponent) => {
  const AsyncComponent = (props) => {
    const [loaded, setLoaded] = useState(false);
    const importedComponent = useRef();

    useEffect(() => {
      const fetchComponent = async () => {
        const { default: component } = await importComponent();
        importedComponent.current = component;
        setLoaded(true);
      };

      fetchComponent();
    }, []);

    const Component = importedComponent && importedComponent.current;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return loaded ? <Component {...props} /> : null;
  };

  return AsyncComponent;
};

export default asyncComponent;
