import { Component, input, model } from '@angular/core';
import { ReviewItem } from '../../models/dinner-review.model';
import { Field, FieldTree } from '@angular/forms/signals';
import { FieldWrapper } from '../field-wrapper/field-wrapper';
import { FieldStyleDirective } from '../field-styling.directive';
import { StarRating } from '../star-rating/star-rating';

@Component({
  selector: 'app-review-item-form',
  imports: [Field, FieldWrapper, FieldStyleDirective, StarRating],
  templateUrl: './review-item-form.html',
  styleUrl: './review-item-form.scss',
  host: {
    class: 'sub-form',
  },
})
export class ReviewItemForm {
  readonly header = input('');
  readonly field = input.required<FieldTree<ReviewItem, string | number>>();

  readonly value = model({ rating: 3, recommendation:  'no-opinion'})
}
