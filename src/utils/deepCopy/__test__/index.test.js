describe("deepClone", () => {
  it("test", () => {
    const d = new Date();
    const o = {a: 123, b: ['123'], d: d};
    obj = JSON.parse(JSON.stringify(o));
    expect(obj).toEqual(o)
  })
});
