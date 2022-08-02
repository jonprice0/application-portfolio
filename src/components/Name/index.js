function SplitText() {
    return(
        <span aria-label={this.props.copy} role={this.props.role}>
            {this.props.copy.split("").map(function(char, index){
                let style = {"animation-delay": (0.5 + index / 10) + "s"}
                return <span
                    aria-hidden="true"
                    key={index}
                    style={style}>
                        {char}
                </span>;
            })}
        </span>
    );
}

export default function Name() {
    return(
        <h1><SplitText copy="Jonathan Price" role="heading" /></h1>
    );
}