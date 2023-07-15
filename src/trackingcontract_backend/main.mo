import Debug "mo:base/Debug";
import Time "mo:base/Time.mo";

type Prize = {
  name: Text;
  value: Nat;
};

type MachinePurchase = {
  machineId: Nat;
  machineName: Text;
  purchaseDate: Time.T;
  duration: Time.Duration;
};

type TrackingContract = actor {
  prizes: [Prize];
  machinePurchases: [MachinePurchase];


  public func addPrize(name: Text ; value: Nat) : async () {
    let prize = { name = name; value = value };
    Debug.print("Adding prize: " # Debug.show(prize));
    prizes := prizes # [prize];
  };

  public func addMachinePurchase(machineId: Nat, machineName: Text, purchaseDate: Time.T, duration: Time.Duration) : async () {
    let purchase = { machineId = machineId; machineName = machineName; purchaseDate = purchaseDate; duration = duration };
    Debug.print("Adding machine purchase: " # Debug.show(purchase));
    machinePurchases := machinePurchases # [purchase];
  };

  public func getPrizes() : async [Prize] {
    return prizes;
  };

  public func getMachinePurchases() : async [MachinePurchase] {
    return machinePurchases;
  };

  public func init() : async () {
    // Initialization logic goes here
  };
};
