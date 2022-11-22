/*!
 * Copyright (c) 2022 Digital Credentials Consortium. All rights reserved.
 */
const chai = require('chai');
chai.should();
const {expect} = chai;

const ctx = require('..');
const {
  contexts, constants, CONTEXT_URL_V1_1
} = ctx;

const contextUrl = constants.CONTEXT_URL_V1_1;

describe('Open Badges Context', () => {
  it('constants', async () => {
    expect(constants).to.exist;
    expect(CONTEXT_URL_V1_1).to.exist;
  });

  it('contexts', async () => {
    const contextObject = contexts.get(contextUrl);
    console.log('should show the context:');
    console.log(JSON.stringify(contextObject));
    console.log('the value of the context property:  ');
    console.log(JSON.stringify(contextObject.contextUrl));
    expect(contexts.get(contextUrl)).to.have.property('@context');
  });
});
