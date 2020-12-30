describe('Home Functional tests', () => {
  it('should return a home with message', async () => {
    const res = await global.testRequest.get('/api');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{
      message: 'Welcome to Overnight',
    }]);
  });
});
