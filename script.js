(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");
  const okno = document.getElementById("okno");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    okno.style.display = "block";
    answer.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        const element = array.find((element) => element.id === 5);
        okno.style.display = "none";
        answer.innerHTML = "";
        if (element) {
          answer.innerHTML += `<strong>${element.id} - <span>${element.title}</span></strong>`;
          answer.innerHTML += `<p>${element.body}</p>`;
        } else {
          answer.innerHTML = "Post not found";
        }
      });


  });

  cw2.addEventListener("click", function () {
    answer.innerHTML = "Processing...";

    const newPost = {
      userId: 200,
      id: 201,
      title: "pawelek",
      body: "bartek",
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((response) => response.json())
      .then((data) => {
        answer.innerHTML = `Dodano nowy post o ID = ${newPost.id}`;
      });
    console.log(`Dodano nowy post o ID = ${newPost.id}`)
    //TODO
  });

  cw3.addEventListener("click", function () {
    //TODO
    answer.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        answer.innerHTML = "";
        array.forEach(function (element) {
          answer.innerHTML += `<strong>${element.id} - <span>${element.title}</span></strong>                                    <p>${element.body}</p>`;
        });
      });
  });
})();