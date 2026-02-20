import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken202 } from "./fragment202";
import type { FragmentToken203 } from "./fragment203";

export const FRAGMENT_204 = gql(`
  fragment Fragment204 on Member203 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_203
    memberCount_203
    memberMetric_203
  }
`);

type FragmentResult204 = ResultOf<typeof FRAGMENT_204>;
type FragmentSelf204 = NonNullable<FragmentResult204>;

export type FragmentToken204 =
  | FragmentSelf204["__typename"]
  | FragmentSelf204["typenameHint"] | FragmentToken202 | FragmentToken203;
