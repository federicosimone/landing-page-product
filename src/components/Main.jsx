import style from './Main.module.css'
import blueduck from '../assets/invisible.png'
import Cards from '../components/Cards'
import Faqs from './Faqs'

const paragrafi = [
    { id: 1, title: "Lunga durata della batteria", text: "Goditi ore di assistenza continua nella risoluzione dei bug grazie alla lunga durata della 'batteria' (ovvero, la tua pazienza) della paperella di gomma." },
    { id: 2, title: "Compatibilità universale", text: "Funziona con tutti i linguaggi di programmazione e sistemi operativi. La paparella è l'unico strumento di debugging che non necessita di aggiornamenti" },
    { id: 3, title: "Design elegante", text: "Mostra con orgoglio il design elegante e raffinato della tua paperella di gomma, disponibile in vari colori per abbinarsi al tuo stile di programmazione" },
];

const paragrafi2 = [
    { id: 4, title: "Resistenza agli spruzzi", text: "Perfetta per resistere ai piccoli incidenti con caffè e bevande, la tua paperella di gomma non teme schizzi, mentenendoti sempre pronto per il dubugging." },
    { id: 5, title: "Portabilità", text: "Leggera e facile da trasportare, la paperella di gomma può essere il tuo compagno di lavoro ovunque tu vada. Portala con te per un supporto costante" },
    { id: 6, title: "Promemoria anti-stress", text: "Quando lo stress del codice diventa troppo, spremi la tua paperella di gomma per un rapido sollievo anti-stress, senza bisgono di software complicati" },
];

function Main() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className={`col-12 col-md-6 ${style.duck}`}></div>
                    <div className={`col--12 col-md-6 text-center ${style.yellowBg}`}>

                        <h1 className={`fw-semibold py-5 px-5 ${style.title}`}>Rubber Duck Debuggings</h1>
                        <p className="py-2 px-3">Spiegare il codice a una paperella di gomma aiuta i programmatori a chiarire il pensiero e individuare gli errori nascosti</p>
                        <button className="btn btn-outline-dark px-3 py-2 my-3">ACQUISTALA SUBITO!</button>

                    </div>
                </div>
            </div>
            {/*paragrafi con titolo*/}
            <div className="container py-5 px-5">
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        {
                            paragrafi.map((paragrafo1) => {
                                return (
                                    <div className=" text-center px-2 py-3">
                                        <h3 className="fw-semibold">{paragrafo1.title}</h3>
                                        <p className={style.fontSize08}>{paragrafo1.text}</p>
                                    </div>)
                            })
                        }
                    </div>

                    {/*immagine papero blu*/}
                    <div className={`${style.imgContainer} col-sm-12 col-md-4`}><img className={style.blueduck} src={blueduck} alt="blueduck" /></div>
                    {/*paragrafi con titolo*/}

                    <div className="col-sm-12 col-md-4">
                        {
                            paragrafi2.map((paragrafo2) => {
                                return (
                                    <div className="text-center px-2 py-3">
                                        <h3 className="fw-semibold">{paragrafo2.title}</h3>
                                        <p className={style.fontSize08}>{paragrafo2.text}</p>
                                    </div>)
                            })

                        }
                    </div>
                </div>
            </div>
            <div className={`container text-center ${style.fontSize08}`}>
                <h2 className="fw-semibold pb-3">Cosa ne pensano i nostri sviluppatori</h2>
                <div className="row">

                    <div className="col-sm-1 col-md-4">
                        <p>"La paperella di gomma è diventata il mio strumento di debugging preferito. Spiegare i problemi al mio 'assistente' silenzioso mi ha aiutato a risolvere bug che altrimenti mi avrebbero fatto impazzire. E' anche un ottimo antistress nelle giorate difficili!"</p>
                        <div className={` ${style.yellow}`}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                        <p className="fw-semibold pt-2">David William - Feb 22, 2023</p>
                    </div>
                    <div className="d-none d-md-block col-md-4">
                        <p>"Non avrei mai immaginato quanto una semplice paperella di gomma potesse fare la differenza. È incredibile come verbalizzare i problemi davanti alla paperella mi aiuti a vedere soluzioni che prima non notavo. Inoltre, è carinissima sulla mia scrivania!"</p>
                        <div className={` ${style.yellow}`}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                        <p className="fw-semibold pt-2">Emma Turner - April 5, 2023</p>
                    </div>
                    <div className="d-none d-md-block col-md-4">
                        <p>"Da quando ho adottato la paperella di gomma, il mio processo di debugging è migliorato notevolmente. La trovo molto utile per schiarirmi le idee e trovare errori nascosti. La porto sempre con me, ovunque vada!"</p>
                        <div className={`${style.yellow}`}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                        <p className="fw-semibold pt-2">Rachel Bryan - April 18, 2023</p>
                    </div>

                </div>

            </div>

            <Cards />
            <Faqs />


        </>
    )
}

export default Main