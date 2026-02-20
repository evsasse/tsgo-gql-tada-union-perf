import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2195 } from "./fragment2195";
import type { FragmentToken2196 } from "./fragment2196";

export const FRAGMENT_2197 = gql(`
  fragment Fragment2197 on Member236 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_236
    memberCount_236
    memberMetric_236
  }
`);

type FragmentResult2197 = ResultOf<typeof FRAGMENT_2197>;
type FragmentSelf2197 = NonNullable<FragmentResult2197>;

export type FragmentToken2197 =
  | FragmentSelf2197["__typename"]
  | FragmentSelf2197["typenameHint"] | FragmentToken2195 | FragmentToken2196;
