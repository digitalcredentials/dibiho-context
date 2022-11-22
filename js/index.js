/*!
 * Copyright (c) 2022 Digital Credentials Consortium. All rights reserved.
 */
'use strict';

const context_v1_1 = require('./context_v1_1');
const constants = require('./constants');
const {CONTEXT_URL_V1_1} = constants;

const contexts = new Map();
contexts.set(CONTEXT_URL_V1_1, context_v1_1);

module.exports = {
  constants,
  contexts,
  CONTEXT_URL_V1_1,
  CONTEXT_V1_1: context_v1_1
};
