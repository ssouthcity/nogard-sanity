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
            of: [{ type: 'element' }],
            title: 'Habitats',
        },
        {
            name: 'elements',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'element' }] }],
            title: 'Elements',
        },
        {
            name: 'breeding_requirement',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'element' }, { type: 'dragon' }] }],
            title: 'Breeding Requirement',
        },
    ],
}