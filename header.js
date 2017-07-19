class Header extends React.Component {
    render() {
        return (
        <div className="App-header">
            <div className="App-logo-container">
                <img className="App-logo" src={this.props.logo} />
            </div>
            <div  className="App-intro">
                <span>
                    {this.props.title}
                </span>
            </div>
        </div>)
    }
}