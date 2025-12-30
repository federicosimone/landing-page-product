import style from './Faqs.module.css'
import pcGirl from '../assets/single-image2.png'

function Faqs() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="mt-4 col-12 text-star text-md-center order-2 order-md-1">
                        <h2 className="fw-bold">FAQs</h2>
                    </div>
                    <div className={`order-1 col-sm-12 col-md-6 pt-3`}>
                        <img src={pcGirl} alt="pc-girl" className={`${style.pcGirl}`} />
                    </div>
                    <div className="col-12 col-md-6 order-3 order-md-3 mt-3">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Come posso utilizzare la paperella di gomma per il debugging?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className={`accordion-body ${style.faqsText}`}>Il rubber duck debugging è semplice: spiega il tuo codice alla paperella di gomma come se fosse un collega. Descrivendo ogni passo, potresti individuare errori o capire meglio il problema. La paperella non risponde, ma ti aiuta a chiarire i tuoi pensieri</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button  fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Quali sono i vantaggi di usare una paperella di gomma per i programmatori?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className={`accordion-body ${style.faqsText}`}>
                                        La paperella di gomma aiuta i programmatori a pensare in modo critico e a verbalizzare i problemi. Questo processo può portare a nuove intuizioni e soluzioni. Inoltre, è un ottimo strumento antistress e aggiunge un tocco di personalità alla scrivania.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button  fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Posso usare la paperella di gomma indipendentemente dal linguaggio di programmazione che utilizzo?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className={`accordion-body ${style.faqsText}`}>
                                        Assolutamente sì! La paperella di gomma è universale e funziona con qualsiasi linguaggio di programmazione. Non importa se stai scrivendo in Python, Java, C++ o qualsiasi altro linguaggio, la paperella sarà sempre pronta ad ascoltarti.

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Quanto dettagliatamente devo spiegare il mio codice alla paperella di gomma?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                    <div className={`accordion-body ${style.faqsText}`}>
                                        Dovresti spiegare ogni dettaglio del tuo codice. Più sei dettagliato, più è probabile che tu scopra errori o ottenga nuove prospettive. Questo processo ti costringe a rivedere attentamente ogni parte del tuo lavoro.

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="icons" className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-4 text-center pb-2">
                            <div><i className="fa-regular fa-star fs-3 pb-2"></i></div>
                            <h4 className="fw-bold">100% Prodotto di qualità</h4>
                            <p className={`accordion-body ${style.faqsText}`}>Abbiamo anche la possibilità di ritiro direttamente dallo stagno</p>
                        </div>
                        <div className="col-12 col-md-4 text-center pb-2">
                            <div><i class="fa-solid fa-bag-shopping fs-3 pb-2"></i></div>
                            <h4 className="fw-bold">Spedizione gratuita</h4>
                            <p className={`accordion-body ${style.faqsText}`}>Dal magazzino alla scrivania</p>
                        </div>
                        <div className="col-12 col-md-4 text-center pb-2">
                            <div><i className="fa-solid fa-coins fs-3 pb-2"></i></div>
                            <h4 className="fw-bold">Rimbordo garantito</h4>
                            <p className={`accordion-body ${style.faqsText}`}>Ti rimborsiamo se la paperella fa quack</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs