import React from "react";

const Ceo = () => {
  return (
    <div>
      <h1 className="text-5xl text-primary font-bold text-center my-20">
        About Our Ceo
      </h1>
      <div class="hero mb-10">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://cdn.cdnparenting.com/articles/2019/01/08144644/1211306812-H.webp"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">
              At Mrs.Alexander Hughes, our best feature is our global team of
              highly professional and knowledgeable individuals, who, through
              their hard work, passion, dedication and perceptiveness,
              continuously drive our firm forward. From middle-sized companies
              to Fortune 500 corporations, we are extremely proud to be able to
              advise our clients in the key process of acquiring and assessing
              their most precious assets: talented men and women. With its
              European roots and a global reach, we believe that Alexander
              Hughes is able to offer the best blend of in-depth sector
              expertise, a proven ability to quickly comprehend the client’s
              core business and human capital needs, as well as promptness and
              agility in conceiving high-end tailor-made solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceo;
