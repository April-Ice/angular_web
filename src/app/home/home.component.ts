import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';


@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    public indexTitle = 'April 随想';
    public indextContent = '曾经梦想仗剑天涯。后来则期待自己成为一棵平静的木棉<br/> 人生总是过得很匆忙，追求和理想也会不断的变化<br/>时光总是悄然雕琢你我<br/> 平淡中创造闪光';

    constructor(
        private router: Router,
    ) {
    }

    ngOnInit() { }

    public gotoAbout() {
        console.log('gotoabout');
        this.router.navigate(['about']);
    }
}
