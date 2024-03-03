{
    let home = document.getElementById("home");
    let explore = document.getElementById("explore");
    let create = document.getElementById("create");

    let searchicon = document.getElementById("search-icon")
    let searchinput = document.getElementById("search-input")
    let inputdiv = document.getElementById("input-div")
    let searchclose = document.getElementById("search-close")
    let overlay = document.querySelector(".overlay")
    let resentdatadiv = document.getElementById("search-hide-dev");

    home.onclick = function () {
        this.style.backgroundColor = "black";
        this.style.color = "#fff";
        explore.style.backgroundColor = "white";
        explore.style.color = "black";
        create.style.backgroundColor = "white";
        create.style.color = "black";
        inputdiv.style.border = "none";
        overlay.style.display = "none"
        resentdatadiv.style.display = "none"
        searchclose.style.display = "none"
    }

    explore.onclick = function () {
        this.style.backgroundColor = "black";
        this.style.color = "#fff";
        home.style.backgroundColor = "white";
        home.style.color = "black";
        create.style.backgroundColor = "white";
        create.style.color = "black";
        inputdiv.style.border = "none";
        overlay.style.display = "none"
        resentdatadiv.style.display = "none"
        searchclose.style.display = "none"
    }
    create.onclick = function () {
        this.style.backgroundColor = "black";
        this.style.color = "#fff";
        explore.style.backgroundColor = "white"
        explore.style.color = "black";
        home.style.backgroundColor = "white";
        home.style.color = "black";
        inputdiv.style.border = "none";
        overlay.style.display = "none"
        resentdatadiv.style.display = "none"
        searchclose.style.display = "none"
    }
}

{
    let searchicon = document.getElementById("search-icon")
    let searchinput = document.getElementById("search-input")
    let inputdiv = document.getElementById("input-div")
    let searchclose = document.getElementById("search-close")
    let overlay = document.querySelector(".overlay")
    let resentdatadiv = document.getElementById("search-hide-dev");

    overlay.addEventListener("mouseover", function () {
        resentdatadiv.style.display = "none"
        overlay.style.display = "none"
        inputdiv.style.border = "none";
        searchclose.style.display = "none";
        searchicon.style.display = "block";
    });

    searchinput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            inputdiv.style.border = "none";
            overlay.style.display = "none"
            resentdatadiv.style.display = "none"
            searchclose.style.display = "none"
            searchicon.style.display = "block";
        }
    });
    searchinput.addEventListener("click", function () {
        searchicon.style.display = "none";
        inputdiv.style.border = "3px solid #7FC1FF";
        searchclose.style.display = "block";
        overlay.style.display = "block"
        resentdatadiv.style.display = "block"
    })

    searchinput.addEventListener("blur", function () {
        searchicon.style.display = "block";
        inputdiv.style.border = "block";
        searchclose.style.display = "block";
        searchinput.value = "";
        overlay.style.display = "block"
        resentdatadiv.style.display = "block"
    })
    searchclose.addEventListener("click", function () {
        searchinput.value = "";
    })
}

{
    var arr = [
        { name: "fashion", tag: "fashion outfits", image: "https://i.pinimg.com/564x/da/ec/0c/daec0c0eae3b9024ad4ab5199054eca2.jpg" },
        { name: "fashion", tag: "fashion/beauty", image: "https://i.pinimg.com/564x/62/ae/c9/62aec9afcaba8c840fb1a80d0064896a.jpg" },
        { name: "fashion", tag: "fashion inspo outfits", image: "https://i.pinimg.com/564x/d4/6e/e8/d46ee8f1bef7927510110324de7fd5af.jpg" },
        { name: "fashion", tag: "fashion design", image: "https://i.pinimg.com/564x/a3/dd/e4/a3dde4bc6b4a10dcc779be8a6e1d32c6.jpg" },
        { name: "fashion", tag: "fashion illustration", image: "https://i.pinimg.com/564x/67/24/13/6724132e62dc352db166214560faed06.jpg" },
        { name: "fashion", tag: "fashion aesthetic", image: "https://i.pinimg.com/564x/fb/83/f9/fb83f98c6f682d86aabbe834f6b95756.jpg" },
        { name: "fashion", tag: "fashion design sketches", image: "https://i.pinimg.com/564x/87/fd/9c/87fd9c7c0da2b5413dd2a09725a165a6.jpg" },
        { name: "fashion", tag: "shein clothing", image: "https://i.pinimg.com/564x/c7/b8/04/c7b8046f454305dbce031facac05ed6b.jpg" },
        { name: "fashion", tag: "80s fashion", image: "https://i.pinimg.com/564x/70/29/7d/70297d8fd8021a93e28abebd71849258.jpg" },
        { name: "fashion", tag: "womens clothing", image: "https://i.pinimg.com/564x/f5/c1/f9/f5c1f99adf3d1fc686b23daf030e492d.jpg" },
        { name: "fashion", tag: "harry styles vogue", image: "https://i.pinimg.com/736x/79/66/f8/7966f8a9fb82b1b3614393d750c48ae6.jpg" },
        { name: "fashion", tag: "fast fashion", image: "https://i.pinimg.com/564x/95/79/41/95794124d069ffd043d917201dfa56b8.jpg" },
        { name: "fashion", tag: "mens clothing", image: "https://i.pinimg.com/736x/71/02/4d/71024dd9d61e9e10cc1fbaf68427f3cf.jpg" },
        { name: "fashion", tag: "fashion designer", image: "https://i.pinimg.com/564x/1a/5b/42/1a5b427197184ab826c76e2472f2afe9.jpg" },
        { name: "fashion", tag: "fashion nova men", image: "https://i.pinimg.com/564x/cf/4d/33/cf4d33b2db1472f57996b028ec698617.jpg" },
        { name: "fashion", tag: "guccio gucci", image: "https://i.pinimg.com/564x/a9/48/4d/a9484d3c0d57c3b4a6563e9a9a1ee6a3.jpg" },
        { name: "fashion", tag: "preppy", image: "https://i.pinimg.com/564x/17/86/c6/1786c629ebc03bb2f1a9a13d7c83a482.jpg" },
        { name: "fashion", tag: "oasis clothing", image: "https://i.pinimg.com/736x/3f/c7/e1/3fc7e153c08ff59483af3e2fcfa78c78.jpg" },
        { name: "fashion", tag: "y2k fashion", image: "https://i.pinimg.com/564x/5f/0f/e7/5f0fe78fabc7704f7a0002376015b43a.jpg" },
        { name: "fashion", tag: "designer brands", image: "https://i.pinimg.com/564x/7d/ce/13/7dce13831c68fe037548a60016bf2b99.jpg" },
        { name: "fashion", tag: "myntra online", image: "https://i.pinimg.com/564x/b3/8c/92/b38c926cef61919eb8e282d49be320f1.jpg" },
        { name: "fashion", tag: "street style", image: "https://i.pinimg.com/736x/cb/2e/b7/cb2eb774afd4b711c42547b12cde9712.jpg" },
        { name: "fashion", tag: "amazon fashion", image: "https://i.pinimg.com/736x/a2/2c/45/a22c45691ec74cf8aed76f143a0cd0f2.jpg" },
        { name: "fashion", tag: "h&m greece", image: "https://i.pinimg.com/564x/de/1a/5b/de1a5b617b89ff988aea41c913590a3d.jpg" },

        { name: "home decor", tag: "home decor", image: "https://i.pinimg.com/564x/46/d7/68/46d7684635ec8df62bee368ca3030793.jpg" },
        { name: "home decor", tag: "home decor", image: "https://i.pinimg.com/564x/dc/7d/37/dc7d3706bdc2c3e452c2823f0aa9ede5.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/03/1d/8a/031d8ae66e3745ae2952b37522e5e211.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/25/47/f3/2547f3c43be694f0d8b71f04a70fdeb1.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/bd/3f/1a/bd3f1a58bec95d5df8f499e5f39543eb.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/00/fa/84/00fa840bcc3f17384e3aad2193a2f80a.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/66/a3/b2/66a3b2d7c0004ede9b78a099ebc902ad.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/82/b6/d3/82b6d343b14e5aa42cda5c2ed6b6328b.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/44/72/3d/44723d76b642287bfde60719c90bc3f1.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/6a/4a/69/6a4a698130d99b017a591154287c373e.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/6d/ff/b2/6dffb24f4f6e480266cc8666dae399b1.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/6f/18/95/6f189574dc73a53c5c117c547b4f29e1.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/9c/ed/7b/9ced7bbce7e8b6df6077885687d0ad32.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/e7/9d/f6/e79df64a01f2bfa0a65d27ff551bcb45.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/f5/90/42/f59042e33562e4339f190efb1da81e57.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/736x/e9/10/98/e91098b5fbb7cafc89c9fb5ac2bf7281.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/35/07/12/3507127bdd48c5d95d9a4420d35257e2.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/c3/ec/77/c3ec778c9d8a48dffa33ca3c6e80ce20.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/6c/fc/24/6cfc2419e1f479f9ab3b0f6245c66354.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/0c/a8/d0/0ca8d0170e98fcabf4f510c41066c1b0.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/7a/79/f0/7a79f0d859bbf427f905c5d38cfb261e.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/a5/11/f9/a511f93e8baf475d2da49ab7588e648c.jpg" },
        { name: "home decor", image: "https://i.pinimg.com/564x/93/12/82/9312822e328050a32d800bf39b4a9186.jpg" },

        { name: "Health", tag: "health", image: "https://i.pinimg.com/564x/f3/0b/c7/f30bc7914c199647e965c3539a59ba46.jpg" },
        { name: "Health", image: "https://i.pinimg.com/564x/00/02/f2/0002f2d79063dca9c71df6adabab04de.jpg" },
        { name: "Health", image: "https://i.pinimg.com/736x/f0/cb/89/f0cb89f5892192d04acb736b9d3ab518.jpg" },
        { name: "Health", image: "https://i.pinimg.com/564x/6e/04/b5/6e04b5606743e8d063defdc62f68bf31.jpg" },
        { name: "Health", image: "https://i.pinimg.com/736x/b7/1c/8c/b71c8cb13775a09f50be280351d48053.jpg" },
        { name: "Health", image: "https://i.pinimg.com/564x/06/23/72/0623721fe5dd2444bf5d1cc748ef0fa7.jpg" },
        { name: "Health", image: "https://i.pinimg.com/564x/df/b1/e6/dfb1e61d972f21a955661e849d747c15.jpg" },
        { name: "Health", image: "https://i.pinimg.com/736x/dd/85/2e/dd852eb8a65a646a64ea85d55d8193d3.jpg" },
        { name: "Health", image: "https://i.pinimg.com/564x/15/53/f5/1553f507ae736176e250efdc12c43b28.jpg" },
        { name: "Health", image: "https://i.pinimg.com/564x/52/96/3a/52963a1cf5c198b61027b32464fa2585.jpg" },
        { name: "Health", image: "https://i.pinimg.com/736x/0d/d8/a0/0dd8a0c8a5d4f5412ecc4b9b76f24287.jpg" },
        { name: "Health", image: "https://i.pinimg.com/564x/69/cd/9e/69cd9e24f661fdc6559382ce31ae1155.jpg" },
        { name: "Health", image: "https://i.pinimg.com/564x/e5/60/28/e5602874451cd120cc599aebc6c8180a.jpg" },
        { name: "Health", image: "https://i.pinimg.com/564x/2d/8a/ab/2d8aab5723f8cfc747f36253bd07e1a6.jpg" },
        { name: "Health", image: "https://i.pinimg.com/564x/25/f6/b5/25f6b54e78ca76b4f92acddb94ab12e2.jpg" },
        { name: "Health", image: "https://i.pinimg.com/736x/85/bc/da/85bcda06ca434f9faf449e54771e9def.jpg" },
        { name: "Health", image: "https://i.pinimg.com/564x/3e/4a/49/3e4a49c3e776c0152a9ac17dc3ef524f.jpg" },
        { name: "Health", image: "https://i.pinimg.com/736x/c2/e3/28/c2e328e387c502094da48abcb078d14e.jpg" },
        { name: "Health", image: "https://i.pinimg.com/564x/2e/ca/d6/2ecad6a319c278a70e676a13034d3e28.jpg" },

        { name: "travel", tag: "travel", image: "https://i.pinimg.com/736x/85/b8/52/85b852fe429f4f17ed1bfd3a6de20a75.jpg" },
        { name: "travel", image: "https://i.pinimg.com/736x/1d/c9/d7/1dc9d756931942aceebed363d96cf3a1.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/35/4a/11/354a119533feb57c6e3f2ef11860720b.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/94/a7/68/94a768e74ff5fa4b994dab761e0de7c8.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/ad/69/d9/ad69d99582cacd6423bb3905c71b95df.jpg" },
        { name: "travel", image: "https://i.pinimg.com/736x/66/69/93/666993fd73eea7363503a308898ac2b2.jpg" },
        { name: "travel", image: "https://i.pinimg.com/736x/40/6d/11/406d117aa936ad7bb2700064d0c4ba97.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/9d/a9/d7/9da9d7135d36c18ad94fee5df68e3ec9.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/21/4e/4d/214e4dd301bd4162bc8c3ab1b4014d97.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/eb/cc/f1/ebccf1a2cf8ddec41f8231e13f2f430b.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/e8/73/70/e873703fa6540d2b313790db25e8ad97.jpg" },
        { name: "travel", image: "https://i.pinimg.com/736x/95/06/d7/9506d7b47f218d1b260e0e16b7db196a.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/30/b8/10/30b81087a3b06a0d10e28d835b2f8b73.jpg" },
        { name: "travel", image: "https://i.pinimg.com/736x/d9/09/32/d90932ee282aca3ec3dc209ba87fce46.jpg" },
        { name: "travel", image: "https://i.pinimg.com/736x/a7/0a/ed/a70aedd653a88e55ce1360c805194976.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/80/e0/62/80e062344c6459ef610cff01f8ed3695.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/4d/e0/11/4de011316192df27ed6f2c4a3183393c.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/54/5f/b3/545fb3bc45e54fa4ca8bf044ed8140dc.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/ac/94/35/ac9435b1dae07a86462fa6fa691498c4.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/fa/ca/5b/faca5bf72ce1906492882c0e53f3a882.jpg" },
        { name: "travel", image: "https://i.pinimg.com/564x/38/6b/3d/386b3d57df9f613c89ff1c0d6e003676.jpg" },
        { name: "travel", image: "https://i.pinimg.com/736x/a5/6e/f0/a56ef04c5cebfce446816eda6f55718f.jpg" },
    ]
}


function showTheCards() {
    var clutter = "";
    arr.forEach(function (obj) {
        clutter += `    <div class="box">
        <img src="${obj.image}">
        <button>Save</button>
        <div class="carddetial">
            <div class="visitlink">
                <div class="cardsstartlink">
                    <a href="#"><svg class="Hn_ gUZ R19 U9O kVc" height="9" width="9" viewBox="0 0 24 24"
                            aria-label="link" role="img">
                            <path
                                d="M4.93 1a2.36 2.36 0 1 0 0 4.71h10.02L1.7 18.98a2.36 2.36 0 0 0 3.33 3.33L18.3 9.05v10.02a2.36 2.36 0 1 0 4.71 0V1z">
                            </path>
                        </svg></a> <span>&nbsp; SocksStore....</span>
                </div>
            </div>
            <div class="menubtn">
                <div class="cardsharebtn">
                    <a href="#"><svg class="gUZ R19 U9O kVc" height="16" width="16" viewBox="0 0 24 24"
                            aria-hidden="true" aria-label="" role="img">
                            <path
                                d="M10 7.66 8.81 8.84a2 2 0 0 1-2.84-2.82l6-6.02L18 6.01a2 2 0 0 1-2.82 2.83l-1.2-1.19v6.18a2 2 0 0 1-4 0zM19 16a2 2 0 0 1 4 0v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6a2 2 0 0 1 4 0v4h14z">
                            </path>
                        </svg></a>
                </div>
                <div class="cardmenubtn">
                    <a href="#"><svg class="gUZ R19 U9O kVc" height="16" width="16" viewBox="0 0 24 24"
                            aria-hidden="true" aria-label="" role="img">
                            <path
                                d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m18 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6">
                            </path>
                        </svg></a>
                </div>
            </div>
        </div>
    </div>`;
    })

    document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionlity() {
    let searchinput = document.getElementById("search-input");

    searchinput.addEventListener("input", function () {
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(searchinput.value));

        var clutter2 = "";
        filteredArray.forEach(function (obj) {
            clutter2 += `<div class="flex items-center gap-3 mb-2 cursor-pointer"><svg class="BNH gUZ U9O kVc" fill="#767676" height="16"
            width="16" viewBox="0 0 24 24" aria-label="Search icon" role="img">
            <path
                d="M10 16a6 6 0 1 1 .01-12.01A6 6 0 0 1 10 16m13.12 2.88-4.26-4.26a10 10 0 1 0-4.24 4.24l4.26 4.26a3 3 0 1 0 4.24-4.24">
            </path>
        </svg>
        <p class="text-base font-medium text-[#767676]">${obj.tag}</p>
    </div>`
        })
        document.getElementById("search-data").innerHTML = clutter2;
    })
}

function searchImage() {
    let searchInput = document.getElementById("search-input");

    searchInput.addEventListener("input", function () {
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(searchInput.value.toLowerCase()));

        var html = "";
        filteredArray.forEach(function (obj) {
            html += `<div class="box">
                        <img src="${obj.image}">
                        <button>Save</button>
                        <div class="carddetial">
                            <div class="visitlink">
                                <div class="cardsstartlink">
                                    <a href="#"><svg class="Hn_ gUZ R19 U9O kVc" height="9" width="9" viewBox="0 0 24 24"
                                            aria-label="link" role="img">
                                            <path
                                                d="M4.93 1a2.36 2.36 0 1 0 0 4.71h10.02L1.7 18.98a2.36 2.36 0 0 0 3.33 3.33L18.3 9.05v10.02a2.36 2.36 0 1 0 4.71 0V1z">
                                            </path>
                                        </svg></a> <span>&nbsp; SocksStore....</span>
                                </div>
                            </div>
                            <div class="menubtn">
                                <div class="cardsharebtn">
                                    <a href="#"><svg class="gUZ R19 U9O kVc" height="16" width="16" viewBox="0 0 24 24"
                                            aria-hidden="true" aria-label="" role="img">
                                            <path
                                                d="M10 7.66 8.81 8.84a2 2 0 0 1-2.84-2.82l6-6.02L18 6.01a2 2 0 0 1-2.82 2.83l-1.2-1.19v6.18a2 2 0 0 1-4 0zM19 16a2 2 0 0 1 4 0v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6a2 2 0 0 1 4 0v4h14z">
                                            </path>
                                        </svg></a>
                                </div>
                                <div class="cardmenubtn">
                                    <a href="#"><svg class="gUZ R19 U9O kVc" height="16" width="16" viewBox="0 0 24 24"
                                            aria-hidden="true" aria-label="" role="img">
                                            <path
                                                d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m18 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6">
                                            </path>
                                        </svg></a>
                                </div>
                            </div>
                        </div>
                    </div>`;
        });

        document.querySelector(".container").innerHTML = html;
    });
}


searchImage()
handleSearchFunctionlity()
showTheCards();
