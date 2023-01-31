import { Component, OnInit } from '@angular/core';
import { HttpServices } from '../../commons/services/http.services';
import { InugamiAsideMenu } from '../components/inugami-aside-menu/inugami.aside.menu';

@Component({
    templateUrl: './inugami.api.view.html'
})
export class InugamiApiView  implements  OnInit {

    /**************************************************************************
    * ATTRIBUTES
    **************************************************************************/
    public sourceCode : any = {};
     
     
    /**************************************************************************
    * CONSTRUCTORS
    **************************************************************************/
    constructor(private httpService : HttpServices) {
    }
    ngOnInit(): void {
        this.httpService.getSourceCode("data/inugami_api/source_code.txt").then(data=> this.initData(data.split("\n")));
    }
  

    private initData(values:string[]){
        this.sourceCode['empty']                        ="";
        this.sourceCode['gav']                          = this.extractLines(values, 1,5);
        this.sourceCode['builder']                      = this.extractLines(values, 9,13);
        this.sourceCode['consumerWithException']        = this.extractLines(values, 17,21);
        this.sourceCode['errorCodeResolver']            = this.extractLines(values, 25,29);
        this.sourceCode['filterFunction']               = this.extractLines(values, 34,38);
        this.sourceCode['functionWithException']        = this.extractLines(values, 43,47);
        this.sourceCode['jsonUnmarshalling']            = this.extractLines(values, 51,55);
        this.sourceCode['mapper']                       = this.extractLines(values, 58,62);
        this.sourceCode['postProcessing']               = this.extractLines(values, 66,71);
        this.sourceCode['taskFinishListener']           = this.extractLines(values, 74,82);
        this.sourceCode['taskStartListener']            = this.extractLines(values, 87,91);
        this.sourceCode['triConsumer']                  = this.extractLines(values, 95,99);
        this.sourceCode['validatorFunction']            = this.extractLines(values, 103,107);
        this.sourceCode['VoidFunction']                 = this.extractLines(values, 111,115);
        this.sourceCode['VoidFunctionWithException']    = this.extractLines(values, 119,123);
        this.sourceCode['stringDataCleaner']            = this.extractLines(values, 127,140);
        this.sourceCode['applyIfNotNull']               = this.extractLines(values, 144,159);
        this.sourceCode['applyIfNotNullAndSameType']    = this.extractLines(values, 163,174);
        this.sourceCode['applyIfNull']                  = this.extractLines(values, 178,183);
        this.sourceCode['functionMustThrow']            = this.extractLines(values, 187,193);
        this.sourceCode['jsonObject']                   = this.extractLines(values, 205,117);
        this.sourceCode['namedComponent']               = this.extractLines(values, 220,225);
        this.sourceCode['dao']                          = this.extractLines(values, 256,476);
        this.sourceCode['futureData']                   = this.extractLines(values, 479,490);
        this.sourceCode['lifecycleBootstrap']           = this.extractLines(values, 493,497);
        this.sourceCode['onDoneFunction']               = this.extractLines(values, 500,506);
        this.sourceCode['onErrorFunction']              = this.extractLines(values, 509,515);
        this.sourceCode['onStart']                      = this.extractLines(values, 518,522);
        this.sourceCode['classBehaviorParametersSPI']   = this.extractLines(values, 531,536);
        this.sourceCode['configHandler']                = this.extractLines(values, 539,559);
        this.sourceCode['noForcingEventProvider']       = this.extractLines(values, 562,565);
        this.sourceCode['processor']                    = this.extractLines(values, 568,571);
        this.sourceCode['propertiesProducerSpi']        = this.extractLines(values, 574,582);
        this.sourceCode['provider']                     = this.extractLines(values, 586,602);
        this.sourceCode['providerCallbackOnError']      = this.extractLines(values, 605,609);
        this.sourceCode['providerForce']                = this.extractLines(values, 612,615);
        this.sourceCode['providerRunner']               = this.extractLines(values, 618,622);
        this.sourceCode['providerTask']                 = this.extractLines(values, 625,636);
        this.sourceCode['providerWithHttpConnector']    = this.extractLines(values, 639,688);
        this.sourceCode['providerWriter']               = this.extractLines(values, 691,694);
        this.sourceCode['spiConfigurable']              = this.extractLines(values, 697,703);
        this.sourceCode['bootstrapMonitoringSpi']       = this.extractLines(values, 705,710);
        this.sourceCode['genericMonitoringModel']       = this.extractLines(values, 713,735);
        this.sourceCode['monitoringFilterInterceptor']  = this.extractLines(values, 738,753);
        this.sourceCode['monitoringInitializer']        = this.extractLines(values, 756,760);
        this.sourceCode['monitoringLoaderSpi']          = this.extractLines(values, 763,766);
        this.sourceCode['monitoringSender']             = this.extractLines(values, 769,777);
        this.sourceCode['monitoringSensor']             = this.extractLines(values, 780,791);
        this.sourceCode['errorCode']                    = this.extractLines(values, 794,865);
        this.sourceCode['errorCodeEnum']                = this.extractLines(values, 868,905);
        this.sourceCode['errorCodeUsage']               = this.extractLines(values, 908,910);
        this.sourceCode['asserts']                      = this.extractLines(values, 913,1043);
        this.sourceCode['warning']                      = this.extractLines(values, 1046,1084);
        this.sourceCode['warningEnum']                  = this.extractLines(values, 1087,1107);
        this.sourceCode['warningUsage']                 = this.extractLines(values, 1110,1116);
        this.sourceCode['mySpiService']                 = this.extractLines(values, 1119,1123);
        this.sourceCode['mySpiServiceDefault']          = this.extractLines(values, 1126,1138);
        this.sourceCode['someService']                  = this.extractLines(values, 1141,1149);
        this.sourceCode['spiLoader']                    = this.extractLines(values, 1152,1196);
        this.sourceCode['spiPriority']                  = this.extractLines(values, 1199,1213);
        this.sourceCode['spiPriority']                  = this.extractLines(values, 1199,1213);
        this.sourceCode['someServicePriority']          = this.extractLines(values, 1217,1227);
        this.sourceCode['annotationTools']              = this.extractLines(values, 1231,1249);
        this.sourceCode['consoleColors']                = this.extractLines(values, 1252,1348);
        this.sourceCode['hex']                          = this.extractLines(values, 1351,1363);
        this.sourceCode['stringTools']                  = this.extractLines(values, 1366,1381);
        this.sourceCode['jsonBuilder']                  = this.extractLines(values, 1384,1632);
        this.sourceCode['jsonBuilderExample']           = this.extractLines(values, 1635,1641);
        this.sourceCode['jsonBuilderUsage']             = this.extractLines(values, 1645,1649);
        this.sourceCode['tuple']                        = this.extractLines(values, 1653,1687);
        this.sourceCode['chrono']                       = this.extractLines(values, 1689,1797);
        this.sourceCode['blockingQueue']                = this.extractLines(values, 1800,1804);
        
    }

    private extractLines(values:string[], start:number, end:number):string{
        let buffer : string[] = []; 

        for(let i=start; i<=end; i++){
            buffer.push(values[i]);
        }

        return buffer.join("\n");
    }
  
}