import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2338 } from "./fragment2338";
import type { FragmentToken2339 } from "./fragment2339";

export const FRAGMENT_2340 = gql(`
  fragment Fragment2340 on Member99 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_99
    memberCount_99
    memberMetric_99
  }
`);

type FragmentResult2340 = ResultOf<typeof FRAGMENT_2340>;
type FragmentSelf2340 = NonNullable<FragmentResult2340>;

export type FragmentToken2340 =
  | FragmentSelf2340["__typename"]
  | FragmentSelf2340["typenameHint"] | FragmentToken2338 | FragmentToken2339;
