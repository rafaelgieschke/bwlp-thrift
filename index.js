const mainServer = "bwlp-masterserver.ruf.uni-freiburg.de";
const sat1Server = "bwlp-pxe.ruf.uni-freiburg.de";

import { Thrift } from "./thrift.esm.js";
import { MasterServerClient, SatelliteServerClient } from "./bwlp.esm.js";

const proto = new Thrift.Protocol(
  new Thrift.Transport(`https://${mainServer}/thrift/`)
);
export const main = new MasterServerClient(proto);

const proto2 = new Thrift.Protocol(
  new Thrift.Transport(`https://${sat1Server}/thrift/`)
);
export const sat = new SatelliteServerClient(proto2);

const login = "test@uni-freiburg.de";
const password = prompt(login);
export const { authToken, userInfo } = await main.localAccountLogin(
  login,
  password
);

import {
  LitElement,
  html,
  until,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js";

class BwLehrpool extends LitElement {
  async renderAsync() {
    const list = await sat.getImageList(authToken, [], 0);
    return list.map(
      (v) => html` <tr>
        <td>${v.imageName}</td>
        <td>${new Date(v.createTime * 1000).toJSON()}</td>
        <td>${v.fileSize}</td>
        <td>${v.ownerId}</td>
        <td>
          <button
            @click=${async (ev) =>
              alert(
                (await sat.requestDownload(authToken, v.latestVersionId))
                  .machineDescription
              )}
          >
            download
          </button>
        </td>
      </tr>`
    );
  }
  render() {
    return until(this.renderAsync());
  }
}
customElements.define("bw-lehrpool", BwLehrpool);

(async () => Object.assign(globalThis, await import(import.meta.url)))();
