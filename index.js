fetch("https://fakestoreapi.com/products")
  .then((data) => {
    //   console.log(data);   json format
    return data.json(); //converting into objects
  })
  .then((objectData) => {
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values) => {
      tableData += `

<td>${values.title}</td>
<td>${values.description}</td>
<td>${values.price}</td>
<td><img src="${values.image}"/></td>
</tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  });
