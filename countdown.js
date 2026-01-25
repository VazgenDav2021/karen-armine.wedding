const weddingDate = new Date(2026, 2, 7, 12, 0, 0);
const labels = ["օր", "ժամ", "րոպե", "վայրկյան"];

function getTimeLeft() {
    const diff = weddingDate - new Date();

    if (diff <= 0) {
        return [0, 0, 0, 0];
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return [days, hours, minutes, seconds];
}

function renderCountdown() {
    const container = document.getElementById("countdown-blocks");
    if (!container) return;

    const values = getTimeLeft();

    container.innerHTML = values
        .map(
            (value, index) => `
            <div class="text-center">
                <div class="wedding-card w-16 h-16 md:w-24 md:h-24 flex items-center justify-center mb-2">
                    <span class="wedding-heading text-2xl md:text-4xl text-primary">
                        ${String(value).padStart(2, "0")}
                    </span>
                </div>
                <span class="wedding-body text-xs md:text-sm text-muted-foreground">
                    ${labels[index]}
                </span>
            </div>
        `
        )
        .join("");
}

document.addEventListener("DOMContentLoaded", () => {
    renderCountdown();
    setInterval(renderCountdown, 1000);
});
