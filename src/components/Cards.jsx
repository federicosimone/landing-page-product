import sunglasses from '../assets/product-item1.png'
import style from './Cards.module.css'
import batDuck from '../assets/product-item3.png'
import ClassicDuck from '../assets/product-item2.png'

const cards = [
    { id: 1, title: "Cool Duck", price: "$ 12,00", img: sunglasses },
    { id: 2, title: "Classic Duck", price: "$ 29,00", img: ClassicDuck },
    { id: 3, title: "Bat-Duck", price: "$ 69,00", img: batDuck }
];

function Cards() {
    return (
        <>

            <div className={`container ${style.fontSize08} mt-2 `}>
                <div className=" text-center my-3">
                    <h2 className="fw-bold">La collezione di paperelle</h2>
                    <p>Una paperella per ogni stile di programmazione</p>
                </div>
                <div className="row g-3">

                    {
                        cards.map(card => {
                            return (
                                <div id={card.id} className="col-12 col-md-4 mb-4 d-flex justify-content-center">
                                    <div className={`card ${style.duckCard}`} >
                                        <img src={card.img} className="card-img-top" alt="sunglasses-duck" />
                                        <div className="card-body pb-2 pt-3">
                                            <div className={` ${style.yellow}`}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                                            <p className="card-text mb-1 mt-1 fw-bolder">{card.title}</p>
                                            <p className={`${style.price} mb-1 fw-bolder`}>{card.price}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })



                    }


                </div>
            </div>

        </>
    )

}

export default Cards