import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  IcaCallEvent,
  IcaRegsiterEvent
} from "../generated/IcaCalldata/IcaCalldata"

export function createIcaCallEventEvent(
  caller: Address,
  icamsg: string
): IcaCallEvent {
  let icaCallEventEvent = changetype<IcaCallEvent>(newMockEvent())

  icaCallEventEvent.parameters = new Array()

  icaCallEventEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  icaCallEventEvent.parameters.push(
    new ethereum.EventParam("icamsg", ethereum.Value.fromString(icamsg))
  )

  return icaCallEventEvent
}

export function createIcaRegsiterEventEvent(caller: Address): IcaRegsiterEvent {
  let icaRegsiterEventEvent = changetype<IcaRegsiterEvent>(newMockEvent())

  icaRegsiterEventEvent.parameters = new Array()

  icaRegsiterEventEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )

  return icaRegsiterEventEvent
}
