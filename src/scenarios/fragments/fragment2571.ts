import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2569 } from "./fragment2569";
import type { FragmentToken2570 } from "./fragment2570";

export const FRAGMENT_2571 = gql(`
  fragment Fragment2571 on Member50 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_50
    memberCount_50
    memberMetric_50
  }
`);

type FragmentResult2571 = ResultOf<typeof FRAGMENT_2571>;
type FragmentSelf2571 = NonNullable<FragmentResult2571>;

export type FragmentToken2571 =
  | FragmentSelf2571["__typename"]
  | FragmentSelf2571["typenameHint"] | FragmentToken2569 | FragmentToken2570;
