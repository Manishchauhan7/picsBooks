import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
export default function Centered() {
  return (
    <div className='Carousel'> 
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/images/post/12.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="/images/post/13.jpg" class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src="/images/post/14.jpg" class="d-block w-100" alt="..."/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    </div>
    <div class="card">
  <div class="card-header bg-secondary text-white">
    Here we Go !
  </div>
  <div class="card-body">
    <h5 class="card-title">Welcome into PicsBooks</h5>
    <p class="card-text fs-4">Hello everyone this is PicsBooks where we can share your all picture it has awesome user experience.We hope you will enjoy it a lot. <b/> Thank you all to come here!.</p>
    <a href="https://www.pexels.com/" class="btn btn-primary">See More !</a>
  </div>
</div>
  </div>
    

    )
  
}
