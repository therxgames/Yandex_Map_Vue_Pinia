import { useMapStore } from '@stores';
const store = useMapStore();
const checkboxHandler = (id, event) => {
    const checkbox = event.target;
    const checked = checkbox.checked;
    if (!checked) {
        store.hiddenMarkerIds.push(id);
    }
    else {
        store.hiddenMarkerIds = store.hiddenMarkerIds.filter((item) => item !== id);
    }
}; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['object-item',];
    // CSS variable injection 
    // CSS variable injection end 
    for (const [marker] of __VLS_getVForSourceType((__VLS_ctx.store.filteredMarkers))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.store.selectMarker(marker.id);
                } },
            key: ((marker.id)),
            ...{ class: ("object-item") },
            ...{ class: (({ active: __VLS_ctx.store.isActiveMarker(marker.id) })) },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (marker.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
            ...{ onClick: () => { } },
            ...{ onChange: (...[$event]) => {
                    __VLS_ctx.checkboxHandler(marker.id, $event);
                } },
            ...{ class: ("checkbox") },
            type: ("checkbox"),
            checked: ((true)),
        });
    }
    ['object-item', 'active', 'checkbox',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            store: store,
            checkboxHandler: checkboxHandler,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
