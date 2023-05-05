// satisfies operator

type Connection = {}

declare function CreateConnection(
  host: string,
  port: string,
  reconnect: boolean,
  poolSize: number
): Connection

type Configuration = {
  host: string
  port: string | number
  tryReconnect: boolean | (() => boolean)
  poolSize?: number
}

const config = {
  host: "localhost",
  port: 3306,
  tryReconnect: () => true,
  poolSize: 10
} satisfies Configuration

function connect() {
  let { host, port, tryReconnect } = config
  
  CreateConnection(host, `${port}`, tryReconnect(), 10)
}