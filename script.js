const $emojiContainer = document.getElementById('emoji-container')
console.log($emojiContainer)

const emojis = []
for(let i = 129300; i < 129351; i++) {
    emojis.push(`
    <p style="text-align: center;">
    <span style="font-size: 5rem;">&#${i};</span> <br>
    <code>${i}</code>
    </p>`)
}

$emojiContainer.innerHTML = emojis.join('')