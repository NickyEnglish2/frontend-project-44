#!/usr/bin/env node
import playGame from '../src/index.js';
import generateQuestionsForPrimeNumber from '../src/games/prime.js';

playGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateQuestionsForPrimeNumber);
