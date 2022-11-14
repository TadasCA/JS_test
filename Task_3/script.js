/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const renderUsers = (users) => {
    const usersContainer = document.getElementById("output");
    usersContainer.innerHTML = "";

    users.forEach(user => {
    const login = document.createElement('p');
    login.innerText = "User: " + user.login;
  
    const avatarImage = document.createElement("img");
    avatarImage.src = user.avatar_url;
    avatarImage.setAttribute("alt", "Avatar image");
  
    const userCard = document.createElement('div')
    userCard.append(login, avatarImage);
    usersContainer.append(userCard);
    login.style.color = "darkred";
    avatarImage.style.width = '10vh';
    avatarImage.style.margin = '2rem';
    output.style.display = 'flex';
    output.style.flexWrap = 'wrap';
  })
};
  
  const fetchUsers = async () => {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        const data = await response.json();
        renderUsers(data);
      }
    } catch(error) {
      console.error(error);
    }
  };
  
 document.getElementById("btn").addEventListener('click', () => fetchUsers());