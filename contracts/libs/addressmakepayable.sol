pragma solidity >=0.5.0 <0.6.0;

library AddressMakePayable {
    function makePayable(address x) internal pure returns (address payable) {
        return address(uint160(x));
    }
}
