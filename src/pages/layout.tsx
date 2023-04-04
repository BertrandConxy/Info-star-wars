import React from 'react'
import { iChildrenNode } from '../typeDefs/childrenNode'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { View } from '../components/Common/View'

interface Props extends iChildrenNode {
  handleSearched: (search: string) => void
}

export default function Layout({ children, handleSearched }: Props) {
  return (
    <View>
      <NavBar Searched={handleSearched} />
      {children}
      <Footer />
    </View>
  )
}
