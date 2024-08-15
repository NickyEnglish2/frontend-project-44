#!/usr/bin/env node
import greetingUser from '../src/cli.js';

const playerName = greetingUser();
console.log(`Hello, ${playerName}!`);
