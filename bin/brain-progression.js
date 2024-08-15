#!/usr/bin/env node
import playGame from '../src/index.js';
import generateQuestionsForBrainProgression from '../src/games/progression.js';

playGame('What number is missing in the progression?', generateQuestionsForBrainProgression);
