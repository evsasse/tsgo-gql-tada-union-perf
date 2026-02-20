import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2393 } from "./fragment2393";
import type { FragmentToken2394 } from "./fragment2394";

export const FRAGMENT_2395 = gql(`
  fragment Fragment2395 on Member154 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_154
    memberCount_154
    memberMetric_154
  }
`);

type FragmentResult2395 = ResultOf<typeof FRAGMENT_2395>;
type FragmentSelf2395 = NonNullable<FragmentResult2395>;

export type FragmentToken2395 =
  | FragmentSelf2395["__typename"]
  | FragmentSelf2395["typenameHint"] | FragmentToken2393 | FragmentToken2394;
