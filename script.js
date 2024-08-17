// Improved transliteration mapping
const transliterationMap = {
    'aa': 'আ', 'ii': 'ঈ', 'uu': 'ঊ', 'ai': 'ঐ', 'au': 'ঔ', 'kh': 'খ',
    'gh': 'ঘ', 'ng': 'ঙ', 'ch': 'ছ', 'jh': 'ঝ', 'ny': 'ঞ', 'th': 'ঠ',
    'dh': 'ঢ', 'ph': 'ফ', 'bh': 'ভ', 'sh': 'শ', 'ss': 'ষ', 'rr': 'র', 
    'tr': 'ত্র', 'dr': 'দ্র', 'kr': 'ক্র', 'pr': 'প্র', 'br': 'ব্র',
    'fr': 'ফ্র', 'shr': 'শ্র', 'rri': 'ঋ', 'lli': 'ঌ', 'ei': 'ঐ',
    'bri': 'বৃ', 'rki': 'ৰ্ক', 'rkr': 'র্ক', 'tri': 'ত্র', 'gra': 'গ্র',
    'a': 'অ', 'i': 'ই', 'u': 'উ', 'e': 'এ', 'o': 'ও',
    'k': 'ক', 'g': 'গ', 'c': 'চ', 'j': 'জ', 't': 'ট', 'd': 'ড',
    'n': 'ণ', 'p': 'প', 'b': 'ব', 'm': 'ম', 'y': 'য', 'r': 'র',
    'l': 'ল', 's': 'স', 'h': 'হ', 'r': 'র',
    'am': 'আম', 'ar': 'আর', 'ra': 'রা'
};

function convertText() {
    let inputText = document.getElementById('inputText').value;
    let outputText = '';

    let i = 0;
    while (i < inputText.length) {
        let match = false;

        for (let j = 3; j > 0; j--) {
            let substr = inputText.substring(i, i + j);
            if (transliterationMap[substr]) {
                outputText += transliterationMap[substr];
                i += j;
                match = true;
                break;
            }
        }

        if (!match) {
            outputText += inputText[i];
            i++;
        }
    }

    document.getElementById('outputText').value = outputText;
}
