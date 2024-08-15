#!/usr/bin/env node
import playGame from '../src/index.js';
import generateQuestionsForCalculator from '../src/games/calc.js';

playGame('What is the result of the expression?', generateQuestionsForCalculator);
