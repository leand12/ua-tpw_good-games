import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ConsoleService} from '@core/services/console.service';
import {conditionChoices} from '@core/constants/choices';

@Component({
  selector: 'app-console-form',
  templateUrl: './console-form.component.html',
  styleUrls: ['./console-form.component.css'],
  providers: [ConsoleService]
})
export class ConsoleFormComponent implements OnInit {
  @Input() articleId: number;
  @Input() consoleId?: any;
  @Output() stateChange = new EventEmitter<number>();
  consoleForm: FormGroup;
  objectKeys = Object.keys;
  conditions = conditionChoices;

  constructor(private consoleService: ConsoleService) { }

  ngOnInit(): void {
    if (this.consoleId) {
      this.consoleService.getConsole(this.consoleId).subscribe((console) => this.initForm(console));
    } else {
      this.initForm();
    }
  }

  initForm(console?: any): void {
    this.consoleForm = new FormGroup({
      name: new FormControl(console?.name),
      brand: new FormControl(console?.brand),
      release_year: new FormControl(console?.release_year),
      storage_capacity: new FormControl(console?.storage_capacity),
      color: new FormControl(console?.color),
      condition: new FormControl(console?.condition),
      image: new FormControl(console?.image),
      price: new FormControl(console?.price),
    });
  }

  submit(): void {
    this.stateChange.emit(0);
  }
}
