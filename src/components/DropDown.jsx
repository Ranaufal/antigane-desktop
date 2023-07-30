
"use client"

const DropDown = () => {
  var setIsExpanded = false; 

  const handleToggle = () => {
    setIsExpanded = !setIsExpanded;
    console.log(setIsExpanded)
  };

  return (
    <div>
      <button onClick={handleToggle} className="bg-accent p-3 hover:bg-accent-50 active:bg-accent">
        Dropdown
      </button>
      {setIsExpanded && (
        <div className="dropdown-content">
          {/* Dropdown content goes here */}
          <p>Dropdown Content 1</p>
          <p>Dropdown Content 2</p>
          <p>Dropdown Content 3</p>
        </div>
      )}
    </div>
  );
};

export default DropDown;
