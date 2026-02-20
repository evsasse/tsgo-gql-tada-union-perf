import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2342 } from "./fragment2342";
import type { FragmentToken2343 } from "./fragment2343";

export const FRAGMENT_2344 = gql(`
  fragment Fragment2344 on Member103 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_103
    memberCount_103
    memberMetric_103
  }
`);

type FragmentResult2344 = ResultOf<typeof FRAGMENT_2344>;
type FragmentSelf2344 = NonNullable<FragmentResult2344>;

export type FragmentToken2344 =
  | FragmentSelf2344["__typename"]
  | FragmentSelf2344["typenameHint"] | FragmentToken2342 | FragmentToken2343;
