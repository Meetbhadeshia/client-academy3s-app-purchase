function Biography(props) {
    return (
        <div className="biography">
            <div className="biography-inner">
                <h3 className="heading">{props.title}</h3>
                <p className="text">{props.text1}</p>
                <p className="text">{props.text2}</p>
            </div>
        </div>
    );
}

export default Biography;