(function () {
  // const example = document.getElementById("example");
  // const cw1 = document.getElementById("cw1");
  // const cw2 = document.getElementById("cw2");
  // const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");
  // const okno = document.getElementById("okno");
  const myJson = document.getElementById("myJson");
  const lab_3 = document.getElementById("lab_3");
  const tabela = document.getElementById("tabela");
  const tabela_weather = document.getElementById("weather");
  const cm_2 = document.getElementById("cm_2");
  const token = "lnxnRNqAlVwuHRGxcGbkALRkpMHWtOXJ";

  // example.addEventListener("click", function () {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((array) => {
  //       console.log(array);
  //       answer.innerHTML = JSON.stringify(array);
  //     });
  // });

  myJson.addEventListener("click", function () {
    answer.innerHTML = "";
    tabela.innerHTML = "";
    const postUrl =
      "https://my-json-server.typicode.com/lewapFT9/jsonDataBase/posts";
    const commentUrl =
      "https://my-json-server.typicode.com/lewapFT9/jsonDataBase/comments";

    Promise.all([
      fetch(postUrl).then((response) => response.json()),
      fetch(commentUrl).then((response) => response.json()),
    ]).then(([posts, comments]) => {
      posts.forEach(function (post) {
        answer.innerHTML += `<strong>${post.id}</strong> - ${post.title}<br>`;
        comments.forEach(function (comment) {
          if (comment.postId === post.id) {
            answer.innerHTML += `&nbsp;&nbsp;Comment: <strong>${comment.id}</strong> - ${comment.body}<br>`;
          }
        });
      });
    });
  });

  // cw1.addEventListener("click", function () {
  //   okno.style.display = "block";
  //   //answer.innerHTML = "Loading...";
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((array) => {
  //       const element = array.find((element) => element.id === 5);
  //       okno.style.display = "none";
  //       answer.innerHTML = "";
  //       if (element) {
  //         answer.innerHTML += `<strong>${element.id} - <span>${element.title}</span></strong>`;
  //         answer.innerHTML += `<p>${element.body}</p>`;
  //       } else {
  //         answer.innerHTML = "Post not found";
  //       }
  //     });
  // });

  // cw2.addEventListener("click", function () {
  //   answer.innerHTML = "Processing...";

  //   const newPost = {
  //     userId: 200,
  //     id: 201,
  //     title: "pawelek",
  //     body: "bartek",
  //   };

  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newPost),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       answer.innerHTML = `Dodano nowy post o ID = ${newPost.id}`;
  //     });
  //   console.log(`Dodano nowy post o ID = ${newPost.id}`);
  //   //TODO
  // });

  // cw3.addEventListener("click", function () {
  //   //TODO

  //   okno.style.display = "block";
  //   //answer.innerHTML = "Loading...";
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((array) => {
  //       okno.style.display = "none";
  //       answer.innerHTML = "";
  //       array.forEach(function (element) {
  //         answer.innerHTML += `<strong>${element.id} - <span>${element.title}</span></strong>                                    <p>${element.body}</p>`;
  //       });
  //     });
  // });

  lab_3.addEventListener("click", function () {
    answer.innerHTML = "";
    tabela_weather.innerHTML="";
    tabela.innerHTML =
      "<tr><th>Name</th><th>Capital</th><th>Population</th><th>Region</th><th>Subregion</th></tr>";
    fetch("https://restcountries.com/v3.1/capital/Warsaw")
      .then((response) => response.json())
      .then((array) => {
        tabela.innerHTML += `<tr><td>${array[0].name.common}</td><td>
        ${array[0].capital}</td><td>${array[0].population}</td>
        <td>${array[0].region}</td><td>${array[0].subregion}</td></tr>`;
      });
  });
  cm_2.addEventListener("click", function () {
    tabela.innerHTML = "";
    tabela_weather.innerHTML = "<tr><th>Id</th><th>Name</th><th>DataCoverage</th><th>MinDate</th><th>MaxDate</th></tr>";
    const response = fetch(
      "https://www.ncei.noaa.gov/cdo-web/api/v2/stations",
      {
        method: "GET",
        headers: {
          token: token,
        },
      },
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.results.forEach(function (element) {
          tabela_weather.innerHTML += `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.datacoverage}</td>
<td>${element.mindate}</td><td>${element.maxdate}</td></tr>`;
        });
      });
  });
})();
