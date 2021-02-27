import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

baseurl = "http://127.0.0.1:8000";
httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  sendData() : Observable<any>{
   const body = {seq: JSON.stringify(["0_input","1_nonInvOpamp","2_nonInvOpamp","3_differenceAmplifier","4_HalfWaveRectifier","5_comparator","6_noninvertingschmitt","7_invertingschmitt","8_Analysis"]),
  ip_values: JSON.stringify({"0_input":{"source_type":"sinusoidal","amplitude":"2V","frequency":"1kHz","terminal1":'1'},
  "1_nonInvOpamp":{"input_from":"0_input","R1":"100Ohm","RF":"300Ohm"},
  "2_nonInvOpamp":{"input_from":"0_input","R1":"100Ohm","RF":"200Ohm"},
  "3_differenceAmplifier":{"input1":"1_nonInvOpamp","input2":"2_nonInvOpamp","R1":"100Ohm","R2":"100Ohm","R3":"100Ohm","R4":"100Ohm"},
  "4_HalfWaveRectifier":{"input_from":"3_differenceAmplifier"},
  "5_comparator":{"input_from":"4_HalfWaveRectifier","Vref":"1V"},
  "6_noninvertingschmitt":{"input_from":"5_comparator","R1":"10000Ohm","R2":"1000Ohm"},
  "7_invertingschmitt":{"input_from":"6_noninvertingschmitt","R1":"10000Ohm","R2":"1000Ohm"},
  "8_Analysis":{"type":"transient","start":0,"step":0.00001,"stop":0.005}})
};
    return this.http.put(this.baseurl + '/angdata/1/' , body,
    {headers: this.httpHeaders});
   }

  storePlotid(): Observable<any>{
    return this.http.get(this.baseurl + '/external/', 
    {headers: this.httpHeaders});
  }
  getPlotid(): Observable<any>{
    return this.http.get(this.baseurl + '/outputplot/', 
    {headers: this.httpHeaders});
  }
    
}
