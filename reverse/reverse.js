export const getChars = (text) => {

    text = text.trim();

    if (text.length < 1 || text == null) {
        throw new Error("Can't reverse an empty string");
    }

    return [...text];
}

export const reverse = (text) => {

    const chars = getChars(text);

    let reversed = '';

    for (let i = 0; i < chars.length; i++) {
        reversed = chars[i] + reversed;
    }

    return reversed;

}