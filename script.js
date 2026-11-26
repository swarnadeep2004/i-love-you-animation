
const ui = document.querySelector(".heart-3d");

const totalPoints = 60;
const depthLayers = 12;

// Generate heart coordinates
for (let layer = 0; layer < depthLayers; layer++) {

    const phi = (layer / depthLayers) * Math.PI * 2;

    for (let i = 0; i < totalPoints; i++) {

        const t = (i / totalPoints) * Math.PI * 2;

        // 2D heart formula
        const heartX = 16 * Math.pow(Math.sin(t), 3);

        const heartY =
            13 * Math.cos(t) -
            5 * Math.cos(2 * t) -
            2 * Math.cos(3 * t) -
            Math.cos(4 * t);

        // Create depth
        const tubeRadius = 1 + 0.18 * Math.cos(phi);

        const x = heartX * tubeRadius * 12;

        const y = -heartY * tubeRadius * 12;

        const z = Math.sin(phi) * 65;

        // Create text element
        const love = document.createElement("div");

        love.className = "love";

        love.style.setProperty("--x", `${x}px`);
        love.style.setProperty("--y", `${y}px`);
        love.style.setProperty("--z", `${z}px`);

        // Preserve original HTML structure
        love.innerHTML = `
            <div class="love_horizontal">
                <div class="love_vertical">
                    <div class="love_word">
                        I love you
                    </div>
                </div>
            </div>
        `;

        ui.appendChild(love);
    }
}
