import React from 'react';

const AsyncComponent = loadComponent => (
    class AsyncComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                Component: null
            };
        }

        async componentWillMount() {
            if (this.hasLoadedComponent()) {
                return;
            }

            try {
                const { default: Component } = await loadComponent();
                this.setState({ Component });
            } catch (err) {
                throw err;
            }
        }

        hasLoadedComponent() {
            return this.state.Component !== null;
        }

        render() {
            const { Component } = this.state;
            return (!!Component) ? <Component {...this.props} /> : null;
        }
    }
);

export default AsyncComponent;