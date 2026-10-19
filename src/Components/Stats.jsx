

export default function Stats(props){
    return(
        <div className="stats">
            <div className="stat">{props.stars}</div>
            <div className="stat">{props.downloads}</div>
            <div className="stat">{props.issues}</div>
        </div>
    );
}