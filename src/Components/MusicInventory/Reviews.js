import React from 'react'

function MReviews() {
  return (
      <>
        <h3 className='p-3 mt-2  bg-success text-white'> Music Reviews</h3>
        <div className="d-flex justify-content-around flex-wrap">
            <div className="card  mt-2 ml-2 d-flex" style={{width: "18rem"}}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Jnehru.jpg/1200px-Jnehru.jpg" className="card-img-top align-self-center" alt="..."  style={{height: "12rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">Nehru Pandit</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in aperiam repellendus rem nam tempora quo, nisi dolorem alias, eum quae qui beatae voluptas ex labore dolor minima vitae culpa dignissimos nobis doloremque! Alias?</p>
                </div>
            </div>
            <div className="card  mt-2 ml-2 d-flex" style={{width: "18rem"}}>
                <img src="https://www.thenewsminute.com/sites/default/files/AR_Rahman_1200.jpg" className="card-img-top align-self-center" alt="..."  style={{height: "12rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">AR Rahman</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in aperiam repellendus rem nam tempora quo, nisi dolorem alias, eum quae qui beatae voluptas ex labore dolor minima vitae culpa dignissimos nobis doloremque! Alias?</p>
                </div>
            </div>
            <div className="card  mt-2 ml-2 d-flex" style={{width: "18rem"}}>
                <img src="https://m.media-amazon.com/images/M/MV5BZDM0Y2E0NGUtZjcyYS00YTkyLWJlNDMtNmZiNzZmMWI5ZjVkXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg" className="card-img-top align-self-center" alt="..."  style={{height: "12rem"}}/>
                <div className="card-body">
                    <h5 className="card-title">Dinchak Pooja</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in aperiam repellendus rem nam tempora quo, nisi dolorem alias, eum quae qui beatae voluptas ex labore dolor minima vitae culpa dignissimos nobis doloremque! Alias?</p>
                </div>
            </div>
        </div>
      </>
  )
}

export default MReviews