export const SolutionData = [
  {
    id: 1,
    solution: (
      <div>
        Given curves are <br />
        x=a(θ+sinθ),y=a(1−cosθ)
        <br />
        ∴ dx dy ​ = dx/dθ dy/dθ ​ <br />
        = a(1+cosθ) a(sinθ) ​ = 2cos²θ ​ <br />
        2sin²θ ​ cos²θ ​ ​ = tan²θ ​<br />
        ⇒( dx dy ​ ) (θ= 2π ​ ) ​ = tan⁴π ​ = 1 <br />
        At θ= 2π ​ ,y=a
        <br />
        (1−cos²π​ )=a
        <br />∴ length of normal = y √(1+( dx dy ​ )²) ​ = a √(1+1²) ​ = 2a
      </div>
    ),
    likes: 12,
  },
  {
    id: 2,
    solution: (
      <div>
        Given curves are <br />
        x=a(θ+sinθ),y=a(1−cosθ)
        <br />
        ∴ dx dy ​ = dx/dθ dy/dθ ​ <br />
        = a(1+cosθ) a(sinθ) ​ = 2cos²θ ​ <br />
        2sin²θ ​ cos²θ ​ ​ = tan²θ ​<br />
        ⇒( dx dy ​ ) (θ= 2π ​ ) ​ = tan⁴π ​ = 1 <br />
        At θ= 2π ​ ,y=a
        <br />
        (1−cos²π​ )=a
        <br />∴ length of normal = y √(1+( dx dy ​ )²) ​ = a √(1+1²) ​ = 2a
      </div>
    ),
    likes: 10,
  },
  {
    id: 3,
    solution: (
      <>
        <style>
          {`
          .video-container {
            position: relative;
            width: 80%;
            height: 500px;
            margin: 0 auto;
          }
    
          @media only screen and (max-width: 600px) {
            .video-container {
              width: 100%;
              height: 250px;
            }
          }
          `}
        </style>

        <div className="video-container">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/9ebJlcZMx3c"
            title="Solution 1"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </>
    ),
    likes: 32,
  },
];

export default SolutionData;
