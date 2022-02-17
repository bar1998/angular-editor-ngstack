import { Component, Input } from '@angular/core';
import { CodeModel } from '@ngstack/code-editor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  theme = 'vs-dark';

  codeModel: CodeModel = {
    language: 'typescript',
    uri: 'main.ts',
    value: [
      `import { TranslateModule, TranslateService } from '@ngstack/translate';`,
      `import { CodeEditorModule } from '@ngstack/code-editor';`,
      `import * as fs from 'fs';`,
      '',
      `export class MyClass {`,
      `  constructor(translate: TranslateService) {`,
      '',
      '  }',
      `}`,
    ].join('\n'),
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  onCodeChanged(value) {
    console.log('CODE', value);
  }

  changeCode() {
    console.log('CODE CHANGE');
    this.codeModel = { ...this.codeModel, value: 'some other code' };
  }
}
