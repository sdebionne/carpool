import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  Renderer,
  forwardRef,
  OnInit, Renderer2 } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InlineEditComponent),
      multi: true
    }
  ]
})
export class InlineEditComponent implements ControlValueAccessor, OnInit {

  /** input control **/
  @ViewChild('inlineEditControl', {static: false}) inlineEditControl: ElementRef;
  /** The control placeholder **/
  @Input() placeholder = '';
  /** Type of input control **/
  @Input() type = 'text';
  /** Input value required **/
  @Input() required = false;
  /** Input control is disabled **/
  @Input() disabled = false;
  // Prefix the value
  @Input() prefix: any;
  // color of the confirm button
  @Input() confirmColor = 'primary';
  // color of the cancel button
  @Input() cancelColor = 'warn';

  @Input() changed: Function;

  /** private value of input **/
  private _value = '';
  /** value prior to editing **/
  private preValue = '';
  /** We are editing **/
  public editing = false;
  /** Callback when the value is changing **/
  public onChange: any = Function.prototype;
  /** Callback when the input is accessed **/
  public onTouched: any = Function.prototype;

  get value(): any {
    return this._value;
  }

  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);
    }
  }

  // ControlValueAccessor interface impl
  writeValue(value: any) {
    if (value !== undefined) {
      this._value = value;
    }
  }

  // ControlValueAccessor interface impl
  public registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  // ControlValueAccessor interface impl
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  cancel($event: Event) {
    this.value = this.preValue;
    this.editing = false;
  }

  confirm($event: Event) {
    this.editing = false;
    this.changed($event, this);
  }

  keypress($event) {
    if ($event.keyCode === 13) {
      this.confirm($event);
    }
  }

  // Start editing
  edit(value) {
    if (this.disabled) {
      return;
    }

    this.preValue = value;
    this.editing = true;
    // Set focus on the input element, but we need to give it one cycle so it is ready
    setTimeout(_ => this.inlineEditControl.nativeElement.focus());
  }


  constructor(element: ElementRef, private _renderer: Renderer2) { }

  ngOnInit() {
  }

}