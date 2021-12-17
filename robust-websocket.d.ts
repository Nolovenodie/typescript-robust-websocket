declare module 'altamoon-robust-websocket' {
  class RobustWebSocket extends WebSocket {
    constructor(streamUri: string | (() => string | Promise<string>), options?: {
      timeout?: number;
      shouldReconnect?: (event: CloseEvent, ws: WebSocket) => any;
      automaticOpen?: boolean;
      ignoreConnectivityEvents?: boolean;
    });
  }

  export = RobustWebSocket;
}
