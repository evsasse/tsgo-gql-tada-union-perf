import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3252 } from "./fragment3252";
import type { FragmentToken3253 } from "./fragment3253";

export const FRAGMENT_3254 = gql(`
  fragment Fragment3254 on Member173 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_173
    memberCount_173
    memberMetric_173
  }
`);

type FragmentResult3254 = ResultOf<typeof FRAGMENT_3254>;
type FragmentSelf3254 = NonNullable<FragmentResult3254>;

export type FragmentToken3254 =
  | FragmentSelf3254["__typename"]
  | FragmentSelf3254["typenameHint"] | FragmentToken3252 | FragmentToken3253;
