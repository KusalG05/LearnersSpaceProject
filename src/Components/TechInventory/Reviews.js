import React from 'react'

function TReviews() {
  return (
    <>
        <h3 className='p-3 mt-2  bg-success text-white'> Music Reviews</h3>
        <div className="d-flex justify-content-around flex-wrap">
            <div className="card  mt-2 ml-2 d-flex" style={{width: "18rem"}}>
                <img src="https://www.bollywoodhungama.com/wp-content/uploads/2022/07/SCOOP-Salman-Khan-confused-between-No-Entry-2-and-Dabangg-4-Which-film-will-he-start-in-January.jpeg" className="card-img-top align-self-center" alt="..."  style={{height: "12rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">Sallu Bhai</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in aperiam repellendus rem nam tempora quo, nisi dolorem alias, eum quae qui beatae voluptas ex labore dolor minima vitae culpa dignissimos nobis doloremque! Alias?</p>
                </div>
            </div>
            <div className="card  mt-2 ml-2 d-flex" style={{width: "18rem"}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg" className="card-img-top align-self-center" alt="..."  style={{height: "12rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">Abdul Kalam</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in aperiam repellendus rem nam tempora quo, nisi dolorem alias, eum quae qui beatae voluptas ex labore dolor minima vitae culpa dignissimos nobis doloremque! Alias?</p>
                </div>
            </div>
            <div className="card  mt-2 ml-2 d-flex" style={{width: "18rem"}}>
                <img src="https://ichef.bbci.co.uk/news/640/cpsprodpb/3BC8/production/_110640351_77da2d48-8be8-4b4a-b886-a6808cf04083.jpg" className="card-img-top align-self-center" alt="..."  style={{height: "12rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">Nambi Narayanan</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in aperiam repellendus rem nam tempora quo, nisi dolorem alias, eum quae qui beatae voluptas ex labore dolor minima vitae culpa dignissimos nobis doloremque! Alias?</p>
                </div>
            </div>
        </div>
      </>
  )
}

export default TReviews