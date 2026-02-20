import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2822 } from "./fragment2822";
import type { FragmentToken2823 } from "./fragment2823";

export const FRAGMENT_2824 = gql(`
  fragment Fragment2824 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult2824 = ResultOf<typeof FRAGMENT_2824>;
type FragmentSelf2824 = NonNullable<FragmentResult2824>;

export type FragmentToken2824 =
  | FragmentSelf2824["__typename"]
  | FragmentSelf2824["typenameHint"] | FragmentToken2822 | FragmentToken2823;
