import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3980 } from "./fragment3980";
import type { FragmentToken3981 } from "./fragment3981";

export const FRAGMENT_3982 = gql(`
  fragment Fragment3982 on Member61 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_61
    memberCount_61
    memberMetric_61
  }
`);

type FragmentResult3982 = ResultOf<typeof FRAGMENT_3982>;
type FragmentSelf3982 = NonNullable<FragmentResult3982>;

export type FragmentToken3982 =
  | FragmentSelf3982["__typename"]
  | FragmentSelf3982["typenameHint"] | FragmentToken3980 | FragmentToken3981;
