describe('BankAccount', function() {
  it("takes name and returns name", function() {
    var testAccount = new BankAccount("Joe Smith");
    expect(testAccount.accountName).to.equal("Joe Smith");
    });
  });
