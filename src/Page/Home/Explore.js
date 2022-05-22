import React from "react";

const Explore = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl text-primary font-bold mb-6">
          Explore the Benefits
        </h1>
        <h1 className="text-2xl">
          Rely on the Plex Smart Manufacturing Platform to connect, automate,
          track, and analyze your operations.
        </h1>
      </div>
      <div className="grid grid-cols-2 w-9/12 mx-auto gap-10" >
        <div className="text-center w-6/12 mx-auto">
          <span class="material-symbols-outlined text-7xl">
            connect_without_contact
          </span>
          <div className=" text-2xl font-bold">Connect</div>
          <div>
            Stop working in silos. Connect people, systems, machines, and supply
            chains.
          </div>
        </div>
        <div className="text-center w-6/12 mx-auto">
          <span class="material-symbols-outlined text-7xl">autorenew</span>
          <div className=" text-2xl font-bold">Automate</div>
          <div>
            Remove error-prone manual processes. Automate business processes to
            drive efficiency
          </div>
        </div>
        <div className="text-center w-6/12 mx-auto">
          <span class="material-symbols-outlined text-7xl">data_saver_on</span>
          <div className=" text-2xl font-bold">Track</div>
          <div>
            Get a clear picture of your company. Track data from the plant floor
            to the top floor.
          </div>
        </div>
        <div className="text-center w-6/12 mx-auto">
          <span class="material-symbols-outlined text-7xl">analytics</span>
          <div className=" text-2xl font-bold">Analyze</div>
          <div>
            Make better decisions. Analyze the information that matters most.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
