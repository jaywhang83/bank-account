function BankAccount(accountName, initialDeposit) {
  this.accountName = accountName;
  this.initialDeposit = initialDeposit;
};

BankAccount.prototype.deposit = function(inputDeposit) {
  return inputDeposit + parseInt(this.initialDeposit);
};

BankAccount.prototype.withdraw = function(withdrawAmount) {
  return  parseInt(this.initialDeposit) - withdrawAmount;
};



$(document).ready(function(){
  $("form#new-account").submit(function(event){
    event.preventDefault();
    var accountName = $("input#name").val();
    var initialDeposit = parseFloat($("input#initialDeposit").val()).toFixed(2);

    var newAccount = new BankAccount(accountName, initialDeposit);
    $(".view").show();
    $(".result").text("Your name is: " + newAccount.accountName + " and your account balance is: $" + newAccount.initialDeposit);

    $("form#depositWithdrawal").click(function() {

      var inputDeposit = parseInt($("input#deposit").val());
      var withdrawal = parseInt($("input#withdrawal").val());
      // var accountBalance = new BankAccount(accountName, initialDeposit);
      // $(".view").show();
      console.log(withdrawal);
      if (!withdrawal) {
        $(".balance").text(newAccount.deposit(inputDeposit));
      }
      else {
        $(".balance").text(newAccount.withdraw(withdrawal));
      }

    });
  });
});
