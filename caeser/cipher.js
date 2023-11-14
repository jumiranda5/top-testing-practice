export const cipher = (text, key) => {

    // create array of chars from text
    const chars = [...text];

    // variable to store result
    let result = '';

    // loop through chars and rotate
    for (let i = 0; i < chars.length; i++) {

        const cipher = rotate(chars[i], key);
        result = result + cipher;

    }

    return result;

}

const rotate = (char, key) => {

    const char_ascii = char.charCodeAt(0);

    // if char is not alphabetical, return as is
    let cipher = char_ascii;

    // rotate upper (ASCII A = 65 / ASCII Z = 90)
    if (char_ascii >= 65 && char_ascii <=90) {

        // find alphabet index (from 1 to 26)
        const index = char_ascii - 64;

        // rotate and find ASCII char by adding 64
        cipher = (index + key) % 26 + 64;
    }

    // rotate lower (ASCII a = 97 / ASCII z = 122)
    else if (char_ascii >= 97 && char_ascii <= 122)
    {
        // find alphabet index (from 1 to 26)
        const index = char_ascii - 96;

        // rotate and find ASCII char by adding 96
        cipher = (index + key) % 26 + 96;
    }

    return String.fromCharCode(cipher);
}