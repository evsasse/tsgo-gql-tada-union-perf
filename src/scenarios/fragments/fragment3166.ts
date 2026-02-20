import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3164 } from "./fragment3164";
import type { FragmentToken3165 } from "./fragment3165";

export const FRAGMENT_3166 = gql(`
  fragment Fragment3166 on Member85 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_85
    memberCount_85
    memberMetric_85
  }
`);

type FragmentResult3166 = ResultOf<typeof FRAGMENT_3166>;
type FragmentSelf3166 = NonNullable<FragmentResult3166>;

export type FragmentToken3166 =
  | FragmentSelf3166["__typename"]
  | FragmentSelf3166["typenameHint"] | FragmentToken3164 | FragmentToken3165;
