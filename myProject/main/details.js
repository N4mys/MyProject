const API = "http://localhost:3000/goods";
const detailBlock = document.getElementById("detail");

async function getOneGood(id) {
  const res = await fetch(`${API}/${id}`);
  const data = await res.json();

  detailBlock.innerHTML = `
  <section style="background-color: #eee;">
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="card" style="border-radius: 15px;">
          <div class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="${data.image}"
              style="border-top-left-radius: 15px; border-top-right-radius: 15px;" class="img-fluid"
              alt="Laptop" />
            <a href="#!">
              <div class="mask"></div>
            </a>
          </div>
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <div>
                <p><a href="#!" class="text-dark">${data.title}</a></p>
                <p class="small text-muted">Shoes</p>
              </div>
                <p class="small text-muted">Rated 5/5</p>
              </div>
            </div>
          </div>
          <hr class="my-0" />
          <div class="card-body pb-0">
            <div class="d-flex justify-content-between">
              <p><a href="#!" class="text-dark">${data.price}</a></p>
              <p class="text-dark">${data.description}</p>
            </div>
            <p class="small text-muted">VISA Platinum</p>
          </div>
          <hr class="my-0" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center pb-2 mb-1">
              <a href="#!" class="text-dark fw-bold">Cancel</a>
              <button type="button" class="btn btn-primary">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  `;
  console.log(data);
}

const id = localStorage.getItem("detail-id");
getOneGood(id);
