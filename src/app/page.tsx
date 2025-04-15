import Header from "./components/header";

export default function Home() {
  return (
    <div className="">
      <Header />

      <main>
        <div className="relative">
          <div className="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/path/to/image1.jpg"
                  alt="Description 1"
                  className="w-full"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/path/to/image2.jpg"
                  alt="Description 2"
                  className="w-full"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/path/to/image3.jpg"
                  alt="Description 3"
                  className="w-full"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
