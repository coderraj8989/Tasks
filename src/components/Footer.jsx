const Footer = ({itemList}) => {
    
    let totalActiveTasks=0;
    itemList.map((itemObj)=>{
        if(itemObj.isCompleted===false)
        totalActiveTasks++;
        return true;
    });

    console.log('rerendered');
    return (
        <>
            <div className="flex flex-col items-center mt-8">
                <p className="text-xl">You have {totalActiveTasks} active tasks on your Tasks list</p>
                <p> ritikrajofficial&copy;2022</p>
            </div>
        </>
    );
};

export default Footer;