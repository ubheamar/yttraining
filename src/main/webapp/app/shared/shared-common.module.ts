import { NgModule } from '@angular/core';

import { YttrainingSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [YttrainingSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [YttrainingSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class YttrainingSharedCommonModule {}
