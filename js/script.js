// კატალოგის ღილაკის ფუნქციონალობა (კატალოგის გახსნა და დახურვა)
const catalogToggle = document.getElementById('catalog-toggle');
const catalogMenu = document.getElementById('catalog-menu');

catalogToggle.addEventListener('click', () => {
  
// გაჯიტდა იფ პირობაში არ შედიოდა ეგრევე ამიტო getComputedStyl სტილის დამტება დაჭირდა 
  const currentDisplay = window.getComputedStyle(catalogMenu).display;
  if (currentDisplay === "block") {

    catalogMenu.style.display = "none";
  } else {
    catalogMenu.style.display = "block";
  }
});
 
 

function displenonestyle(){
    const classNames= [ 'gasaqrobi']

    classNames.forEach(className => {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach(element => {
          element.style.display = 'none';
        });
      });

}

  // ფუნქცია, რომელიც აჩვენებს ფილტრირებულ მონაცემებს
 // JSON მონაცემების ფაილიდან წამოღება
 async function fetchData() {
    const response = await fetch('../json-data/alldata.json'); // მოცემული JSON ფაილი
    const data = await response.json();
    console.log(data," ალლ_data")
    return data;
}





// ფილტრაციის ფუნქცია (კატეგორიის მიხედვით)
function filterCategory(category) {
    fetchData().then(data => {
        displenonestyle()
        const filteredItems = data.filter(item => item.category.includes(category));
        console.log(filteredItems,"es gafiltruli")
        displayItems(filteredItems);
    });
}

// ყველა აიტემისShown:  "კომენტირების შიგნით" functionality
function showAll() {
    fetchData().then(data => {
        displayItems(data);
    });
}

// PARTNIOR ველიუ "YES"-ის მქონე აიტემების ფილტრი
function filterPartner() {
    fetchData().then(data => {
        const partnerItems = data.filter(item => item.partnior === "YES");
        displayItems(partnerItems);
    });
}
// პირველი ნახვისას ყველა აიტემის გამოტანა
// fetchData().then(data => {
//     displayItems(data);
// });

// მონაცემების განლაგება ეკრანზე
// function displayItems(items) {
//     const itemsDiv = document.getElementById("items");
//     itemsDiv.innerHTML = ''; // გაწმენდავს უკვე დამატებულ ელემენტებს
//     console.log("item",items)
//     if (items.length === 0) {
//         itemsDiv.innerHTML = "<p>არ არსებობს მონაცემები.</p>";
//     } else {
//         items.forEach(item => {
//             const itemDiv = document.createElement("a");
//             itemDiv.href = item.ahref;
//             itemDiv.target = "_blank";
//             itemDiv.id = "item";

//             itemDiv.innerHTML = `
//                 <img src="${item.image}" alt="${item.name}">
//                 <p><strong>Name:</strong> ${item.name}</p>
//                 <p><strong>Fasdakleba:</strong> ${item.fasdakleba}</p>
//                 <p><strong>Category:</strong> ${item.category.join(", ")}</p>
//             `;
//             itemsDiv.appendChild(itemDiv);
//         });
//     }
// }


// ვქმნით ცვლადს, რომელიც აჩვენებს მიმდინარე თარიღსა და დროს
        function updateTime() {
            const currentDate = new Date();
            
            // ვიღებთ დღეს, თვეს და წელს
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1; // თვე იწყება 0-დან
            const year = currentDate.getFullYear();

            // ვაახლებთ HTML ელემენტს
            document.getElementById('current-time').innerText = 
                `დღეს არის: ${day}-${month}-${year}`;
        }

        // განახლება ყოველ 1000 მილი წამში (1 წამში ერთხელ)
        setInterval(updateTime, 1000);


function openWhatsApp() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // მობილური მოწყობილობა
        window.location.href = "whatsapp://send?phone=995568800554";
    } else {
        // დესკტოპი
        window.open("https://wa.me/995568800554", "_blank");
    }
}

