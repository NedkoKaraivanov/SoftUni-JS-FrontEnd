function charsInRange(firstChar, secondChar) {
    const getFirstAsciiCode = (char) => char.charCodeAt(0);

    let firstCharAscii = getFirstAsciiCode(firstChar);
    let secondCharAscii = getFirstAsciiCode(secondChar);

    let minAscii = Math.min(firstCharAscii, secondCharAscii);
    let maxAscii = Math.max(firstCharAscii, secondCharAscii);
    let chars = [];

    for (let i = minAscii + 1; i < maxAscii; i++) {
        chars.push(String.fromCharCode(i));
    }

    console.log(chars.join(" "));
}

charsInRange('#',
':'
)