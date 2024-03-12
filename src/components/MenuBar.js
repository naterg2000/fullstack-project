import Spacer from '../components/common/Spacer';

const MenuBar = () => {

    const buttons = ['Category 1', 'Category 2', 'Category 3'];


    return(
        <div className="border h-20 w-full flex flex-row space-x-4">
            this is the menu bar. This will contain every other top banner element
            <div>
                logo goes here
            </div>
            <CategoryButtonsComponent />
            <Spacer height="h-2" width="w-1" />
            <CartButton />
        </div>
    );




    // builder functions
    function CategoryButtonsComponent() {

        const handleClick = (key) => {
            console.log('clicked ', key);

            // do something useful here
        }

        return (
          <div>
            {buttons.map(text => (
              <button 
                key={text}
                className="border margin-2 padding-2"
                onClick={handleClick(text)}
                >
                    {text}
                </button>  
            ))}
          </div>
        )
    }

    function CartButton() {

        return (
            <div className="border flex flex-col justify-around">
                <button>Cart</button>
            </div>
        )
    }
};

function categoryButtonClickHandler() {}

export default MenuBar;