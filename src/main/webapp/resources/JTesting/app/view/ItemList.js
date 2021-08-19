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