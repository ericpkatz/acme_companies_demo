let companies = [];
const spanCount = document.querySelector('.spanCount');
const list = document.querySelector('ul');


function render(){
  spanCount.innerHTML = companies.length;
  const html = companies.map(function(company){
    console.log(company);
    return `
      <li>
        <h5>${company.name}</h5>
        ${company.catchPhrase}
      </li>
    `;
  }).join('');
  list.innerHTML = html;
}

render();

async function fetchCompanies(){
  const response = await fetch('https://www.acme-api.com/api/companies');
  const json = await response.json();
  companies = json;
  render();
}

fetchCompanies();
