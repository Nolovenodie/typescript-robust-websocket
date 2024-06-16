declare module 'typescript-robust-websocket' {
  class RobustWebSocket extends WebSocket {
    constructor(streamUri: string | (() => string | Promise<string>), protocols: string[], options?: {
      timeout?: number;
      shouldReconnect?: (event: CloseEvent, ws: WebSocket) => any;
      automaticOpen?: boolean;
      ignoreConnectivityEvents?: boolean;
    });
  }
}
export = RobustWebSocket;
