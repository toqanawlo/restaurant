import { Axios } from "./main.js";
const getData = async () => {
  const res = await Axios.get("/restaurants");
  if (res.status === 200) {
    const data = res.data.data;
    console.log(data);

    const homeContainer = document.getElementById("main");
    data.forEach((element) => {
      const item = `
     <div class="w-7 flex gap-3 ">
          <h1 class="text-red-600">${element.name}</h1>
        </div>
    `;
      homeContainer.innerHTML += item;
    });
  } else {
  }
};

getData();
