import { Component, OnInit } from '@angular/core';
import {
         ViewChild,
         AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import * as faker from 'faker';

import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling'


@Component({
  selector: 'app-basic-scroll',
  templateUrl: './basic-scroll.component.html',
  styleUrls: ['./basic-scroll.component.scss']
})
export class BasicScrollComponent {

  @ViewChild(CdkVirtualScrollViewport)
  cdkVirtualScrollViewport: CdkVirtualScrollViewport;

  items$ = new BehaviorSubject([]);
  loading$ = new BehaviorSubject(false);


  constructor(){
    for (let index = 0; index < 10; index++) {
      setTimeout(() => {
        const cur = this.items$.getValue();
        this.items$.next([
          ...cur,
          createItem(),
          createItem(),
          createItem(),
          createItem(),
          createItem()
        ]);

      }, faker.random.number({ min:100, max:400 }))
    }
  }

  trackBy(idx, item) {
    console.log(idx)
    return item.id;
  }

  add(){
    const cur = this.items$.getValue();
    const added = [createItem(),
    createItem(),
    createItem(),
    createItem(),
    createItem(),
    createItem()];
    const arr = added.concat(cur);
  
    this.items$.next(arr);
  }

  scroll(){
    // this.cdkVirtualScrollViewport.scrollTo(0)
  }

  append(){
    const cur = this.items$.getValue();
    const added = [createItem(),
    createItem(),
    createItem(),
    createItem(),
    createItem(),
    createItem()];
    const arr = cur.concat(added);
    this.items$.next(arr);
  }
}


let expectedSize = 0;

const createItem = () => {
  const count = faker.random.number({min:0, max:5})
  expectedSize += 35 + (count * 24);
  return {
    id: faker.random.uuid(),
    name: faker.name.firstName(),
    company: faker.company.companyName(),
    color: faker.commerce.color(),
    count
  };
};
