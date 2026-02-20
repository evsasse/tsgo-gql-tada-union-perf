import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2344 } from "./fragment2344";
import type { FragmentToken2345 } from "./fragment2345";

export const FRAGMENT_2346 = gql(`
  fragment Fragment2346 on Member105 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_105
    memberCount_105
    memberMetric_105
  }
`);

type FragmentResult2346 = ResultOf<typeof FRAGMENT_2346>;
type FragmentSelf2346 = NonNullable<FragmentResult2346>;

export type FragmentToken2346 =
  | FragmentSelf2346["__typename"]
  | FragmentSelf2346["typenameHint"] | FragmentToken2344 | FragmentToken2345;
