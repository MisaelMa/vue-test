import { onMounted, ref } from 'vue';

import { Post } from '../model/post.entity';
import {blogService} from "../service/blog.service"

export default function usePost() {
  const blogs = ref<Post[]>([]);
  const error = ref(null);
  const loading = ref(false);

  async function fetchData() {
    try {
      loading.value = true;
      const data = await blogService.getPostsWithUser()
      
      blogs.value = data
      error.value = null;
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  }  
  onMounted(fetchData);

  return {
    blogs,
    error,
    loading,
  };
}
