// test suite (collection of tests)
// test cases (individual test that verifies one functionality)

import { describe, expect, it } from "vitest";
import multiplyFunction from "./MultiplyFunction";

describe('testing multiplyfunction',()=>{
    // individual test cases verifies 
    it("returns the currect result",()=>{
        const result=multiplyFunction(10)
        
        expect(result).toBe(100)
    })
    // it('handles the case with no inpout',()=>{

    // })
})