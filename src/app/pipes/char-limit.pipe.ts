import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'charLimit' })
export class CharLimitPipe implements PipeTransform {
  transform(value: string, limit: number, isExpanded: boolean): string {
    if (!value) return '';
    return isExpanded || value.length <= limit
      ? value
      : value.slice(0, limit) + '  ...';
  }
}
