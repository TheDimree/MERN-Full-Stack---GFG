import Card from "./Card";
const Products=()=>{
    let proData=[
        {"id":1,"name":"A","price":2345,"image":"https://picsum.photos/200/300"},
        {"id":2,"name":"B","price":3345,"image":"https://picsum.photos/200/300"},
        {"id":3,"name":"C","price":4345,"image":"https://picsum.photos/200/300"},
        {"id":4,"name":"D","price":5345,"image":"https://picsum.photos/200/300"}
    ];
    const addCart=(id)=>{
        alert(id);
    }
    return (
        <div>
            <h2> Latest Products</h2>
            {proData.map(prod=> 
                <Card key={prod.id} product={prod} addCart={addCart}/>
            )}
        </div>
    )
}
export default Products;