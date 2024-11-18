// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export class Size {
    constructor(width = 80, height = 60) {
        this.width = width;
        this.height = height;
    }

    resize(width, height) {
        this.width = width;
        this.height = height;
    }
}

export class Position {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }

    move(q, p) {
        this.x = q;
        this.y = p;
    }
}

export class ProgramWindow {
    constructor() {
        this.screenSize = new Size(800, 600);
        this.size = new Size();
        this.position = new Position();
    }

    resize(size) {
        const maxWidth = this.screenSize.width - this.position.x;
        const maxHeight = this.screenSize.height - this.position.y;

        this.size.width = Math.max(1, Math.min(size.width, maxWidth));
        this.size.height = Math.max(1, Math.min(size.height, maxHeight));
    }

    move(position) {
        const maxX = this.screenSize.width - this.size.width;
        const maxY = this.screenSize.height - this.size.height;

        this.position.x = Math.max(0, Math.min(position.x, maxX));
        this.position.y = Math.max(0, Math.min(position.y, maxY));
    }
}

export function changeWindow(programWindow) {
    programWindow.resize(new Size(400, 300));
    programWindow.move(new Position(100, 150));
    return programWindow;
}