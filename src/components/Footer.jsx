import style from './Footer.module.css'

function Footer() {
    return (
        <>
            <div className="container text-center pt-3">
                <div className="row">
                    <div className="col-sm-0 col-md-3"></div>
                    <div className="col-sm-12 col-md-6">
                        <h2 className="fw-bold">Iscriviti per rimanere aggiornato</h2>
                        <p className={`${style.textFooter} pb-3`}>Iscriviti alla nostra newletter per rimanere sempre aggiornato su sconti e novità</p>

                        <form className="row" action="#">
                            <div className="col-9">
                                <input type="email" className="form-control pe-1" id="exampleFormControlInput1" placeholder="Inserisci la tua e-mail"></input>
                            </div>
                            <div className="col-3">
                                <button type="submit" className={`btn mb-3 ${style.aqua} align-middle`}><i class={`fa-regular fa-paper-plane fs-3`}></i></button>
                            </div>
                        </form>
                        <div className="container d-flex justify-content-center gap-4">
                            <div className={`${style.socialIcon}`}><i className={` ${style.aqua} fa-brands fa-facebook-f`}></i></div>
                            <div className={`${style.socialIcon}`}><i className={`${style.aqua} fa-brands fa-x-twitter`}></i></div>
                            <div className={`${style.socialIcon}`}><i className={`${style.aqua} fa-brands fa-youtube`}></i></div>
                            <div className={`${style.socialIcon}`}><i className={`${style.aqua} fa-brands fa-linkedin-in`}></i></div>
                            <div className={`${style.socialIcon}`}><i className={`${style.aqua} fa-brands fa-instagram`}></i></div>
                        </div>
                        <p className={`${style.textFooter} mt-3`}><i class="fa-regular fa-copyright"></i>2025 BooLanding Product. Designed by Boolean</p>
                    </div>
                    <div className="col-sm-0 col-md-3"></div>
                </div>
            </div >
        </>
    )
}

export default Footer