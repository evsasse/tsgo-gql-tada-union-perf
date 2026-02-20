import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3095 } from "./fragment3095";
import type { FragmentToken3096 } from "./fragment3096";

export const FRAGMENT_3097 = gql(`
  fragment Fragment3097 on Member16 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_16
    memberCount_16
    memberMetric_16
  }
`);

type FragmentResult3097 = ResultOf<typeof FRAGMENT_3097>;
type FragmentSelf3097 = NonNullable<FragmentResult3097>;

export type FragmentToken3097 =
  | FragmentSelf3097["__typename"]
  | FragmentSelf3097["typenameHint"] | FragmentToken3095 | FragmentToken3096;
