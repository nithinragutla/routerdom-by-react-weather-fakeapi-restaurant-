import Table from 'react-bootstrap/Table';

function Menu() {
  return (
    <>
      <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#4A4A4A' }}>FOOD MENU</h1>
      <Table striped bordered hover responsive="sm" style={{ width: '80%', margin: 'auto', backgroundColor: '#e6ffe6', borderColor: 'green' }}>
        <thead style={{ backgroundColor: '#b3ffb3', color: 'green', fontWeight: 'bold' }}>
          <tr>
            <th>VEG</th>
            <th>PRICE</th>
            <th>NON VEG</th>
            <th>PRICE</th>
            <th>SOUPS</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Manchurian Fried Rice</td>
            <td>239/-</td>
            <td>Zafrani Biryani</td>
            <td>269/-</td>
            <td>Chicken Manchow Soup</td>
            <td>180/-</td>
          </tr>
          <tr>
            <td>Zafrani Paneer Biryani</td>
            <td>269/-</td>
            <td>Zafrani 65 Biryani</td>
            <td>299/-</td>
            <td>Paya Soup</td>
            <td>200/-</td>
          </tr>
          <tr>
            <td>Palak Paneer Roti</td>
            <td>300/-</td>
            <td>Zafrani Fish Biryani</td>
            <td>349/-</td>
            <td>Veg Manchow Soup</td>
            <td>250/-</td>
          </tr>
          <tr>
            <td>Zafrani Veg Biryani</td>
            <td>239/-</td>
            <td>Zafrani Prawn Biryani</td>
            <td>370/-</td>
            <td>Pasta Fogili Soup</td>
            <td>240/-</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Menu;
