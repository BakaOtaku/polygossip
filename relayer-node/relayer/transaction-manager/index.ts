import ethers from "ethers";
import { getWallet } from "../account";
import { getIcaCall } from "../query-client/getIcaCall";
import { getIcaRegister } from "../query-client/getIcaRegister";
import ABI from "../utils/abi";

const url = "http://localhost:8000/subgraphs/name/amanraj1608/layer/graphql";

const getEvents = async () => {
  const icaRegister = await getIcaRegister(url);
  console.log((icaRegister as any).icaCallEvents);

  const icaCallTx = await getIcaCall(url);
  console.log((icaCallTx as any).icaRegsiterEvents);
};

setInterval(getEvents, 1000);

export const sendTransaction = async (to: string, value: any, data: any) => {
  const wallet = getWallet();

  // contrract initialization using ethers
  const contract = new ethers.Contract(
    "0xA08410E8Cfcc6Fc7357D5062D66826b8E9CAe2b5",
    ABI,
    wallet
  );

  // send transaction
  const tx = await contract.icamsg(data);
  return tx;
};
