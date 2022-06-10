declare abstract class SafariBody {
    grid: Array<Array<number>>;
    type: string;
    constructor();
    getTileNeighbours(x: number, y: number): {
        plus: boolean[];
        cross: boolean[];
    };
    static shuffle(a: any): void;
    maxY(): number;
    maxX(): number;
}
declare class SandBody extends SafariBody {
    edgeDetectCheck: number;
    constructor(x?: number, y?: number, type?: string);
    static randomInt(): number;
    private generateCube;
    private static addCube;
    private edgeDetect;
    getNumber(neighbours: any): number;
}
declare class FenceBody extends SandBody {
    edgeDetectCheck: number;
    constructor();
    getNumber(neighbours: any): number;
    private openFence;
}
declare class WaterBody extends SafariBody {
    constructor();
}
declare class GrassBody extends SafariBody {
    constructor();
    private fillHoles;
}
declare class TreeBody extends SafariBody {
    constructor();
}
interface Array<T> {
    equals(array: Array<T>): boolean;
}
