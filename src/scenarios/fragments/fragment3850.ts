import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3848 } from "./fragment3848";
import type { FragmentToken3849 } from "./fragment3849";

export const FRAGMENT_3850 = gql(`
  fragment Fragment3850 on Member209 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_209
    memberCount_209
    memberMetric_209
  }
`);

type FragmentResult3850 = ResultOf<typeof FRAGMENT_3850>;
type FragmentSelf3850 = NonNullable<FragmentResult3850>;

export type FragmentToken3850 =
  | FragmentSelf3850["__typename"]
  | FragmentSelf3850["typenameHint"] | FragmentToken3848 | FragmentToken3849;
