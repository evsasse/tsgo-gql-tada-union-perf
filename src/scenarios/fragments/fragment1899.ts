import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1897 } from "./fragment1897";
import type { FragmentToken1898 } from "./fragment1898";

export const FRAGMENT_1899 = gql(`
  fragment Fragment1899 on Member218 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_218
    memberCount_218
    memberMetric_218
  }
`);

type FragmentResult1899 = ResultOf<typeof FRAGMENT_1899>;
type FragmentSelf1899 = NonNullable<FragmentResult1899>;

export type FragmentToken1899 =
  | FragmentSelf1899["__typename"]
  | FragmentSelf1899["typenameHint"] | FragmentToken1897 | FragmentToken1898;
