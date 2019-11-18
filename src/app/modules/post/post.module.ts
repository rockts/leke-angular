import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { PostItemComponent } from './compoents/post-item/post-item.component';
import { PostDetailsComponent } from './compoents/post-details/post-details.component';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  declarations: [PostComponent, PostItemComponent, PostDetailsComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [PostComponent],
})
export class PostModule {}
