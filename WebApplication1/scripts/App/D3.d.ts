declare module "D3" {
    export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        };
    }

    export interface Event {
        x: number;
        y: number;
    }

    export interface Base extends Selectors {
        event: Event;
    }
}

//declare var d3: D3.Base; //改為雙引號會出現cannot find module D3的錯誤

//以下做為可以在Module可以宣告一模一樣結構的class,interface且不會有名稱重複的問題
declare module D3Clone {
    export interface Selectors {
        select: {
            (selector: string): Selection;
            (element: EventTarget): Selection;
        };
    }

    export interface Event {
        x: number;
        y: number;
    }

    export interface Base extends Selectors {
        event: Event;
    }
}
declare var d3Clone: D3Clone.Base;