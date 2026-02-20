import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2590 } from "./fragment2590";
import type { FragmentToken2591 } from "./fragment2591";

export const FRAGMENT_2592 = gql(`
  fragment Fragment2592 on Member71 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_71
    memberCount_71
    memberMetric_71
  }
`);

type FragmentResult2592 = ResultOf<typeof FRAGMENT_2592>;
type FragmentSelf2592 = NonNullable<FragmentResult2592>;

export type FragmentToken2592 =
  | FragmentSelf2592["__typename"]
  | FragmentSelf2592["typenameHint"] | FragmentToken2590 | FragmentToken2591;
