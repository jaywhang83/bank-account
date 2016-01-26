describe('BankAccount', function() {
  it("takes initial deposit and returns deposit", function() {
    var testAccount = new BankAccount("Joe Smith", 100);
    expect(testAccount.accountName).to.equal("Joe Smith");
    expect(testAccount.initialDeposit).to.equal(100);
    });
  });
