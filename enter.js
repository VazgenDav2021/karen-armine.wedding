document.getElementById("enter-btn").onclick = function () {
    document.getElementById("welcome-overlay").classList.add("hidden");
    
    document.getElementById("site-content").classList.remove("hidden");

    var music = document.getElementById("wedding-music");
    if (music) music.play();

    var footer = document.createElement('footer');
    footer.className = "py-12 bg-secondary/30";
    footer.innerHTML = `
        <div class="container mx-auto px-4 text-center">
            <p class="wedding-heading text-xl mb-2">Արմինե և Կարեն</p>
            <p class="wedding-subheading text-xs">7 մարտի 2026</p>
            <p class="wedding-body text-muted-foreground text-sm mt-6">Սիրով սպասում ենք ձեզ։</p>
        </div>
    `;
    document.body.appendChild(footer);
};
