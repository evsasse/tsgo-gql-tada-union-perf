import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2540 } from "./fragment2540";
import type { FragmentToken2541 } from "./fragment2541";

export const FRAGMENT_2542 = gql(`
  fragment Fragment2542 on Member21 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_21
    memberCount_21
    memberMetric_21
  }
`);

type FragmentResult2542 = ResultOf<typeof FRAGMENT_2542>;
type FragmentSelf2542 = NonNullable<FragmentResult2542>;

export type FragmentToken2542 =
  | FragmentSelf2542["__typename"]
  | FragmentSelf2542["typenameHint"] | FragmentToken2540 | FragmentToken2541;
