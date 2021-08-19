Ext.onReady(function () {
    Ext.application({
        name: 'JTesting',
        appFolder: "app",
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