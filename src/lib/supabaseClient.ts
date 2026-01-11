import { createClient } from '@supabase/supabase-js';

// Create Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL and Anon Key are required in environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to convert snake_case/lowercase to camelCase
const toCamelCase = (obj: Record<string, any>): Record<string, any> => {
  const camelCaseObj: Record<string, any> = {};
  for (const [key, value] of Object.entries(obj)) {
    // Handle fields that are already in camelCase (from newer migrations)
    if (/[A-Z]/.test(key)) {
      camelCaseObj[key] = value;
      continue;
    }
    // Convert from lowercase to camelCase
    const camelKey = key.replace(/([a-z])([a-z]+)/g, (_, firstChar, rest) => {
      return firstChar + rest.charAt(0).toUpperCase() + rest.slice(1);
    });
    camelCaseObj[camelKey] = value;
  }
  return camelCaseObj;
};

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

    // Convert database fields to camelCase before returning
    return toCamelCase(data);
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
        callback(toCamelCase(payload.new));
      }
    )
    .subscribe();

  return () => {
    subscription.unsubscribe();
  };
};
