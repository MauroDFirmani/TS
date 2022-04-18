
import { v4 } from 'uuid'

export abstract class BaseEntity {
    public id: string

    public constructor(id?: string) {
        if (!id) {
            id = v4()
        }

        this.id = id
    }
}
