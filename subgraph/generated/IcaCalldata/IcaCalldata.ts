// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class IcaCallEvent extends ethereum.Event {
  get params(): IcaCallEvent__Params {
    return new IcaCallEvent__Params(this);
  }
}

export class IcaCallEvent__Params {
  _event: IcaCallEvent;

  constructor(event: IcaCallEvent) {
    this._event = event;
  }

  get caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get icamsg(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class IcaRegsiterEvent extends ethereum.Event {
  get params(): IcaRegsiterEvent__Params {
    return new IcaRegsiterEvent__Params(this);
  }
}

export class IcaRegsiterEvent__Params {
  _event: IcaRegsiterEvent;

  constructor(event: IcaRegsiterEvent) {
    this._event = event;
  }

  get caller(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class IcaCalldata extends ethereum.SmartContract {
  static bind(address: Address): IcaCalldata {
    return new IcaCalldata("IcaCalldata", address);
  }

  whitelisted(param0: Address): boolean {
    let result = super.call("whitelisted", "whitelisted(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_whitelisted(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("whitelisted", "whitelisted(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class IcaCallCall extends ethereum.Call {
  get inputs(): IcaCallCall__Inputs {
    return new IcaCallCall__Inputs(this);
  }

  get outputs(): IcaCallCall__Outputs {
    return new IcaCallCall__Outputs(this);
  }
}

export class IcaCallCall__Inputs {
  _call: IcaCallCall;

  constructor(call: IcaCallCall) {
    this._call = call;
  }

  get icamsg(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class IcaCallCall__Outputs {
  _call: IcaCallCall;

  constructor(call: IcaCallCall) {
    this._call = call;
  }
}

export class IcaCallWhitelistCall extends ethereum.Call {
  get inputs(): IcaCallWhitelistCall__Inputs {
    return new IcaCallWhitelistCall__Inputs(this);
  }

  get outputs(): IcaCallWhitelistCall__Outputs {
    return new IcaCallWhitelistCall__Outputs(this);
  }
}

export class IcaCallWhitelistCall__Inputs {
  _call: IcaCallWhitelistCall;

  constructor(call: IcaCallWhitelistCall) {
    this._call = call;
  }

  get icamsg(): string {
    return this._call.inputValues[0].value.toString();
  }

  get caller(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class IcaCallWhitelistCall__Outputs {
  _call: IcaCallWhitelistCall;

  constructor(call: IcaCallWhitelistCall) {
    this._call = call;
  }
}

export class RegisterWhitelistedCall extends ethereum.Call {
  get inputs(): RegisterWhitelistedCall__Inputs {
    return new RegisterWhitelistedCall__Inputs(this);
  }

  get outputs(): RegisterWhitelistedCall__Outputs {
    return new RegisterWhitelistedCall__Outputs(this);
  }
}

export class RegisterWhitelistedCall__Inputs {
  _call: RegisterWhitelistedCall;

  constructor(call: RegisterWhitelistedCall) {
    this._call = call;
  }

  get caller(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class RegisterWhitelistedCall__Outputs {
  _call: RegisterWhitelistedCall;

  constructor(call: RegisterWhitelistedCall) {
    this._call = call;
  }
}

export class RegisterCall extends ethereum.Call {
  get inputs(): RegisterCall__Inputs {
    return new RegisterCall__Inputs(this);
  }

  get outputs(): RegisterCall__Outputs {
    return new RegisterCall__Outputs(this);
  }
}

export class RegisterCall__Inputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }
}

export class RegisterCall__Outputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }
}

export class WhitelistCall extends ethereum.Call {
  get inputs(): WhitelistCall__Inputs {
    return new WhitelistCall__Inputs(this);
  }

  get outputs(): WhitelistCall__Outputs {
    return new WhitelistCall__Outputs(this);
  }
}

export class WhitelistCall__Inputs {
  _call: WhitelistCall;

  constructor(call: WhitelistCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class WhitelistCall__Outputs {
  _call: WhitelistCall;

  constructor(call: WhitelistCall) {
    this._call = call;
  }
}
