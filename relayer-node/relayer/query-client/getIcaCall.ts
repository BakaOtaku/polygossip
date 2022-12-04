import axios from "axios";

const queryIcaCallEvents = JSON.stringify({
  query: `{
  icaCallEvents(first: 5) {
    id
    caller
    icamsg
    blockNumber
  }
}`,
  variables: {},
});

export const getIcaCall = async (url: string) => {
  try {
    const response = await axios({
      method: "post",
      url: url,
      data: queryIcaCallEvents,
    });
    console.log(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
};
