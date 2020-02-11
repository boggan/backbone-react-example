require.config({
    paths: {
        jquery: "https://code.jquery.com/jquery-3.4.1",
        backbone: "https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.0/backbone",
        underscore: "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore",
        // helloFactory: "http://localhost/~boggan/Projects/Javascript/BackboneReact/components/dist/debug/helloFactory"
        helloFactory: "../../components/dist/debug/helloFactory"
    }
});

requirejs(["views/LayoutView"], function(LayoutView) {
    let l_oLayoutView = new LayoutView();
    document.body.appendChild(l_oLayoutView.render());
});