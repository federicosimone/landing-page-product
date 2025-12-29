import style from './Main.module.css'

function Main() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className={`col-12 col-md-6 ${style.duck}`}>ciao</div>
                    <div className={`col--12 col-md-6 text-center ${style.yellowBg}`}>

                        <h1 className="fw-semibold py-5 px-5">Rubber Duck Debuggings</h1>
                        <p className="py-2 px-3">Spiegare il codice a una paperella di gomma aiuta i programmatori a chiarire il pensiero e individuare gli errori nascosti</p>
                        <button className="btn btn-outline-dark px-3 py-2 my-3">ACQUISTALA SUBITO!</button>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main