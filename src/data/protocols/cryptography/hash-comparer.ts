export interface HashComparer {
  comparer(plaintext: string, digest: string): Promise<boolean>;
}
