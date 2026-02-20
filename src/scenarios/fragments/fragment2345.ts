import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2343 } from "./fragment2343";
import type { FragmentToken2344 } from "./fragment2344";

export const FRAGMENT_2345 = gql(`
  fragment Fragment2345 on Member104 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_104
    memberCount_104
    memberMetric_104
  }
`);

type FragmentResult2345 = ResultOf<typeof FRAGMENT_2345>;
type FragmentSelf2345 = NonNullable<FragmentResult2345>;

export type FragmentToken2345 =
  | FragmentSelf2345["__typename"]
  | FragmentSelf2345["typenameHint"] | FragmentToken2343 | FragmentToken2344;
