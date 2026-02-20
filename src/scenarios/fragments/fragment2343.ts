import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2341 } from "./fragment2341";
import type { FragmentToken2342 } from "./fragment2342";

export const FRAGMENT_2343 = gql(`
  fragment Fragment2343 on Member102 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_102
    memberCount_102
    memberMetric_102
  }
`);

type FragmentResult2343 = ResultOf<typeof FRAGMENT_2343>;
type FragmentSelf2343 = NonNullable<FragmentResult2343>;

export type FragmentToken2343 =
  | FragmentSelf2343["__typename"]
  | FragmentSelf2343["typenameHint"] | FragmentToken2341 | FragmentToken2342;
