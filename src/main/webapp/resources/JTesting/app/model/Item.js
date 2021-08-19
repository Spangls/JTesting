Ext.define('JTesting.model.Item', {
    extend: 'Ext.data.Model',        
    fields: [
        {name: 'id', type: 'int'},
        {name: 'code', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'price', type: 'double'},
        {name: 'category', type: 'string'}
    ]
});