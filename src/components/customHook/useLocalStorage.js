const useLocalStorage = () =>{
    const handAddItem = (items) =>{
        localStorage.setItem('items', JSON.stringify(items));
    }
    const handGetItems = () => JSON.parse(localStorage.getItem('items')) || [];
    return{
        handAddItem,
        handGetItems
    }
}
export default useLocalStorage