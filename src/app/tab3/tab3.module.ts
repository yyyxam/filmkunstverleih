import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';

<<<<<<< HEAD


=======
>>>>>>> 14b2e7a3b76bc02923ebd935bbe8c6023c9fd57e
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
    Tab3PageRoutingModule,
<<<<<<< HEAD
    
=======
>>>>>>> 14b2e7a3b76bc02923ebd935bbe8c6023c9fd57e
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
