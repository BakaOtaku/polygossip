package main

//
//import (
//	"encoding/base64"
//	"fmt"
//
//	sdk "github.com/cosmos/cosmos-sdk/types"
//	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
//
//	"github.com/tharsis/evmos/v4/app"
//)
//
//func main() {
//	//msg := "{'@type':'/cosmos.staking.v1beta1.MsgDelegate','delegator_address':'evmos16kt0s0e57wl7gjvyrhmnrl9epaa82r7qyv6dxzef4dj23akycutqnzchq7','validator_address':'evmosvaloper100s3yp8l3atuuvx98jmftttxzy4ee5mgk6uqtz','amount': {denom: aevmos,amount: 1000}}"
//	//msg2 := msg[0]
//	//fmt.Println(msg2)
//	//res1 := strings.Split(msg, ",")
//	//
//	//for _, a := range res1 {
//	//	fmt.Println(a)
//	//}
//	//some, err := sdk.AccAddressFromBech32("evmos1n3t0zuwq4u47ke48qm3pfhj96f4ujhs77weln3")
//	//fmt.Println(err)
//	//coin := sdk.NewCoin("stake", sdk.NewInt(int64(10)))
//	//msg := banktypes.NewMsgSend(some, some, sdk.Coins{coin})
//	//fmt.Println(msg)
//	//fmt.Println(msg.GetSignBytes())
//	//a, err := msg.Marshal()
//	msg := "{\"@type\":\"/cosmos.staking.v1beta1.MsgDelegate\",\"delegator_address\":\"evmos16kt0s0e57wl7gjvyrhmnrl9epaa82r7qyv6dxzef4dj23akycutqnzchq7\",\"validator_address\":\"evmosvaloper100s3yp8l3atuuvx98jmftttxzy4ee5mgk6uqtz\",\"amount\":{\"denom\":\"aevmos\",\"amount\":\"1000\"}}"
//	fmt.Println(msg)
//
//	//var newmsg banktypes.MsgSend
//	// marshal msg from codec
//	newcodec, _ := app.SetupTestingApp()
//	//data, err := newcodec.AppCodec().MarshalJSON(msg)
//	//fmt.Println(err)
//	//fmt.Println(data)
//
//	// unmarshal msg from codec
//	var someotherthing sdk.Msg
//
//	encoded := base64.StdEncoding.EncodeToString([]byte(msg))
//	fmt.Println(encoded)
//
//	decoded, err := base64.StdEncoding.DecodeString(encoded)
//	fmt.Println(err)
//
//	err = newcodec.AppCodec().UnmarshalInterfaceJSON(decoded, &someotherthing)
//
//	fmt.Println("this is interface unmarshalling", someotherthing)
//	fmt.Println(someotherthing.String())
//	//fmt.Println(err)
//	//fmt.Println("this is here", othermsg1.String())
//	////fmt.Println(msg)
//	//
//	//var somemsg sdk.Msg
//	//err = newcodec.AppCodec().UnmarshalInterface(data, &somemsg)
//	//fmt.Println(err)
//	//fmt.Println(somemsg)
//
//	//bytearray := []byte{10, 45, 99, 111, 115, 109, 111, 115, 49, 113, 110, 107, 50, 110, 52, 110, 108, 107, 112, 119, 57, 120, 102, 113, 110, 116, 108, 97, 100, 104, 55, 52, 119, 54, 117, 106, 116, 117, 108, 119, 110, 55, 106, 56, 122, 97, 57, 18, 45, 99, 111, 115, 109, 111, 115, 49, 113, 110, 107, 50, 110, 52, 110, 108, 107, 112, 119, 57, 120, 102, 113, 110, 116, 108, 97, 100, 104, 55, 52, 119, 54, 117, 106, 116, 117, 108, 119, 110, 55, 106, 56, 122, 97, 57, 26, 11, 10, 5, 115, 116, 97, 107, 101, 18, 2, 49, 48}
//	//en := base64.StdEncoding.EncodeToString(bytearray)
//	//fmt.Println(en)
//	///
//	//newdata, err := base64.StdEncoding.DecodeString(en)
//	//fmt.Println(err)
//	//
//	//other := newdata.(proto.Message)
//	//
//	//othermsg := findmsg("send", newdata)
//	//fmt.Println(othermsg[0].String())
//
//	//newmsg.Unmarshal(bytearray)
//	//fmt.Println(newmsg.String())
//	//fmt.Println(err)
//	//_ = []sdk.Msg{msg}
//	//encoded,:= "ewogICJAdHlwZSI6ICIvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kIiwKICAiZnJvbV9hZGRyZXNzIjogImV2bW9zMWVoaDU1MDNuMnJocHo4ZXZmcXBzYTYya2ZxYzU4YzVnN2RtODU1IiwKICAidG9fYWRkcmVzcyI6ICJldm1vczE2NWN5ams2dWpoankzY3l4a2oyd2RxdzNmajNrNjlrcXNyY2xyNSIsCiAgImFtb3VudCI6IFsKICAgIHsKICAgICAgImRlbm9tIjogImFldm1vcyIsCiAgICAgICJhbW91bnQiOiAiMTAwIgogICAgfQogIF0KfQ=="
//
//	//data, err := base64.StdEncoding.DecodeString(encoded)
//	//fmt.Println(string(data))
//	//
//	//if err != nil {
//	//	fmt.Println(err)
//	//}
//	//
//	//var jsonMap map[string]interface{}
//	//json.Unmarshal([]byte(data), &jsonMap)
//	//
//	//fmt.Println(jsonMap)
//
//	//fmt.Printf("%q\n", data)
//	//add, err := sdk.AccAddressFromBech32("cosmos1qnk2n4nlkpw9xfqntladh74w6ujtulwn7j8za9")
//	//fmt.Println(err)
//	//coin := sdk.NewCoin("evmos", sdk.NewInt(int64(10)))
//	//msg := banktypes.NewMsgSend(add, add, sdk.Coins{coin})
//	//data, err := msg.Marshal()
//	//fmt.Println(data)
//
//	//newmsg.String()
//	//fmt.Println(newmsg.String())
//
//	//var newmsg sdk.Msg
//
//	//newmsg := sdk.MsgData{
//	//	MsgType: "",
//	//	Data:    nil,
//	//}
//
//	////	//addr := "0x34D6231c09AA82A5A446412b2372c9F972055548"
//	////	data := "{\"body\":{\"messages\":[{\"@type\":\"/cosmos.bank.v1beta1.MsgSend\",\"from_address\":\"evmos1ehh5503n2rhpz8evfqpsa62kfqc58c5g7dm855\",\"to_address\":\"evmos165cyjk6ujhjy3cyxkj2wdqw3fj3k69kqsrclr5\",\"amount\":[{\"denom\":\"aevmos\",\"amount\":\"10000\"}]}],\"memo\":\"\",\"timeout_height\":\"0\",\"extension_options\":[],\"non_critical_extension_options\":[]},\"auth_info\":{\"signer_infos\":[{\"public_key\":{\"@type\":\"/ethermint.crypto.v1.ethsecp256k1.PubKey\",\"key\":\"Avk3PrWoj8AhU56PNdU8vY0qv1y9OZ6ad0WYV7rlBQI1\"},\"mode_info\":{\"single\":{\"mode\":\"SIGN_MODE_DIRECT\"}},\"sequence\":\"0\"}],\"fee\":{\"amount\":[],\"gas_limit\":\"200000\",\"payer\":\"\",\"granter\":\"\"}},\"signatures\":[\"YP2yUIzYx/6eLuC+Q9K/+a4aqg/9Wxz8uu9SIOEv1sspmc9rOhuTfs/7cNlv0ir6ssKMboYfQkZyjgHAtvDRLwA=\"]}\n"
//	////	//oth := sdk.BytesTo(addr)
//	////	var msg sdk.Msg
//	////	err := json.Unmarshal([]byte(data), &msg)
//	////	fmt.Println(err)
//	////
//	////	fmt.Println(msg)
//	////
//	////	//from := common.BytesToAddress([]byte(addr))
//	////	//recipient := sdk.AccAddress(from.Bytes())
//	////	////fmt.Println(err)
//	////	////otheradd := common.IsHexAddress(addr)
//	////	//fmt.Println(recipient.String())
//}
//
//func findmsg(typeurl string, data []byte) []sdk.Msg {
//	msgs := []sdk.Msg{}
//
//	switch typeurl {
//	case "send":
//		var msg banktypes.MsgSend
//		msg.Unmarshal(data)
//		return append(msgs, &msg)
//	}
//
//	return nil
//}
