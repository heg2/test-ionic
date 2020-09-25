import { Component, OnInit, Input } from '@angular/core';

import { IonicOnFhirService } from '@i4mi/ionic-on-fhir';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private ionicOnFhir: IonicOnFhirService) {

  }

  ngOnInit() {
      this.ionicOnFhir.initIonicOnFhir('https://test.midata.coop', 'midemodev');
  }

  login() {
      console.log('clicked login');
      this.ionicOnFhir.authenticate().then((res) => {
          console.log('auth successful', res)
      })
      .catch((err) => {
          console.log('auth failed', err)
      })
  }

}
