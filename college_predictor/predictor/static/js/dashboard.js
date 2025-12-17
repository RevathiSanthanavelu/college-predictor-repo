let current = 0;
const cards = ["personal","tenth","twelfth"];

function update() {
  cards.forEach((id,i)=>{
    const c=document.getElementById(id);
    c.className="card";
    if(i===current) c.classList.add("active");
    else c.classList.add("right");
  });
}

function go10(){ current=1; update(); }
function go12(){ current=2; update(); }
function backPersonal(){ current=0; update(); }
function back10(){ current=1; update(); }

update();

/* 10th calculation */
function calc10(){
  let total =
  (+t_tamil.value||0)+(+t_english.value||0)+(+t_maths.value||0)+
  (+t_science.value||0)+(+t_social.value||0);

  total10.innerText = total;
  percent10.innerText = ((total/500)*100).toFixed(2);
}

/* 12th group-based subjects */
function changeGroup(){
  const g = group.value;
  let html = `
    <input placeholder="Tamil" oninput="calc12()">
    <input placeholder="English" oninput="calc12()">
  `;

  if(g==="cs")
    html+=`<input placeholder="Maths"><input placeholder="Physics"><input placeholder="Chemistry"><input placeholder="Computer Science">`;
  if(g==="bio")
    html+=`<input placeholder="Maths"><input placeholder="Physics"><input placeholder="Chemistry"><input placeholder="Biology">`;
  if(g==="commerce")
    html+=`<input placeholder="Accountancy"><input placeholder="Commerce"><input placeholder="Economics"><input placeholder="Business Maths">`;
  if(g==="arts")
    html+=`<input placeholder="History"><input placeholder="Political Science"><input placeholder="Geography"><input placeholder="Economics">`;

  subjects.innerHTML = html;
}
