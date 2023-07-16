import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Nat "mo:base/Nat";

actor  {
  type Prize = {
    name: Text;
    value: Nat;
     userAddress: Text;
     nameOfMachine: Text;
  };


  var prizes: [Prize] = [];
  var address: Text = "";
  var machineName: Text = "";


  public func addPrize(name: Text, value: Nat, userAddress: Text, nameOfMachine: Text) : async () {
    let newPrize = {
      name = name;
      value = value;
    };
  };
}

