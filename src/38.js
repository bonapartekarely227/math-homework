function calculateGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function isPalindrome(str) {
    const lowerCaseStr = str.toLowerCase();
    for (let i = 0; i < Math.floor(lowerCaseStr.length / 2); i++) {
        if (lowerCaseStr[i] !== lowerCaseStr[lowerCaseStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function findLongestPalindromicSubstring(text) {
    const n = text.length;
    let start = 0, end = 0;
    for (let i = 0; i < n; i++) {
        if (i > end) {
            start = i - Math.floor((n - i) / 2);
            end = i + Math.floor((n - i) / 2);
        }
        const leftIndex = findLeftIndex(i, text, start, n);
        const rightIndex = findRightIndex(i, text, n - 1 - end, n);
        if (leftIndex === -1 || rightIndex === -1 || Math.abs(leftIndex - rightIndex) > Math.abs(end - start)) {
            continue;
        }
        let leftPart = text.substring(start + leftIndex, i + 1);
        let rightPart = text.substring(i + 1, n - end - rightIndex - 1);
        console.log(`"${leftPart} ${rightPart}" is a palindrome.`);

        if (Math.abs(leftIndex - rightIndex) <= Math.abs(end - start)) {
            start = leftIndex + 1;
            end = rightIndex + 1;
        } else {
            break;
        }
    }
}

function findLeftIndex(index, str, leftMin, leftMax) {
    while (leftMax >= leftMin && index > leftMax) {
        const mid = Math.floor((leftMax + leftMin) / 2);
        if (str.charAt(mid) < str.charAt(leftMin)) {
            leftMin = mid + 1;
        } else {
            leftMax = mid - 1;
        }
    }
    return leftMin === 0 ? -1 : index - leftMin;
}

function findRightIndex(index, str, rightMax, rightMin) {
    while (rightMax >= rightMin && index < rightMax) {
        const mid = Math.floor((rightMax + rightMin) / 2);
        if (str.charAt(mid) > str.charAt(rightMax)) {
            rightMax = mid - 1;
        } else {
            rightMin = mid + 1;
        }
    }
    return rightMin === 0 ? -1 : index + rightMin;
}

function main() {
    const text = "banana";
    console.log(`"${text} ${isPalindrome(text)}" is a palindrome.`);
    findLongestPalindromicSubstring(text);
}
