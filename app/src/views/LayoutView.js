const 
    REACT_LOGO = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K`;

define(["jquery", "underscore", "backbone", "helloFactory"], ($, _, Backbone, helloFactory) => {
    function _onViewClicked(i_oEvent) {
        console.log("View Clicked ", i_oEvent);
    }

    return Backbone.View.extend({
        events: {
            'click': _onViewClicked.bind(this)
        },

        className: "layout-view",

        render: function() {
            this.el.innerHTML = 
            `<div class="bb-header">
                <img class="bb-logo" src="https://backbonejs.org/docs/images/backbone.png" />
                <span>Super Simple View from Backbone!</span>
            </div>

            <div id="react-component-root" class="react-component-container">
                <div class="react-component-header">
                    <img class="react-logo" src="${REACT_LOGO}">
                    <span>React Component loaded below</span>
                </div>
            </div>`;

            this.$("#react-component-root")[0].appendChild(helloFactory.createHelloComponent());
            return this.el;
        }
    });

});