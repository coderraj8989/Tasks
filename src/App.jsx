import { useState } from "react";
import List from "./components/List";
import Footer from "./components/Footer";

const App = () => {
    const [currentItem, setCurrentItem] = useState("");
    const [itemList, setItemList] = useState([]);
    const [state, setState]=useState(false);

    const handleChange = (e) => {
        setCurrentItem(e.target.value);
    };

    const handleClick = () => {
        if (!currentItem) {
            alert("enter valid task first!");
        }
        else {
            setItemList([...itemList, { key: Date.now(), item: currentItem, isCompleted: false }]);
            setCurrentItem("");
        }
    };

    return (
        <>
            <div className="bg-purple-700 container mx-auto md:w-1/2 flex flex-col items-center rounded-xl">
                <h1 className="text-5xl p-3 mx-auto flex">Tasks
                    <img src="https://cdn-icons-png.flaticon.com/512/4472/4472515.png" className="w-10 h-10 mx-4 mt-1" alt="img" />
                </h1>
                <div className="flex justify-around items-center mt-4 md:w-[70%] w-[100%]">
                    <input
                        value={currentItem}
                        onChange={handleChange}
                        type="text"
                        placeholder="enter task...."
                        className="p-2 rounded-lg outline-none md:w-[56%] w-[59%] md:ml-12 ml-9" />
                    <button
                        onClick={handleClick}
                        className="px-7 py-2 bg-blue-700 text-white rounded-lg">
                        Add +
                    </button>
                </div>
                <div className="md:w-[70%] w-[100%] mb-5">
                    <List itemList={itemList} setItemList={setItemList} state={state} setState={setState} />
                    <Footer itemList={itemList} />
                </div>
            </div>
        </>
    );
}

export default App;