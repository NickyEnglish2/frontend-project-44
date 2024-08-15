#!/usr/bin/env node
import playGame from '../src/index.js';
import generateQuestionsForGCD from '../src/games/biggest-divider.js';

playGame('Find the greatest common divisor of given numbers.', generateQuestionsForGCD);
