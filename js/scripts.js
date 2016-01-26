function BankAccount(accountName, initialDeposit) {
  this.accountName = accountName;
  this.initialDeposit = initialDeposit;
};

Account.prototype.deposit = function(deposit) {
  this.initialDeposit += deposit;
};

Account.prototype.withdraw = function(withdrawAmount) {
  this.initialDeposit -= withdrawAmount;
};



$(document).ready(function(){
  $().submit(function(event){
    event.preventDefault;

  });
});
