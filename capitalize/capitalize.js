
export const getChars = (text) => {

    text = text.trim();

    if (text.length < 1 || text == null) {
        throw new Error("Can't capitalize an empty string");
    }

    return [...text];
}

export const capitalize = (text) => {

    const chars = getChars(text);

    let capitalized = '';

    for (let i = 0; i < chars.length; i++) {
        if (i === 0) 
            capitalized = capitalized + chars[i].toUpperCase();
        else 
            capitalized = capitalized + chars[i].toLowerCase();
    }

    return capitalized;
}