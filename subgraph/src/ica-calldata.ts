import {
  IcaCallEvent as IcaCallEventEvent,
  IcaRegsiterEvent as IcaRegsiterEventEvent
} from "../generated/IcaCalldata/IcaCalldata"
import { IcaCallEvent, IcaRegsiterEvent } from "../generated/schema"

export function handleIcaCallEvent(event: IcaCallEventEvent): void {
  let entity = new IcaCallEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.icamsg = event.params.icamsg

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIcaRegsiterEvent(event: IcaRegsiterEventEvent): void {
  let entity = new IcaRegsiterEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
