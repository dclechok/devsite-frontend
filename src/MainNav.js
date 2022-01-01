import './MainNav.css';

function MainNav(){

    return (
        <div className="title-container">
            {/* Title (left) Nav (Right) */}
            <h1>Daniel C. Lechok <span className="subtitle">Welcome to my development portfolio.</span></h1>
            <div className="nav">
                about | projects | contact
            </div>

        </div>
    );
}

export default MainNav;