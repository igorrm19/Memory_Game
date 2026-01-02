const figuras = ["𓃠", "𓃡", "妣", "𓃣", "𓃤", "𓃥", "𓃦", "𓃧", "𓃠", "𓃡", "妣", "𓃣", "𓃤", "𓃥", "𓃦", "𓃧"];

let emojis = figuras.sort(() => Math.random() - 0.5);



for (let i = 0; i < emojis.length; i++) {

    let box = document.createElement("div");

    box.className = "item"

    box.innerHTML = emojis[i];



    box.onclick = () => {

        box.classList.add("boxOpen");

        setTimeout(() => {

            if (document.querySelectorAll(".boxOpen").length > 1) {

                if (document.querySelectorAll(".boxOpen")[0].innerHTML == document.querySelectorAll(".boxOpen")[1].innerHTML) {

                    document.querySelectorAll('.boxOpen')[0].classList.add("boxMatch");

                    document.querySelectorAll('.boxOpen')[1].classList.add("boxMatch");



                    document.querySelectorAll('.boxOpen')[1].classList.remove("boxOpen");

                    document.querySelectorAll('.boxOpen')[0].classList.remove("boxOpen");



                    if (document.querySelectorAll('.boxMatch').length == emojis.length) {

                        document.getElementById("venceu").style.display = "block";

                        setInterval(() => {

                            document.getElementById("venceu").style.display = "none";



                        }, 5000);

                    }

                } else {

                    document.querySelectorAll('.boxOpen')[1].classList.remove("boxOpen");

                    document.querySelectorAll('.boxOpen')[0].classList.remove("boxOpen");

                }

            }

        }, 2500);

    }



    document.querySelector(".game").appendChild(box);

}