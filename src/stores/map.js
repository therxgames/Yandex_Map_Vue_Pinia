import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
export const useMapStore = defineStore('map', () => {
    const markers = ref(mockData);
    const selectedMarkerId = ref(null);
    const searchQuery = ref('');
    const hiddenMarkerIds = ref([]);
    const filteredMarkers = computed(() => markers.value.filter((item) => item.name.toLowerCase().includes(searchQuery.value.toLowerCase())));
    const selectedMarker = computed(() => markers.value.find((item) => item.id === selectedMarkerId.value) || null);
    function isActiveMarker(id) {
        return id === selectedMarkerId.value;
    }
    function selectMarker(id) {
        selectedMarkerId.value = id;
    }
    function setSearchQuery(query) {
        searchQuery.value = query;
    }
    function addHiddenMarker(id) {
        if (!hiddenMarkerIds.value.includes(id)) {
            hiddenMarkerIds.value.push(id);
        }
    }
    function removeHiddenMarker(id) {
        hiddenMarkerIds.value = hiddenMarkerIds.value.filter((item) => item !== id);
    }
    return {
        markers,
        selectedMarkerId,
        searchQuery,
        filteredMarkers,
        hiddenMarkerIds,
        addHiddenMarker,
        removeHiddenMarker,
        selectedMarker,
        isActiveMarker,
        selectMarker,
        setSearchQuery,
    };
});
const mockData = [
    {
        id: 1,
        latitude: 50.760918,
        longitude: 4.11017,
        name: 'ВАЗ',
    },
    {
        id: 2,
        latitude: 47.492647,
        longitude: 19.051399,
        name: 'Газель',
    },
    {
        id: 3,
        latitude: 41.902689,
        longitude: 12.496176,
        name: 'Lexus',
    },
    {
        id: 4,
        latitude: 43.779787,
        longitude: 11.265817,
        name: 'Volkswagen',
    },
    {
        id: 5,
        latitude: 52.373057,
        longitude: 4.892557,
        name: 'Lada',
    },
    {
        id: 6,
        latitude: -22.90315,
        longitude: -43.189903,
        name: 'Kia',
    },
    {
        id: 7,
        latitude: 38.716174,
        longitude: -9.141589,
        name: 'Bentli',
    },
    {
        id: 8,
        latitude: 50.080293,
        longitude: 14.428983,
        name: 'Porche',
    },
    {
        id: 9,
        latitude: 48.856663,
        longitude: 2.351556,
        name: 'BMW',
    },
    {
        id: 10,
        latitude: 45.438095,
        longitude: 12.319029,
        name: 'Honda',
    },
];
