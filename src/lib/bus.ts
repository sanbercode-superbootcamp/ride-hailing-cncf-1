import { connect, Client } from "nats";

export let bus: Client;

export function connectToBus(): Promise<any> {
  bus = connect({ 
    json: true, 
    url: process.env["NATS_URL"] || "nats://localhost:4222"
  });
  return new Promise((resolve, reject) => {
    bus.once('connect', () => {
      console.log('connected to message bus');
      resolve();
    });
    bus.once('error', () => {
      reject();
    });
  });
}

