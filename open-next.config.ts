import { defineCloudflareConfig } from '@opennextjs/cloudflare'

/**
 * Konfigurasi bawaan sudah cukup: aplikasi ini tidak memakai ISR/revalidasi,
 * jadi incremental cache (yang butuh bucket R2) tidak diaktifkan.
 */
export default defineCloudflareConfig()
