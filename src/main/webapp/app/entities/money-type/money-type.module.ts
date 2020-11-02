import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeBuildingVersion1SharedModule } from 'app/shared/shared.module';
import { MoneyTypeComponent } from './money-type.component';
import { MoneyTypeDetailComponent } from './money-type-detail.component';
import { MoneyTypeUpdateComponent } from './money-type-update.component';
import { MoneyTypeDeleteDialogComponent } from './money-type-delete-dialog.component';
import { moneyTypeRoute } from './money-type.route';

@NgModule({
  imports: [HomeBuildingVersion1SharedModule, RouterModule.forChild(moneyTypeRoute)],
  declarations: [MoneyTypeComponent, MoneyTypeDetailComponent, MoneyTypeUpdateComponent, MoneyTypeDeleteDialogComponent],
  entryComponents: [MoneyTypeDeleteDialogComponent],
})
export class HomeBuildingVersion1MoneyTypeModule {}
