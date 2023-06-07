import ShopInformation from "./Information/ShopInformation"

function Shop() {
    return (
        <div className="modal modal-container">

            <div className='modal-title'>
                <h1>Modal Title</h1>
            </div>

            <div className="modal-information">
                <ShopInformation/>
            </div>
            
        </div>
    )
}
  
export default Shop