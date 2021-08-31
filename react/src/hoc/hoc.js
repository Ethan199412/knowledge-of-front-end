function withSubscription(WrappedComponent, selectedData) {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: selectedData(DataSource, props)
            }
        }

        componentDidMount() {

        }

        componentWillUnmount() {

        }
    }
}