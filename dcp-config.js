
/* Generated Sat Aug 14 2021 08:59:00 GMT-0400 (Eastern Daylight Time) by dcp uid 1002 on services4 */
window.dcpConfig = {
  "needs": 
  {
    "urlPatchup": true
  },
  "worker": 
  {
    "computeGroups": 
    [
      {
        "opaqueId": "WHhetL7mj1w1mw1XV6dxyC",
        "id": 1,
        "name": "Public Compute Group (open access)",
        "joinKey": "public",
        "joinSecret": "",
        "joinKeystore": false
      }
    ],
    "dcp": 
    {
      "connectionOptions": 
      {
        "default": 
        {
          "identityUnlockTimeout": 900
        }
      }
    },
    "sliceOverfetchRatio": 1.5,
    "maxAllowedSandboxes": 0,
    "maxErrorsPerWorker": 3,
    "pCores": 0,
    "sandbox": 
    {
      "bootstrapCacheTTL": 600000,
      "sliceTimeout": 86400000,
      "progressTimeout": 180000,
      "progressThrottle": 0.1,
      "progressReportInterval": 150000
    },
    "allowOrigins": 
    {
      "any": 
      [
        "https://scheduler.distributed.computer"
      ],
      "fetchWorkFunctions": [],
      "fetchArguments": [],
      "fetchData": [],
      "sendResults": []
    },
    "minimumWage": 
    {
      "CPU": 0,
      "GPU": 0,
      "in": 0,
      "out": 0
    }
  },
  "dcp": 
  {
    "connectionOptions": 
    {
      "default": 
      {
        "allowBatch": true,
        "maxMessagesPerBatch": 10,
        "closeTimeout": 30,
        "identityUnlockTimeout": 300,
        "ttl": 
        {
          "min": 15,
          "max": 600,
          "default": 120
        },
        "transports": 
        [
          "socketio"
        ],
        "socketio": 
        {
          "timeout": 600,
          "maxRetries": 10
        }
      }
    },
    "connectionManager": 
    {
      "connectionTimeout": 18000
    },
    "validitySlopValue": 10,
    "validityStampCachePurgeInterval": 60000,
    "maxConnectionTimeout": 300000
  },
  "packageManager": 
  {
    "location": new URL('https://packages.distributed.computer/'),
    "identity": Promise.resolve('0xC6Ff3Ada812725d3F63661E206D28356adF40eFC')
  },
  "scheduler": 
  {
    "location": new URL('https://scheduler.distributed.computer/'),
    "identity": Promise.resolve('0x070847827acB2396922ed0f83BE808f4a67a8B3F'),
    "worker": 
    {
      "types": 
      [
        "v4"
      ],
      "operations": "1.0.0"
    },
    "compatibility": 
    {
      "minimum": 
      {
        "dcp": "^5.0.0",
        "dcp-client": "^4.0.0",
        "dcp-worker": "^2.1.0",
        "operations": 
        {
          "work": "^4.1.0",
          "compute": "^1.0.0",
          "bank": "^4.0.0"
        }
      },
      "exclusions": 
      {}
    },
    "services": 
    {
      "webConfig": 
      {},
      "eventRouter": 
      {
        "location": new URL('https://scheduler.distributed.computer/events/'),
        "identity": Promise.resolve('0x070847827acB2396922ed0f83BE808f4a67a8B3F')
      },
      "jobSubmit": 
      {
        "location": new URL('https://scheduler.distributed.computer/job-submit/'),
        "identity": Promise.resolve('0x070847827acB2396922ed0f83BE808f4a67a8B3F')
      },
      "computeGroups": 
      {
        "location": new URL('https://scheduler.distributed.computer/compute-groups/'),
        "identity": Promise.resolve('0x070847827acB2396922ed0f83BE808f4a67a8B3F')
      },
      "taskDistributor": 
      {
        "location": new URL('https://scheduler.distributed.computer/task-distributor/'),
        "identity": Promise.resolve('0x070847827acB2396922ed0f83BE808f4a67a8B3F')
      },
      "resultSubmitter": 
      {
        "location": new URL('https://scheduler.distributed.computer/result-submitter/'),
        "identity": Promise.resolve('0x070847827acB2396922ed0f83BE808f4a67a8B3F')
      },
      "sheepdog": 
      {},
      "thanatos": 
      {
        "location": new URL('https://scheduler.distributed.computer/thanatos/'),
        "identity": Promise.resolve('0x070847827acB2396922ed0f83BE808f4a67a8B3F')
      },
      "pheme": 
      {
        "location": new URL('https://scheduler.distributed.computer/pheme/'),
        "identity": Promise.resolve('0x070847827acB2396922ed0f83BE808f4a67a8B3F')
      },
      "mailgw": 
      {
        "location": new URL('https://scheduler.distributed.computer/mailgw/'),
        "identity": Promise.resolve('0x070847827acB2396922ed0f83BE808f4a67a8B3F')
      }
    }
  },
  "global": 
  {
    "useBlockchain": false
  },
  "bank": 
  {
    "identity": Promise.resolve('0xc1E428f6c821737ec0EFC91fBf6FE137728aF97F'),
    "location": new URL('https://bank.distributed.computer/'),
    "services": 
    {
      "bankTeller": 
      {
        "location": new URL('https://bank.distributed.computer/bank-teller'),
        "identity": Promise.resolve('0xc1E428f6c821737ec0EFC91fBf6FE137728aF97F')
      },
      "foreignExchange": 
      {
        "location": new URL('https://bank.distributed.computer/foreign-exchange/'),
        "identity": Promise.resolve('0xc1E428f6c821737ec0EFC91fBf6FE137728aF97F')
      }
    }
  },
  "portal": 
  {
    "location": new URL('https://portal.distributed.computer/operations'),
    "identity": Promise.resolve('0x1C6Ba4061Bd6d9f0a1C61DFA10299A12F575d4Fc'),
    "isDown": false
  },
  "job": 
  {
    "maxDeployTime": 120
  },
  "build": "release",
  "evaluator": 
  {
    "listen": new URL('http://localhost:9000/'),
    "location": new URL('http://localhost:9000/'),
    "friendLocation": new URL('http://localhost:9000/')
  },
  "standaloneWorker": 
  {
    "debug": false,
    "evaluatorConnectBackoff": 
    {
      "backoffFactor": 1.1,
      "baseInterval": 10000,
      "maxInterval": 300000
    },
    "quiet": false,
    "reloadBehaviour": "process.exit(12)"
  },
  "pxAuth": 
  {
    "listen": new URL('http://localhost:3009/'),
    "friendLocation": new URL('http://localhost:3009/'),
    "location": new URL('https://auth.distributed.computer/'),
    "ormdb": 
    {
      "hostname": "services-db",
      "username": "services_dba",
      "password": "re-wearing clothes for as long as possible to avoid washing them and wearing down the fabric because you cant afford to buy more",
      "port": "3306",
      "database": "px_auth",
      "schema": "px-auth-mysql-schema.js"
    },
    "repl": 
    {
      "port": 23009,
      "prompt": "px> ",
      "histfile": "~/.dcp/event-router-history.repl"
    }
  }
};
if (typeof module === 'object' && typeof module.declare === 'function') /* cjs2 */
  module.declare(function(require, exports, module) {});
