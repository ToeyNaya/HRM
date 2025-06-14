"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type User = {
  username: string
  role: "hr" | "employee"
  name: string
}

type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // ตรวจสอบว่ามีข้อมูลผู้ใช้ใน localStorage หรือไม่
    const storedUser = localStorage.getItem("hrm-user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = (userData: User) => {
    setUser(userData)
    localStorage.setItem("hrm-user", JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("hrm-user")
  }

  const isAuthenticated = !!user

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {!isLoading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
