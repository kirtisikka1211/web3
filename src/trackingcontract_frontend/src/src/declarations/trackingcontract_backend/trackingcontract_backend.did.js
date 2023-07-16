export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addPrize' : IDL.Func([IDL.Text, IDL.Nat, IDL.Text, IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
