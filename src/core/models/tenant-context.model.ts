import { ITenantContext } from '../interfaces/tenant-context.interface';

/**
 * Class implementation for tenant context
 *
 * @export
 * @class TenantContext
 * @implements {ITenantContext}
 */
export class TenantContext implements ITenantContext {
    tenantId: string;

    constructor(tenantId: string) {
        this.tenantId = tenantId;
    }
}
