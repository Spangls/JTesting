Ext.define('JTesting.store.ItemCategoryStore', {
    extends: 'Ext.data.Store', 
    storeId: 'itemCategoryStore',
    model: 'JTesting.model.ItemCategory',
    fields: ['id', 'name'],
    proxy: {
        type: 'ajax',
        url: '/item/loadCategories',
        reader: {
            type: 'json',
            root: 'categories'
        }
    },
    autoLoad: true
});