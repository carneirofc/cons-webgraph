class Network{
   constructor() {
        if(! Network.instance){
            Network.instance = this;
        }

        this.epics2webHost = '10.0.38.42';
        this.epics2webLocation = '/epics2web';
        this.epics2webWs = 
            'ws://' + this.epics2webHost + this.epics2webLocation + '/monitor';
        this.epics2webOptions = {
            url: this.epics2webWs,
            autoOpen: true,
            autoReconnect: true,
            autoLivenessPingAndTimeout: true,
            autoDisplayClasses: true,
            pingIntervalMillis: 3000,
            livenessTimoutMillis: 2000,
            reconnectWaitMillis: 1000,
            chunkedRequestPvsCount: 400
        };

        return Network.instance;
   } 
}

const instance = new Network();
Object.freeze(instance);

export {instance as network};

