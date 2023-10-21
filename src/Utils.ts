/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export const shuffleArray=(array:any[])=>
    [...array].sort(()=>Math.random()-0.5);
