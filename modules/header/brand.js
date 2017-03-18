class Brand extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div class={this.props.className}>
                <Image src={this.props.imageSrc}></Image>
                <h3>{this.props.name}</h3>
            </div>
        );
    }
}