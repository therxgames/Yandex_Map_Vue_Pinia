import { computed, shallowRef } from 'vue';
import { YandexMap, YandexMapClusterer, YandexMapDefaultSchemeLayer, YandexMapDefaultFeaturesLayer, YandexMapMarker, } from 'vue-yandex-maps';
import { useMapStore } from '@stores';
import { SvgIcon } from '@ui';
const map = shallowRef(null);
const clusterer = shallowRef(null);
const store = useMapStore();
const DEFAULT_ZOOM = 4; // Зум по умолчанию
const SELECTED_MARKER_ZOOM = 10; // Зум при выборе маркера
const getMapLocation = computed(() => [
    store.selectedMarker?.latitude || 1,
    store.selectedMarker?.longitude || 1,
]);
const getMapZoom = computed(() => (store.selectedMarker ? SELECTED_MARKER_ZOOM : DEFAULT_ZOOM));
const visibleMarkers = computed(() => {
    return store.markers.filter((marker) => !store.hiddenMarkerIds.includes(marker.id));
}); /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    const __VLS_0 = {}.YandexMap;
    /** @type { [typeof __VLS_components.YandexMap, typeof __VLS_components.yandexMap, typeof __VLS_components.YandexMap, typeof __VLS_components.yandexMap, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        modelValue: ((__VLS_ctx.map)),
        realSettingsLocation: (true),
        settings: (({
            location: {
                center: __VLS_ctx.getMapLocation,
                zoom: __VLS_ctx.getMapZoom,
                duration: 1000,
            },
        })),
        width: ("100%"),
        height: ("100vh"),
    }));
    const __VLS_2 = __VLS_1({
        modelValue: ((__VLS_ctx.map)),
        realSettingsLocation: (true),
        settings: (({
            location: {
                center: __VLS_ctx.getMapLocation,
                zoom: __VLS_ctx.getMapZoom,
                duration: 1000,
            },
        })),
        width: ("100%"),
        height: ("100vh"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = {}.YandexMapDefaultSchemeLayer;
    /** @type { [typeof __VLS_components.YandexMapDefaultSchemeLayer, typeof __VLS_components.yandexMapDefaultSchemeLayer, ] } */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = {}.YandexMapDefaultFeaturesLayer;
    /** @type { [typeof __VLS_components.YandexMapDefaultFeaturesLayer, typeof __VLS_components.yandexMapDefaultFeaturesLayer, ] } */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
    const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
    const __VLS_19 = {}.YandexMapClusterer;
    /** @type { [typeof __VLS_components.YandexMapClusterer, typeof __VLS_components.yandexMapClusterer, typeof __VLS_components.YandexMapClusterer, typeof __VLS_components.yandexMapClusterer, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
        modelValue: ((__VLS_ctx.clusterer)),
        gridSize: ((4)),
        zoomOnClusterClick: (true),
    }));
    const __VLS_21 = __VLS_20({
        modelValue: ((__VLS_ctx.clusterer)),
        gridSize: ((4)),
        zoomOnClusterClick: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    for (const [marker] of __VLS_getVForSourceType((__VLS_ctx.visibleMarkers))) {
        const __VLS_25 = {}.YandexMapMarker;
        /** @type { [typeof __VLS_components.YandexMapMarker, typeof __VLS_components.yandexMapMarker, typeof __VLS_components.YandexMapMarker, typeof __VLS_components.yandexMapMarker, ] } */ ;
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
            key: ((marker.id)),
            settings: (({
                coordinates: [marker.latitude, marker.longitude],
            })),
        }));
        const __VLS_27 = __VLS_26({
            key: ((marker.id)),
            settings: (({
                coordinates: [marker.latitude, marker.longitude],
            })),
        }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        const __VLS_31 = {}.SvgIcon;
        /** @type { [typeof __VLS_components.SvgIcon, ] } */ ;
        // @ts-ignore
        const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({
            ...{ class: ("marker") },
            name: ("marker"),
            fill: ((__VLS_ctx.store.isActiveMarker(marker.id) ? 'green' : 'red')),
        }));
        const __VLS_33 = __VLS_32({
            ...{ class: ("marker") },
            name: ("marker"),
            fill: ((__VLS_ctx.store.isActiveMarker(marker.id) ? 'green' : 'red')),
        }, ...__VLS_functionalComponentArgsRest(__VLS_32));
        __VLS_30.slots.default;
        var __VLS_30;
    }
    __VLS_24.slots.default;
    var __VLS_24;
    __VLS_5.slots.default;
    var __VLS_5;
    ['marker',];
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
            YandexMap: YandexMap,
            YandexMapClusterer: YandexMapClusterer,
            YandexMapDefaultSchemeLayer: YandexMapDefaultSchemeLayer,
            YandexMapDefaultFeaturesLayer: YandexMapDefaultFeaturesLayer,
            YandexMapMarker: YandexMapMarker,
            SvgIcon: SvgIcon,
            map: map,
            clusterer: clusterer,
            store: store,
            getMapLocation: getMapLocation,
            getMapZoom: getMapZoom,
            visibleMarkers: visibleMarkers,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
