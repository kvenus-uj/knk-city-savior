import React from "react";

interface PropType {
  setAddWarrior: any;
}

const ChooseWarriorModal: React.FC<PropType> = ({ setAddWarrior }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-lg tracking-widest py-20">
          No available warriors found
        </p>
        <div className="flex gap-5">
          <button
            onClick={() => setAddWarrior(false)}
            className="w-44 btn-primary"
          >
            Cancel
          </button>
          <button className="w-44 btn-secondary">Add to team</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseWarriorModal;
