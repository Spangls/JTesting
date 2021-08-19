Ext.define('JTesting.view.ItemForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.itemform',
    title: 'Add item',
    width: 350,
    layout: 'fit',
    resizable: false,
    closeAction: 'hide',
    modal: true,
    config: {
        recordIndex: 0,
        action: ''
    },
    items: [{
        xtype: 'form',
        layout: 'anchor',
        bodyStyle: {
            background: 'none',
            padding: '10px',
            border: '0'
        },
        defaults: {
            xtype: 'textfield',
            anchor: '100%'
        },
        items: [{
            name: 'name',
            fieldLabel: 'Title'
        }, {
            name: 'price',
            fieldLabel: 'Price',

        }, {
            name: 'category',
            fieldLabel: 'Category'
        }]
    }],
    buttons: [{
        text: 'Add',
        action: 'add'
    }, {
        text: 'Reset',
        handler: function () {
            this.up('window').down('form').getForm().reset();
        }
    }, {
        text: 'Cancel',
        handler: function () {
            this.up('window').close();
        }
    }]
});