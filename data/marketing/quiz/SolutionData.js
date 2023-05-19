// import node module libraries
import { v4 as uuid } from "uuid";

export const SolutionData = [
  {
    id: 1,
    solution: (
      <div>
        Given curves are <br />
        x=a(θ+sinθ),y=a(1−cosθ)
        <br />
        ∴ dx dy ​ = dx/dθ dy/dθ ​ <br />
        = a(1+cosθ) a(sinθ) ​ = 2cos 2 2 θ ​ <br />
        2sin 2 θ ​ cos 2 θ ​ ​ =tan 2 θ ​<br />
        ⇒( dx dy ​ ) (θ= 2 π ​ ) ​ =tan 4 π ​ =1 <br />
        At θ= 2 π ​ ,y=a
        <br />
        (1−cos 2 π​ )=a
        <br />∴ length of normal =y 1+( dx dy ​ ) 2 ​ =a 1+(1) 2 ​ = 2 ​ a
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
        = a(1+cosθ) a(sinθ) ​ = 2cos 2 2 θ ​ <br />
        2sin 2 θ ​ cos 2 θ ​ ​ =tan 2 θ ​<br />
        ⇒( dx dy ​ ) (θ= 2 π ​ ) ​ =tan 4 π ​ =1 <br />
        At θ= 2 π ​ ,y=a
        <br />
        (1−cos 2 π​ )=a
        <br />∴ length of normal =y 1+( dx dy ​ ) 2 ​ =a 1+(1) 2 ​ = 2 ​ a
      </div>
    ),
    likes: 10,
  },
  {
    id: 3,
    solution: (
      <iframe
        width="80%"
        height="500px"
        src="https://www.youtube.com/embed/9ebJlcZMx3c"
        title="Solution 1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    ),
    likes: 32,
  },
];

export default SolutionData;
