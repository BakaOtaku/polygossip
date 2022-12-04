import axios from "axios";

const queryIcaRegisterEvents = JSON.stringify({
  query: `{
  icaRegsiterEvents(first: 5) {
    id
    caller
    blockNumber
    blockTimestamp
  }
}`,
  variables: {},
});

export const getIcaRegister = async (url: string) => {
  try {
    const response = await axios({
      method: "post",
      url: url,
      data: queryIcaRegisterEvents,
    });
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
};
