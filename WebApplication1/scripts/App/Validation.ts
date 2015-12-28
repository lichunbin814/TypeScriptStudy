module Validataion {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}