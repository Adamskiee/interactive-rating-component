class RatingComponent {
    constructor() {
        this.state = {
            rate: 0
        };

        this.elements = {
            ratingForm: document.getElementById("rating-form"),
            rateButtons: document.querySelectorAll(".rate-btn"),
            thankYouContainer: document.getElementById("thank-you-container"),
            rate: document.getElementById("rate"),
            ratingError: document.getElementById("rating-error")
        };
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        this.elements.ratingForm.addEventListener("submit", (e)=> {
            e.preventDefault();
            this.elements.rate.textContent = this.state.rate;
            if(this.elements.rate.textContent == 0) {
                this.elements.ratingError.textContent = "Please select a rating before submitting";
                this.elements.ratingForm.focus();
                return;
            }
            this.elements.ratingForm.classList.add("hidden");
            this.elements.thankYouContainer.classList.remove("hidden");
        });

        this.elements.ratingForm.addEventListener("click", (e) => {
            if(e.target.classList.contains("rate-btn")) {
                this.elements.ratingError.textContent = "";
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
        activeButton.setAttribute("aria-pressed", "true");
        activeButton.setAttribute("data-state", "active");
    }

    clearActiveRates() {
        this.elements.rateButtons.forEach(button => {
            button.setAttribute("aria-pressed", "false");
            button.removeAttribute("data-state");
        });
    }

}


document.addEventListener("DOMContentLoaded", () =>{
    new RatingComponent();
})