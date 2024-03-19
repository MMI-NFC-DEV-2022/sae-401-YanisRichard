export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Agent: {
        Row: {
          id: number
          id_user: number | null
          nom_agent: string
          prenom_agent: string | null
        }
        Insert: {
          id?: number
          id_user?: number | null
          nom_agent: string
          prenom_agent?: string | null
        }
        Update: {
          id?: number
          id_user?: number | null
          nom_agent?: string
          prenom_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Agent_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Basket: {
        Row: {
          bande: string | null
          created_at: string
          empeigne: string | null
          id: number
          lacet: string | null
          languette: string | null
          materiau: string | null
          oeillet: string | null
          pointe: string | null
          semelle: string | null
          trimestre: string | null
        }
        Insert: {
          bande?: string | null
          created_at?: string
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          materiau?: string | null
          oeillet?: string | null
          pointe?: string | null
          semelle?: string | null
          trimestre?: string | null
        }
        Update: {
          bande?: string | null
          created_at?: string
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          materiau?: string | null
          oeillet?: string | null
          pointe?: string | null
          semelle?: string | null
          trimestre?: string | null
        }
        Relationships: []
      }
      Collection: {
        Row: {
          created_at: string
          id: number
          lien_coffret: string | null
          nom_coffret: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          lien_coffret?: string | null
          nom_coffret?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          lien_coffret?: string | null
          nom_coffret?: string | null
        }
        Relationships: []
      }
      Commune: {
        Row: {
          created_at: string
          id: number
          nom_commune: string | null
          quartier_coooommune: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          nom_commune?: string | null
          quartier_coooommune?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          nom_commune?: string | null
          quartier_coooommune?: number | null
        }
        Relationships: []
      }
      Film: {
        Row: {
          annee_sortie: string | null
          classification: string | null
          created_at: string
          duree: string | null
          id: number
          id_collection: number | null
          nom: string | null
          synopsis: string | null
        }
        Insert: {
          annee_sortie?: string | null
          classification?: string | null
          created_at?: string
          duree?: string | null
          id?: number
          id_collection?: number | null
          nom?: string | null
          synopsis?: string | null
        }
        Update: {
          annee_sortie?: string | null
          classification?: string | null
          created_at?: string
          duree?: string | null
          id?: number
          id_collection?: number | null
          nom?: string | null
          synopsis?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Films_id_collection_fkey"
            columns: ["id_collection"]
            isOneToOne: false
            referencedRelation: "Collection"
            referencedColumns: ["id"]
          },
        ]
      }
      Maisons: {
        Row: {
          adresse: string | null
          favori: boolean | null
          id: number
          id_Agent: number | null
          id_Quartier: number | null
          nbrChambres: number | null
          nbrSDB: number | null
          nomMaison: string
          prix: number | null
          surface: string | null
        }
        Insert: {
          adresse?: string | null
          favori?: boolean | null
          id?: number
          id_Agent?: number | null
          id_Quartier?: number | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison: string
          prix?: number | null
          surface?: string | null
        }
        Update: {
          adresse?: string | null
          favori?: boolean | null
          id?: number
          id_Agent?: number | null
          id_Quartier?: number | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string
          prix?: number | null
          surface?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Maisons_id_Agent_fkey"
            columns: ["id_Agent"]
            isOneToOne: false
            referencedRelation: "Agent"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Maisons_id_Quartier_fkey"
            columns: ["id_Quartier"]
            isOneToOne: false
            referencedRelation: "Quartier"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Maisons_id_Quartier_fkey"
            columns: ["id_Quartier"]
            isOneToOne: false
            referencedRelation: "quartier_commune"
            referencedColumns: ["id_Quartier"]
          },
        ]
      }
      Quartier: {
        Row: {
          created_at: string | null
          id: number
          id_Commune: number | null
          nom_quartier: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          id_Commune?: number | null
          nom_quartier: string
        }
        Update: {
          created_at?: string | null
          id?: number
          id_Commune?: number | null
          nom_quartier?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_Quartier_id_Commune_fkey"
            columns: ["id_Commune"]
            isOneToOne: false
            referencedRelation: "Commune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Quartier_id_Commune_fkey"
            columns: ["id_Commune"]
            isOneToOne: false
            referencedRelation: "quartier_commune"
            referencedColumns: ["id"]
          },
        ]
      }
      User: {
        Row: {
          created_at: string
          id: number
          user_nom: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          user_nom?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          user_nom?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      quartier_commune: {
        Row: {
          id: number | null
          id_Quartier: number | null
          nom_commune: string | null
          nom_quartier: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
