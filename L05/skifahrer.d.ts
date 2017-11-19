declare namespace aufgabe5 {
    class Skiers {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
        constructor(x: number, y: number, dx: number, dy: number, color: string);
        moveSkier(): void;
        drawSkier(): void;
    }
}
