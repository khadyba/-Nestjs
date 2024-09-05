import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Déclare que cette classe est une entité de TypeORM
export class User {
  @PrimaryGeneratedColumn() // Colonne auto-générée pour l'ID primaire
  id: number;

  @Column({ length: 100 }) // Colonne de type chaîne de caractères avec une longueur maximale de 100
  name: string;

  @Column({ length: 100 }) // Colonne de type chaîne de caractères avec une longueur maximale de 100
  email: string;
  @Column() // Colonne de type chaîne de caractères par défaut pour le mot de passe
  password: string;
}
