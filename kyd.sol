pragma solidity^0.5.1;
contract knowYourDrug
{
    string public manufacturerName="emcure";
    address public manufacturerAddress;
    uint32 public currentAccessor;
    uint32 public currentDrugAccessed;
    bool public exception;
    bool public drugException;
    constructor() public
    {
        manufacturerAddress=msg.sender;
    }
  
     struct partOfSupplyChain
    {
        string corresName;
        //string designationInChain;
        uint32 recogId;
       // bool isManufacturer;
        bool isWarehouse;
        bool isSupplier; 
        bool isSubSupplier;
       // bool isSubSupplier;
        bool isRetailer;
    }
    mapping (uint32 => bool) accounts;
    partOfSupplyChain[] public supplyChainParts;
    
    function updateSupplyChainDetails(string memory _name, uint32 _id,bool _isWarehouse,bool _isSupplier,bool _isSubSupplier,bool _isretailer) public
    {
        //require(msg.sender==Manager);
        supplyChainParts.push(partOfSupplyChain({
            corresName: _name,
            //designationInChain: _designation,
            recogId: _id,
            isWarehouse: _isWarehouse,
            isSupplier: _isSupplier,
            isSubSupplier: _isSubSupplier,
            isRetailer: _isretailer
        }));
        accounts[_id]=true;
    }
    
    function toSignIn(uint32 _id) public returns (string memory,string memory,uint32,bool) 
    {
    
        if(accounts[_id]==true){
            for(uint32 index=0;index<supplyChainParts.length;index++)
            {
                if(supplyChainParts[index].recogId==_id)
                {
                    currentAccessor = index;
                   // return(supplyChainParts[index].corresName,supplyChainParts[index].designationInChain,supplyChainParts[index].recogId,supplyChainParts[index].isManufacturer);
                }
            }
        }
    }
  
    struct DrugDetails
    {
        string drugName;
        //string manufacturedBy;
        string drugId;
        uint32 serialNumberFrom;
        uint32 serialNumberTo;
      //  uint32[] pathOfDrug;
        string manufactureDate;
        string expiryDate;
       // uint32[] pathOfDrug;
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
            //manufacturedBy: manufacturerName,
            drugId: _drugId,
            serialNumberFrom: _serialNumberFrom,
            serialNumberTo: _serialNumberTo,
           // pathOfDrug:tempPath,
         // pathOfDrug[pathTraceIndex]:supplyChainParts[currentAccessor].recogId,//
         
         
           function updatePath(uint32 supplyChainParts[currentAccessor].recogId) public
            {
         
            pathOfDrug.push(supplyChainParts[currentAccessor].recogId)
            
            }
            
          
            
            manufactureDate: _manufactureDate,
            expiryDate: _expiryDate,
            isFromAuthorisedSource: true
         })
        );
        drugAccounts[_drugId]=true;
        
    }
    
    
     function manufacturerUpdateDrugs(uint32 rid,string memory _drugName,string memory _drugId, uint32 _serialNumberFrom,uint32 _serialNumberTo,string memory _manufactureDate,string memory _expiryDate) public
    {
         require(accounts[rid]);
         require(supplyChainParts[currentAccessor].isManufacturer);
       // uint32[] memory tempPath;
       // tempPath[0] = supplyChainParts[currentAccessor].recogId;
       
      
        drugsInNetwork.push(DrugDetails({
            drugName: _drugName,
            manufacturedBy: supplyChainParts[currentAccessor].corresName,
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
    
    struct Supplier
    {
        uint32 recogId;
        string drugId;
        uint32 havingSerialNumberFrom;
        uint32 havingSerialNumberTo;
        string checkInDate;
        string checkOutDate;
        bool received;
    }
    Supplier[] public Suppliers;
    
    function supplierUpdateDrugs(uint32 _ID,string memory _drugId,uint32 _serialNumberFrom,uint32 _serialNumberTo, string memory _checkInDate, string memory _checkOutDate) public
    {
        require(drugAccounts[_drugId]);
        require(accounts[_ID]);
        require(supplyChainParts[currentAccessor].isManufacturer==false);
       for(uint32 index=0;index<drugsInNetwork.length;index++)
        {
            string memory t = drugsInNetwork[index].drugId;
            if(keccak256(bytes(t))==keccak256(bytes(_drugId)))
            {
                currentDrugAccessed=index;
                break;
            }
            else
            {
                drugException=true;
                break;
            }
        }
        if(drugException==false){
           // uint32[] memory tempPath;
           // tempPath[0] = supplyChainParts[currentAccessor].recogId;
            
            Suppliers.push(Supplier({
                recogId:supplyChainParts[currentAccessor].recogId,
                drugId:_drugId,
                havingSerialNumberFrom:_serialNumberFrom,
                havingSerialNumberTo:_serialNumberTo,
                checkInDate:_checkInDate,
                checkOutDate:_checkOutDate,
                received: true
            //have to include his recogId in the pathOfDrug of the drug
            }));
            
            //drugsInNetwork[currentDrugAccessed].pathOfDrug = tempPath;
        }
        
        
    }
    
    
    
    
    
    
    
    
    
    
 }
