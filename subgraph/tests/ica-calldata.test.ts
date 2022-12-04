import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { IcaCallEvent } from "../generated/schema"
import { IcaCallEvent as IcaCallEventEvent } from "../generated/IcaCalldata/IcaCalldata"
import { handleIcaCallEvent } from "../src/ica-calldata"
import { createIcaCallEventEvent } from "./ica-calldata-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let caller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let icamsg = "Example string value"
    let newIcaCallEventEvent = createIcaCallEventEvent(caller, icamsg)
    handleIcaCallEvent(newIcaCallEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("IcaCallEvent created and stored", () => {
    assert.entityCount("IcaCallEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "IcaCallEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "caller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "IcaCallEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "icamsg",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
