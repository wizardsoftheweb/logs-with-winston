import { ok } from "assert";
import { Logger, transports } from "winston";

import { LogsWithWinston } from "@wizardsoftheweb/logs-with-winston";

const logger = new Logger({
    transports: [
        new (transports.Console)(),
        new (transports.File)({ filename: "somefile.log" }),
    ],
});

@LogsWithWinston(logger)
class Foo {
    constructor() {
        // do nothing
    }
}

const example = new Foo();
ok((example as any).logger === logger);
// OK
