import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken2821 } from "./fragment2821";
import type { FragmentToken2822 } from "./fragment2822";

export const FRAGMENT_2823 = gql(`
  fragment Fragment2823 on Member22 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_22
    memberCount_22
    memberMetric_22
  }
`);

type FragmentResult2823 = ResultOf<typeof FRAGMENT_2823>;
type FragmentSelf2823 = NonNullable<FragmentResult2823>;

export type FragmentToken2823 =
  | FragmentSelf2823["__typename"]
  | FragmentSelf2823["typenameHint"] | FragmentToken2821 | FragmentToken2822;
