// const ratingForm = document.getElementById("ratingForm");

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     console.log(formData.get("rate"));
// }

// ratingForm.addEventListener("submit", handleSubmit);
// ratingForm.addEventListener("click", )
class RatingComponent {
    constructor() {
        this.state = {
            rate: 0
        };

        this.elements = {
            ratingForm: document.getElementById("rating-form"),
            rateButtons: document.querySelectorAll(".rate-btn"),
            thankYouContainer: document.getElementById("thank-you-container"),
            rate: document.getElementById("rate")
        };
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.elements.ratingForm.addEventListener("submit", (e)=> {
            e.preventDefault();
            this.elements.rate.textContent = this.state.rate
            this.elements.ratingForm.classList.add("hidden");
            this.elements.thankYouContainer.classList.remove("hidden");
        });

        this.elements.ratingForm.addEventListener("click", (e) => {
            if(e.target.classList.contains("rate-btn")) {
                const rateBtn = e.target;
                if(this.state.rate === rateBtn.value) return;
                this.state.rate = Number(rateBtn.value);
                this.setActiveRate(rateBtn);
            }
        });
    }

    setActiveRate(activeButton) {
        this.clearActiveRates();
        console.log("activate");
        activeButton.setAttribute("data-state", "active");
    }

    clearActiveRates() {
        this.elements.rateButtons.forEach(button => {
            button.removeAttribute("data-state");
        });
    }

}


document.addEventListener("DOMContentLoaded", () =>{
    new RatingComponent();
})