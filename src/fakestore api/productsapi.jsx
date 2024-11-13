import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {
    var [fic, setfix] = useState([]);
    var [s, sets] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((val) => {
            console.log(val);
            sets(val.data)
            setfix(val.data)
        })

    }, [])

    var sub = (e) => {

        console.log(e.target.value)
        var fil = fic.filter((val) =>
            val.category === e.target.value
        )
        sets(fil)
    }

    var descc = (e) => {
        let sorted = [...s];
        if (e.target.value === "asc") {
            sorted.sort((a, b) => a.price - b.price)
        } else {
            sorted.sort((a, b) => b.price - a.price)
        }
        sets(sorted)
    }


    var data = s.map((val, ind) => {
        return (
            <>
            
                <Card style={{ width: '18rem' }}>
                <Card.Header>{val.id}</Card.Header>
                <Card.Img variant="top" src={val.image} />
                <Card.Body>
                <Card.Title>{val.title}</Card.Title>
                <Card.Text>{val.category}</Card.Text>
                <Card.Text>{"price:"+val.price+"$"}</Card.Text>
                 <Button variant="primary">add to cart</Button>
                </Card.Body>
                </Card>
              
            </>
        )
    })

    return (
        <>
            <form action="" >
                <select name="" id="" onChange={sub}>
                    <option value="">All</option>
                    <option value="men's clothing">mens clothing</option>
                    <option value="women's clothing"> womens clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                </select>
                <select name="" id="" onChange={descc}>
                    <option value="asc" >price(low to high)</option>
                    <option value="desc" >price(hign to low)</option>
                </select>

            </form>
            <h1>products</h1>
            <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))", marginTop: "1rem" }}>{data}</div>
        </>
    )
}
export default Products;
