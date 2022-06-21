// Modal component 

const Modal = ({ open, close, children }) =>  {

    // this is a guard for 
    // if open is true else if it false it should excute the code within the else block 
    if (!open) {
      
        return;
        
    } else {
        
        return (
        
            <>
                
            <div className="fixed top-0 right-0 bottom-0 left-0 z-50" id ="overlay">
                
                <div className="bg-stone-50 fixed top-1/3 left-1/2 z-50 p-12 -translate-x-2/4 -translate-y-2/4">

                        {/* the children will diplay the data within the todo form component the one within the modal component  */}
                    <p className="text-center pb-2 font-medium text-base capitalize">{children}</p>        
                   
                    <button type="submit" onClick={close} className="sm:text-sm lg:text-base lg:py-2 lg:px-4 sm:p-2 text-white rounded-md" id="btnbgcolor">
                        
                       Okay
                        
                    </button>
                     
                </div>
                
            </div>
                
            </>
            
        );
        
    }
    
}

export default Modal;