function FooterMenu(props) {
    return (
        <div className={`${props.title} footer-menu-sec`}>
            <h3 className="footer-menu-title">{props.title}</h3>
            <ul className="footer-list">
                {props.list.map((item, index) => (
                    <li className="footer-item" key={index}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FooterMenu;