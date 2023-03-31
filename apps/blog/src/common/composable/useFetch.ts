import { onMounted, ref } from 'vue';

export default function useFetch({
    fetchService,
    startCall = true
}: { fetchService: Promise<unknown>, startCall: boolean }) {
    const data = ref<unknown>(null);
    const error = ref(null);
    const loading = ref(false);

    async function fetchData() {
        try {
            loading.value = true;
            const response = await fetchService
            data.value = response
            error.value = null;
        } catch (err: any) {
            data.value = null;
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    }
    onMounted(()=>{
        startCall && fetchData()
    });
    return {
        data,
        error,
        loading,
        fetchData
    };
}
