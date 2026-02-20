import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2619 } from "./fragment2619";
import type { FragmentToken2620 } from "./fragment2620";

export const FRAGMENT_2621 = gql(`
  fragment Fragment2621 on Member100 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_100
    memberCount_100
    memberMetric_100
  }
`);

type FragmentResult2621 = ResultOf<typeof FRAGMENT_2621>;
type FragmentSelf2621 = NonNullable<FragmentResult2621>;

export type FragmentToken2621 =
  | FragmentSelf2621["__typename"]
  | FragmentSelf2621["typenameHint"] | FragmentToken2619 | FragmentToken2620;
