Ext.onReady(function () {
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
    Ext.define('JTesting.model.ItemCategory', {
        extend: 'Ext.data.Model',        
        fields: [
            {name: 'id', type: 'string'},
            {name: 'name', type: 'string'}
        ]
    });
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
    Ext.define('JTesting.view.ItemList', {
        extend: 'Ext.grid.Panel',
        alias: 'widget.itemlist',
        title: 'Items',
        store: 'ItemStore',
        initComponent: function () {
            this.tbar = [{
                text: 'Add',
                action: 'add',
                iconCls: 'item-add'
            }];
            this.columns = [
                {header: 'Title', dataIndex: 'name', flex: 1},
                {header: 'Price', dataIndex: 'price'},
                {header: 'Category', dataIndex: 'category'},
                {header: 'Action', width: 50,
                    renderer: function (v, m, r) {
                        var id = Ext.id();
                        Ext.defer(function () {
                            Ext.widget('image', {
                                renderTo: id,
                                name: 'delete',
                                src: '/../resources/img/delete.png',
                                listeners: {
                                    afterrender: function (me) {
                                        me.getEl().on('click', function () {
                                            var grid = Ext.ComponentQuery.query('itemlist')[0];
                                            if (grid) {
                                                var sm = grid.getSelectionModel();
                                                var rs = sm.getSelection();
                                                if (!rs.length) {
                                                    Ext.Msg.alert('Info', 'No Item Selected');
                                                    return;
                                                }
                                                Ext.Msg.confirm('Delete item',
                                                    'Are you sure you want to delete?',
                                                    function (button) {
                                                        if (button == 'Да') {
                                                            var item = rs[0].getData();
                                                            Ext.Ajax.request({
                                                                url: '/item/delete',
                                                                method: 'POST',
                                                                jsonData: item,
                                                                success: function (response) {
                                                                    var grid = Ext.ComponentQuery.query('itemlist')[0];
                                                                    grid.getStore().load();
                                                                }
                                                            });
                                                        }
                                                    });
                                            }
                                        });
                                    }
                                }
                            });
                        }, 50);
                        return Ext.String.format('<div id="{0}"></div>', id);
                    }
                }
            ];
            this.callParent(arguments);
        }
    });
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
    Ext.define('JTesting.controller.Items', {
        extend: 'Ext.app.Controller',
        stores: ['ItemStore'],
        views: ['ItemList', 'ItemForm'],
        refs: [{
            ref: 'formWindow',
            xtype: 'itemform',
            selector: 'itemsform',
            autoCreate: true
        }],
        init: function () {
            this.control({
                'itemlist > toolbar > button[action=add]': {
                    click: this.showAddForm
                },
                'itemlist': {
                    itemdblclick: this.onRowdblclick
                },
                'itemform button[action=add]': {
                    click: this.doAddItem
                }
            });
        },
        onRowdblclick: function (me, record, item, index) {
            var win = this.getFormWindow();
            win.setTitle('Edit item');
            win.setAction('edit');
            win.setRecordIndex(index);
            win.down('form').getForm().setValues(record.getData());
            win.show();
        },
        // showAddForm: function () {
        //     var win = this.getFormWindow();
        //     win.setTitle('Add item');
        //     win.setAction('add');
        //     win.down('form').getForm().reset();
        //     win.show();
        // },
        // doAddItem: function () {
        //     var win = this.getFormWindow();
        //     var store = this.getBooksStore();
        //     var values = win.down('form').getValues();
        //     var action = win.getAction();
        //     var url = '';
        //     if (action == 'edit') {
        //         url = '/item/update';
        //     } else {
        //         url = '/item/create';
        //     }
        //     Ext.Ajax.request({
        //         url: url,
        //         method: 'POST',
        //         jsonData: values,
        //         success: function (response) {
        //             store.load();
        //         }
        //     });
        //     win.close();
        // }
    });
    Ext.application({
            name: 'JTesting',
            controllers: ['Items'],
            launch: function () {
                Ext.widget('itemlist', {
                    width: 500,
                    height: 300,
                    renderTo: 'output'
                });
            }
        }
    );
});