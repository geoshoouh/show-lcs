import { LcsOutput } from "../helpers/LcsOutput";
import { LongestCommonSubsequence } from "../helpers/LongestCommonSubsequence";


const correctLcsOutput: LcsOutput = {
    sequences: ['AGGTAB', 'GXTXAYB'],
    length: 4,
    indexSequence: [[5, 6], [4, 4], [3, 2], [2, 0]],
    stringSequence: 'GTAB'
};

test('longestCommonSubsequence produces correct LcsOutput', () => {
    const output: LcsOutput = LongestCommonSubsequence.longestCommonSubsequence(correctLcsOutput.sequences[0], correctLcsOutput.sequences[1]);
    expect(output).toStrictEqual(correctLcsOutput);
});
