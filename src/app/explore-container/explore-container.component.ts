import { Component, OnInit, Input } from '@angular/core';

import { IonicOnFhirService } from '@i4mi/ionic-on-fhir';
import { Observation, ObservationStatus } from '@i4mi/fhir_r4';

@Component({
    selector: 'app-explore-container',
    templateUrl: './explore-container.component.html',
    styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
    @Input() name: string;

    isLoggedIn: boolean;

    constructor(private ionicOnFhir: IonicOnFhirService) {
    }

    ngOnInit() {
        this.ionicOnFhir.initIonicOnFhir('https://test.midata.coop', 'midemodev');
        this.isLoggedIn = false;
    }

    login() {
        console.log('clicked login');
        this.ionicOnFhir.authenticate().then((res) => {
            console.log('auth successful', res);
            this.isLoggedIn = true;
        })
        .catch((err) => {
            console.log('auth failed', err);
        })
    }

    logout() {
        this.ionicOnFhir.logout();
        this.isLoggedIn = false;
    }

    createResource() {
        // create simple test resource
        const resource: Observation = {
            resourceType: 'Observation',
            status: ObservationStatus.PRELIMINARY,
            code: {
                coding: [
                    {
                        system: 'http://loinc.org',
                        code: '29463-7',
                        display: 'Body weight'
                    }
                ]
            },
            effectiveDateTime: new Date().toISOString(),
            valueQuantity: {
                value: 75,
                unit: 'kg',
                system: 'http://unitsofmeasure.org',
                code: 'kg'
            }
        };
        this.ionicOnFhir.create(resource).then((res) => {
            console.log('resource created', res);
        })
        .catch((err) => {
            console.log('error creating resource', err);
        })
    }
}
