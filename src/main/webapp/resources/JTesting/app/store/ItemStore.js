Ext.define('JTesting.store.ItemStore', {
    extend: 'Ext.data.Store',
    storeId: 'itemStore',
    model: 'JTesting.model.Item',
    fields: ['id', 'code', 'name', 'price', 'category'],
    proxy: {
        type: 'ajax',
        url: '/item/loadItems',
        reader: {
            type: 'json',
            root: 'items'
        }
    },
    autoLoad: true
});