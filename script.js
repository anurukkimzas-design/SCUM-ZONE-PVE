// ================================
// SCUM ZONE PVE
// ================================

// เปลี่ยนเป็น IP เซิร์ฟเวอร์ของคุณ
const SERVER_IP = "YOUR_SERVER_IP:PORT";

// คัดลอก IP
function copyIP() {

    navigator.clipboard.writeText(SERVER_IP).then(() => {

        alert("✅ คัดลอก IP เซิร์ฟเวอร์แล้ว\n\n" + SERVER_IP);

    }).catch(() => {

        alert("❌ ไม่สามารถคัดลอก IP ได้");

    });

}

// ----------------------------
// จำลองจำนวนผู้เล่นออนไลน์
// ----------------------------

const status = document.querySelector(".status");

let players = 0;
const maxPlayers = 105;

function updatePlayers(){

    players = Math.floor(Math.random()*25);

    if(status){

        status.innerHTML = `
            <span class="dot"></span>
            ONLINE : ${players}/${maxPlayers}
        `;

    }

}

updatePlayers();

setInterval(updatePlayers,5000);

// ----------------------------
// เอฟเฟกต์เลื่อนขึ้น
// ----------------------------

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0px)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition="0.8s";

    observer.observe(card);

});

// ----------------------------
// Navbar เปลี่ยนสีเมื่อเลื่อน
// ----------------------------

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>50){

        nav.style.background="rgba(5,5,5,.95)";

    }else{

        nav.style.background="rgba(0,0,0,.45)";

    }

});
