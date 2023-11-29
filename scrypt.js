let navDoc = document.querySelector(".navCS");
let navDivDoc = document.querySelector(".navDivCS");
let navBNDoc = Array.from(document.querySelectorAll(".navBNCS"));
let navShowFunChecker = false;

navBNDoc.forEach(navBNDD => {
  navBNDD.addEventListener("click", () => {
    navDivDoc.style.left = "0";
    navMouseMoveP = 0;
    navShowFun();
  });
});

function navShowFun() {
  navShowFunChecker = !navShowFunChecker;
  navDoc.classList.toggle("navShowJSCS");
  navDoc.classList.remove("navRemoveJSCS");
  if (!navShowFunChecker) {
    navDoc.classList.add("navRemoveJSCS");
  }
}

function navRemoveFun() {
  if (navShowFunChecker) {
    navShowFun();
  }
}

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    navRemoveFun();
  }
});

let navMouseMoveP = 0;
let navMouseMoveXL = 0;
let navMouseMoveDownP = 0;
let navMouseDownChecker = false;

document.addEventListener("mousemove", function (e) {
  if (navMouseDownChecker) {
    let navMouseMoveDr = e.clientX - navMouseMoveDownP;
    navMouseMoveP = Math.max(Math.min(navMouseMoveXL + navMouseMoveDr, 0), -240);
    navDivDoc.style.left = navMouseMoveP + "px";
  }
})

document.addEventListener("mousedown", function (e) {
  if (navDoc.classList.contains("navShowJSCS")) {
    navMouseDownChecker = true;
    navMouseMoveDownP = e.clientX;
    navMouseMoveXL = navDivDoc.getBoundingClientRect().left;
  }
});

document.addEventListener("mouseup", function () {
  if (navDoc.classList.contains("navShowJSCS")) {
    navMouseDownChecker = false;
    if (navMouseMoveP >= -120) {
      navDivDoc.style.left = "0";
      navDivDoc.style.transition = "200ms";
      navDivDoc.addEventListener("transitionend", function () {
        navDivDoc.style.transition = "";
      });
    } else {
      navRemoveFun();
      navDivDoc.style.transition = "200ms";
      navDivDoc.addEventListener("transitionend", function () {
        navDivDoc.style.transition = "";
      }, { once: true });
    }
  }
});

document.addEventListener("click", (e) => {
  let navTargetE = e.target;
  let navBNChecker = navBNDoc.some(navBNDD => navBNDD.contains(navTargetE));
  if (!navDivDoc.contains(navTargetE) && !navBNChecker && navShowFunChecker) {
    navRemoveFun();
  }
});

function navScrollToTopFun() {
  let navDivsScrollToTopDoc = document.querySelector(".navDivsCS");
  navDivsScrollToTopDoc.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

let navDivsScrollPDoc = document.querySelector(".navDivsCS");

navDivsScrollPDoc.addEventListener("scroll", function () {
  navScrollP = this.scrollTop;
});

navDivsScrollPDoc.addEventListener("mouseover", function () {
  this.classList.add("navDivsScrollPCS");
});