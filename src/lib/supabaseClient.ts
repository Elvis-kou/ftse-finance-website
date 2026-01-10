import { createClient } from '@supabase/supabase-js';

// Create Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key are required in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Function to fetch website content from Supabase
export const fetchWebsiteContent = async (language: string) => {
  try {
    const { data, error } = await supabase
      .from('website_content')
      .select('*')
      .eq('language', language)
      .single();

    if (error) {
      console.error('Error fetching website content:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Unexpected error fetching website content:', error);
    return null;
  }
};

// Function to subscribe to website content changes
export const subscribeToContentChanges = (language: string, callback: (data: Record<string, string>) => void) => {
  const subscription = supabase
    .channel('website_content_changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'website_content',
        filter: `language=eq.${language}`
      },
      (payload) => {
        callback(payload.new);
      }
    )
    .subscribe();

  return () => {
    subscription.unsubscribe();
  };
};
