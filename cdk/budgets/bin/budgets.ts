#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { BudgetsStack } from '../lib/budgets-stack';

const app = new cdk.App();
new BudgetsStack(app, 'BudgetsStack');
