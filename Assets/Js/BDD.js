const SUPABASE_URL = 'https://yeetqwekspzypbgnjhvs.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllZXRxd2Vrc3B6eXBiZ25qaHZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYxMDA3NTcsImV4cCI6MjAxMTY3Njc1N30.9zzpjAwBdsoHJWQsfrHeenKASCLbtkjgpUjHJ4ggNGs'

import "https://unpkg.com/@supabase/supabase-js@2"

console.log("yo test")
// Create a single supabase client for interacting with your database
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

async function loadData() {
    const { data, error } = await _supabase
            .from('Compte')
            .select()

    console.log(data)
    console.log(error)
}
loadData()

/* async function insertData() {
    const { data, error } = await _supabase
        .from('posts')
        .insert([
            { title: 'The Shire', body: 'im, the body ladies and gentleman', tag: 'fun' }
        ])

    console.log(data)
    console.log(error)
}
insertData() */