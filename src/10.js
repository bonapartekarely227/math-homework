
function solveQuadraticEquation(a, b, c) {
    const determinant = b * b - 4 * a * c;
    if (determinant < 0) {
        return "No real solutions.";
    } else if (determinant === 0) {
        return `-${b / (2 * a)}`;
    } else {
        const root1 = (-b + Math.sqrt(determinant)) / (2 * a);
        const root2 = (-b - Math.sqrt(determinant)) / (2 * a);
        return `${root1}, ${root2}`;
    }
}