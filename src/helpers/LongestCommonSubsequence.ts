import { LcsOutput } from "./LcsOutput";

export class LongestCommonSubsequence {

    public static longestCommonSubsequence(s1: string, s2: string): LcsOutput {

        const m: number = s1.length;
        const n: number = s2.length;
    
        //Define 2-D dynamic programming array
        let dp: number[][] = Array.from(Array(m+1), () => new Array(n+1).fill(0));

        //Define array used to reconstruct sequence
        let aux: number[][] = Array.from(Array(m+1), () => new Array(n+1).fill(0));

        for (let i = 0; i <= m; i++){
            for (let j = 0; j <= n; j++){
                if (i === 0 || j === 0) {
                    dp[i][j] = 0;
                    continue;
                }
                if (s1[i-1] === s2[j-1]){
                    dp[i][j] = dp[i-1][j-1] + 1;
                    aux[i][j] = 2;
                    continue;
                }
                if (dp[i-1][j] > dp[i][j-1]){
                    dp[i][j] = dp[i-1][j];
                    aux[i][j] = 3;
                    continue;
                }         
                dp[i][j] = dp[i][j-1];
                aux[i][j] = 1;
            }
        }

        const sequenceLength: number = dp[m][n];
        let indexSequence: number[][] = [];
        let stringSequence = '';
        let i: number = m; 
        let j: number = n;
        while (i > 0 && j > 0){
            switch (aux[i][j]){
                case 1:
                    j--;
                    break;
                case 2:
                    i--;
                    j--;
                    indexSequence.push([i, j]);
                    stringSequence = s1[i] + stringSequence;
                    break;
                case 3:
                    i--;
            }
        }

        const output: LcsOutput = {
            sequences: [s1, s2],
            length: sequenceLength,
            indexSequence: indexSequence,
            stringSequence: stringSequence
        }


        return output;
    }

    public static generateRandomSequence(length: number, variance: number){

        //Limit length to 20
        if (length > 20) length = 20;
        else if (length < 0) length = 0;

        //Bound variance
        if (variance > 26) variance = 26;
        else if (variance < 1) variance = 1;

        let output: string = '';
        for (let i = 0; i < length; i++){
            output += String.fromCharCode(Math.floor(Math.random() * variance) + 65);
        }

        return output;
    }
}









