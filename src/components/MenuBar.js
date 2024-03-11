const MenuBar = () => {

    const buttons = ['Category 1', 'Category 2', 'Category 3'];


    return(
        <div className="border h-20 w-full flex flex-row">
            this is the menu bar. This will contain every other top banner element
            <div>
                logo goes here
            </div>
            <div>
                <CategoryButtonsComponent />
            </div>
        </div>
    );


    // builder functions

    function CategoryButtonsComponent() {
        return (
          <div>
            {buttons.map(text => (
              <button className="border margin-2 padding-2" key={text}>{text}</button>  
            ))}
          </div>
        )
      }
};

export default MenuBar;