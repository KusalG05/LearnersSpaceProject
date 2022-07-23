import React from 'react'

function SReviews() {
  return (
    <>
      <h3 className='p-3 mt-2  bg-success text-white'> Sports Reviews</h3>
      <div className="d-flex justify-content-around flex-wrap">
        <div className="card  mt-2 ml-2 d-flex" style={{ width: "18rem" }}>
          <img src="https://images.mid-day.com/images/images/2021/jul/dhoni-july-seven_d.jpg" className="card-img-top align-self-center" alt="..." style={{ height: "12rem" }} />
          <div className="card-body">
            <h5 className="card-title">MS Dhoni</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in aperiam repellendus rem nam tempora quo, nisi dolorem alias, eum quae qui beatae voluptas ex labore dolor minima vitae culpa dignissimos nobis doloremque! Alias?</p>
          </div>
        </div>
        <div className="card  mt-2 ml-2 d-flex" style={{ width: "18rem" }}>
          <img src="https://m.media-amazon.com/images/M/MV5BZjA4ZjNmYzUtZDAwNS00MTk4LWIzYjEtYWFlZDJhYTk1MzcyXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg" className="card-img-top align-self-center" alt="..." style={{ height: "12rem" }} />
          <div className="card-body">
            <h5 className="card-title">Sushanth Singh</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in aperiam repellendus rem nam tempora quo, nisi dolorem alias, eum quae qui beatae voluptas ex labore dolor minima vitae culpa dignissimos nobis doloremque! Alias?</p>
          </div>
        </div>
        <div className="card  mt-2 ml-2 d-flex" style={{ width: "18rem" }}>
          <img src="https://images.news18.com/ibnlive/uploads/2022/05/untitled-design-21-5-16536454154x3.png" className="card-img-top align-self-center" alt="..." style={{ height: "12rem" }} />
          <div className="card-body">
            <h5 className="card-title">Balayya</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic in aperiam repellendus rem nam tempora quo, nisi dolorem alias, eum quae qui beatae voluptas ex labore dolor minima vitae culpa dignissimos nobis doloremque! Alias?</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SReviews