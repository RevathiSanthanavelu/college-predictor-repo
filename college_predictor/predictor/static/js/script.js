const card = document.querySelector('.card');

/* Mouse based 3D tilt */
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  card.style.transform =
    `rotateY(${x * 30}deg) rotateX(${-y * 30}deg) scale(1.05)`;
});

/* Reset */
document.addEventListener('mouseleave', () => {
  card.style.transform =
    'rotateY(0deg) rotateX(0deg) scale(1)';
});

/* Floating particles */
for (let i = 0; i < 60; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.top = Math.random() * 100 + 'vh';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.width = 2 + Math.random() * 6 + 'px';
  p.style.height = p.style.width;
  p.style.animationDuration = 5 + Math.random() * 5 + 's';
  document.body.appendChild(p);
}

/* Dummy login */
// function login() {
//   const user = document.querySelector('input[name="username"]').value;
//   if (user.includes("admin")) {
//     alert("Admin login (demo)");
//   } else {
//     alert("Student login (demo)");
//   }
// }
function studentLogin(){
    window.location.href = "dashboard.html";
}

function adminLogin(){
    window.location.href = "admin-dashboard.html";
}
