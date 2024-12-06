const capitalize = require("./capitalize");

test("capitalize 'string'", ()=>{
    expect(capitalize("string")).toBe("String");
});