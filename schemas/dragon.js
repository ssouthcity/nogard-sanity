export default {
    name: 'dragon',
    type: 'document',
    title: 'Dragon',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            name: 'habitats',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'element' }] }],
            title: 'Habitats',
        },
        {
            name: 'incubation_time',
            type: 'number',
            title: 'Incubation Time (seconds)',
        },
        {
            name: 'elements',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'element' }] }],
            title: 'Primary Elements When Breeding',
        },
        {
            name: 'breeding_requirement',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'element' }, { type: 'dragon' }] }],
            title: 'Breeding Requirement',
        },
    ],
}