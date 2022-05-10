import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURI = 'http://localhost:5000'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl:baseURI}),
    endpoints: builder => ({
        getCategories: builder.query({
            //get:'http://localhost:5000/api/categories'
            query:() => '/api/categories',
            providesTags:['categories']
        }),

        //get labels
        getLabels: builder.query({
            query: () => '/api/labels',
            providesTags:['transaction']
        }),

        //add new transaction
        //post:'http://localhost:5000/api/categories'
        addTransaction: builder.mutation({
            query: (initialTransaction) => ({
                url:'/api/transaction',
                method:"POST",
                body:initialTransaction
            }),
            invalidatesTags:['transaction']
        }),

        //delete record
        //delete:'http://localhost:5000/api/categories'
        deleteTransaction: builder.mutation({
            query: recordid => ({
                url:'/api/transaction',
                method:"DELETE",
                body:recordid
            }),
            invalidatesTags:['transaction']
        })
    })
})

export default apiSlice;