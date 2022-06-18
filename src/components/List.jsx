const List = ({ itemList, setItemList, state, setState}) => {
    

    const deleteItem = (key) => {
        const newList = itemList.filter((itemObj) => {
            return itemObj.key !== key;
        });
        setItemList(newList);
    };

    const handleCheck = (key) => {
        itemList.map((itemObj)=>{
            if(itemObj.key===key)
            {
                itemObj.isCompleted=!itemObj.isCompleted;
                setState(!state);
            }
            return true;
        });
    }

    const styleCompleted = {
        textDecoration: "line-through",
        fontStyle: "italic",
        color: "black",
        background: "#558000"
    }
    
    return (
        <>
            <div
                className="flex flex-col items-center mt-2">
                {itemList.map((itemObj) => {
                    return (
                        <div
                            key={itemObj.key}
                            className="flex justify-around items-center w-[100%] mt-2">
                            <input className="w-4 h-4 border-2 rounded-full" id="cb1" type="checkbox" onChange={()=>handleCheck(itemObj.key)} />
                            <p
                                className="p-2 bg-[#7CBB00] rounded-lg md:w-[56%] w-[59%] text-white"
                                style={itemObj.isCompleted?styleCompleted:null}>
                                {itemObj.item}
                            </p>
                            <button
                                onClick={() => deleteItem(itemObj.key)}
                                className="px-2 py-2 bg-red-700 text-white rounded-lg md:w-1/5 w-[24%]">
                                del -
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default List;