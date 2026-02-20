import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2305 } from "./fragment2305";
import type { FragmentToken2306 } from "./fragment2306";

export const FRAGMENT_2307 = gql(`
  fragment Fragment2307 on Member66 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_66
    memberCount_66
    memberMetric_66
  }
`);

type FragmentResult2307 = ResultOf<typeof FRAGMENT_2307>;
type FragmentSelf2307 = NonNullable<FragmentResult2307>;

export type FragmentToken2307 =
  | FragmentSelf2307["__typename"]
  | FragmentSelf2307["typenameHint"] | FragmentToken2305 | FragmentToken2306;
