import logo from '../assets/logo.png'
import style from '../components/Header.module.css'

const navbarList = [
    { id: 1, title: "Home", link: "#" },
    { id: 2, title: "I punti di forza", link: "#" },
    { id: 3, title: "Recensioni", link: "#" },
    { id: 4, title: "Paperelle", link: "#" },
    { id: 5, title: "FAQs", link: "#" },
    { id: 6, title: "Newsletter", link: "#" }
];


export default function Header() {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    {/*LOGO*/}
                    <div>
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top ms-2" />
                        </a>
                    </div>
                    {/*LISTA NAVBAR*/}
                    <ul className="list-unstyled d-md-flex gap-5 mb-0 d-none me-4">

                        {
                            navbarList.map((item) => {
                                return <li key={item.id}><a className="text-decoration-none" href={item.link}>{item.title}</a></li>
                            })
                        }
                    </ul>
                    {/*menu a tendina, presente solo nel mobile*/}
                    <div className="d-md-none d-lg-none">
                        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i className="fa-solid fa-bars fs-2"></i></button>

                        <div className="offcanvas offcanvas-end w-75" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                            <div className="offcanvas-header">
                                <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-top" />
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul className="list-unstyled">

                                    {
                                        navbarList.map((item) => {
                                            return <li className="pb-3" key={item.id}><a className="text-decoration-none" href={item.link}>{item.title}</a></li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}





