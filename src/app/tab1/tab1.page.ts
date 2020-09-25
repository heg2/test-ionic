import { Component } from '@angular/core';
import { IonicOnFhirService } from '@i4mi/ionic-on-fhir';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private ionicOnFhir: IonicOnFhirService) {
      this.ionicOnFhir.initIonicOnFhir('http://test.midata.coop', 'midemodev');
  }

}
