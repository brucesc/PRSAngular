import { Component, Type, OnDestroy, AfterViewInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, ComponentRef, ChangeDetectorRef } from '@angular/core';
import { InsertionDirective } from '../insertion.directive';
import { Subject } from 'rxjs';
import { DialogRef } from '../dialog-ref';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit, OnDestroy {

  componentRef: ComponentRef<any>;
  childComponentType: Type<any>;

  @ViewChild(InsertionDirective) insertionPoint: InsertionDirective;

  private readonly _onClose = new Subject<any>();
  public onClose = this._onClose.asObservable();

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private dialogRef: DialogRef
  ) { }

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    this.dialogRef.close();
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);

    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);

  }

  close() {
    this._onClose.next();
  }

}
