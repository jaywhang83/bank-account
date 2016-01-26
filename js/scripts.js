function BankAccount(accountName, initialDeposit) {
  this.accountName = accountName;
  this.initialDeposit = initialDeposit;
};

BankAccount.prototype.deposit = function(deposit) {
  this.initialDeposit += deposit;
};

BankAccount.prototype.withdraw = function(withdrawAmount) {
  this.initialDeposit -= withdrawAmount;
};



$(document).ready(function(){
  $("form#new-account").submit(function(event){
    event.preventDefault();
    var accountName = $("input#name").val();
    var initialDeposit = parseFloat($("input#initialDeposit").val()).toFixed(2);

    var newAccount = new BankAccount(accountName, initialDeposit);
    $(".view").show();
    $(".result").text("Your name is: " + newAccount.accountName + "And your account balance is: " + newAccount.initialDeposit);

  });
});
