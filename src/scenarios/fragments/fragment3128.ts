import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3126 } from "./fragment3126";
import type { FragmentToken3127 } from "./fragment3127";

export const FRAGMENT_3128 = gql(`
  fragment Fragment3128 on Member47 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_47
    memberCount_47
    memberMetric_47
  }
`);

type FragmentResult3128 = ResultOf<typeof FRAGMENT_3128>;
type FragmentSelf3128 = NonNullable<FragmentResult3128>;

export type FragmentToken3128 =
  | FragmentSelf3128["__typename"]
  | FragmentSelf3128["typenameHint"] | FragmentToken3126 | FragmentToken3127;
