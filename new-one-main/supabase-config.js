// Supabase Configuration
// Replace these with your actual Supabase project credentials
const SUPABASE_URL = 'https://gcqpabughvzmlqcozxtw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjcXBhYnVnaHZ6bWxxY296eHR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5NzAyMjksImV4cCI6MjA5MDU0NjIyOX0.hrVbLJrmrPelS-Bc8aNBr9RJHGEk5o99nx8ht6lS-Hs';

// Initialize Supabase client
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Database table names
const TABLES = {
    WORKERS: 'workers',
    CONTRACTORS: 'contractors',
    PROJECTS: 'projects',
    APPLICATIONS: 'applications'
};

// Helper functions for database operations
const dbOperations = {
    // Save worker data
    async saveWorker(workerData) {
        try {
            const { data, error } = await supabaseClient
                .from(TABLES.WORKERS)
                .insert([workerData]);
            
            if (error) throw error;
            await fetch("https://api.ultramsg.com/instance175902/messages/chat", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify({

        token: "hf45yapdvdjalvs4",

        to: workerData.phone,

        body: `Hello ${workerData.name}, your registration is successful.`

    })

});
            return { success: true, data };
        } catch (error) {
            console.error('Error saving worker:', error);
            return { success: false, error: error.message };
        }
    },

    // Save contractor data
    async saveContractor(contractorData) {
        try {
            const { data, error } = await supabaseClient
                .from(TABLES.CONTRACTORS)
                .insert([contractorData]);
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Error saving contractor:', error);
            return { success: false, error: error.message };
        }
    },

    // Save project data
    async saveProject(projectData) {
        try {
            const { data, error } = await supabaseClient
                .from(TABLES.PROJECTS)
                .insert([projectData]);
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Error saving project:', error);
            return { success: false, error: error.message };
        }
    },

    // Get all workers
    async getWorkers() {
        try {
            const { data, error } = await supabaseClient
                .from(TABLES.WORKERS)
                .select('*');
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Error fetching workers:', error);
            return { success: false, error: error.message };
        }
    },

    // Get all contractors
    async getContractors() {
        try {
            const { data, error } = await supabaseClient
                .from(TABLES.CONTRACTORS)
                .select('*');
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Error fetching contractors:', error);
            return { success: false, error: error.message };
        }
    },

    // Get all projects
    async getProjects() {
        try {
            const { data, error } = await supabaseClient
                .from(TABLES.PROJECTS)
                .select('*');
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Error fetching projects:', error);
            return { success: false, error: error.message };
        }
    },

    // Save application data
    async saveApplication(applicationData) {
        try {
            const { data, error } = await supabaseClient
                .from(TABLES.APPLICATIONS)
                .insert([applicationData]);
            
            if (error) throw error;
            return { success: true, data };
        } catch (error) {
            console.error('Error saving application:', error);
            return { success: false, error: error.message };
        }
    }
};
