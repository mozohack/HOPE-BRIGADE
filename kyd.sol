pragma solidity^0.5.1;
contract knowYourDrug
{
    string public manufacturerName="emcure";
    address public manufacturerAddress;
    constructor() public
    {
        manufacturerAddress=msg.sender;
    }
    struct DrugDetails
    {
        string drugName;
        string manufacturedBy;
        string drugId;
        uint32 serialNumberFrom;
        uint32 serialNumberTo;
      //  uint32[] pathOfDrug;
        string manufactureDate;
        string expiryDate;
        bool isFromAuthorisedSource;
    }
    DrugDetails[] public drugsInNetwork;
    mapping(string=>bool)drugAccounts;
    function manufacturerUpdateDrugs(string memory _drugName,string memory _drugId, uint32 _serialNumberFrom,uint32 _serialNumberTo,string memory _manufactureDate,string memory _expiryDate) public
    {
         require(msg.sender==manufacturerAddress);
       // uint32[] memory tempPath;
       // tempPath[0] = supplyChainParts[currentAccessor].recogId;
        drugsInNetwork.push(DrugDetails({
            drugName: _drugName,
            manufacturedBy: manufacturerName,
            drugId: _drugId,
            serialNumberFrom: _serialNumberFrom,
            serialNumberTo: _serialNumberTo,
           // pathOfDrug:tempPath,
            
           // pathOfDrug[pathTraceIndex]:supplyChainParts[currentAccessor].recogId,//
            manufactureDate: _manufactureDate,
            expiryDate: _expiryDate,
            isFromAuthorisedSource: true
         })
        );
        drugAccounts[_drugId]=true;
        
    }
    
}