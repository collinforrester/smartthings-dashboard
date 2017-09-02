export interface ISmartThingDevice {
  name: string;
  type: string;
  location: string;
  networkId: string|number;
  status: string;
  executionLocation: string;
}
