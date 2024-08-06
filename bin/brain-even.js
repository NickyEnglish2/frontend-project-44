#!/usr/bin/env node
import playGame from '../src/index.js';
import generateQuestionsForEven from '../src/even.js';

playGame('Answer "yes" if the number is even, otherwise answer "no".', generateQuestionsForEven);
