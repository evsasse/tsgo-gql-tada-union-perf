import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3904 } from "./fragment3904";
import type { FragmentToken3905 } from "./fragment3905";

export const FRAGMENT_3906 = gql(`
  fragment Fragment3906 on Member265 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_265
    memberCount_265
    memberMetric_265
  }
`);

type FragmentResult3906 = ResultOf<typeof FRAGMENT_3906>;
type FragmentSelf3906 = NonNullable<FragmentResult3906>;

export type FragmentToken3906 =
  | FragmentSelf3906["__typename"]
  | FragmentSelf3906["typenameHint"] | FragmentToken3904 | FragmentToken3905;
