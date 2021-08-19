Ext.define('JTesting.controller.Items', {
    extend: 'Ext.app.Controller',
    stores: ['ItemStore'],
    views: ['ItemList', 'ItemForm'],
    refs: [{
        ref: 'formWindow',
        xtype: 'itemform',
        selector: 'itemform',
        autoCreate: true
    }],
    // init: function () {
    //     this.control({
    //         'itemlist > toolbar > button[action=add]': {
    //             click: this.showAddForm
    //         },
    //         'itemlist': {
    //             itemdblclick: this.onRowdblclick
    //         },
    //         'itemform button[action=add]': {
    //             click: this.doAddItem
    //         }
    //     });
    // },
    // onRowdblclick: function (me, record, item, index) {
    //     var win = this.getFormWindow();
    //     win.setTitle('Edit item');
    //     win.setAction('edit');
    //     win.setRecordIndex(index);
    //     win.down('form').getForm().setValues(record.getData());
    //     win.show();
    // },
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