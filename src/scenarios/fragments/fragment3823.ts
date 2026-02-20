import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3821 } from "./fragment3821";
import type { FragmentToken3822 } from "./fragment3822";

export const FRAGMENT_3823 = gql(`
  fragment Fragment3823 on Member182 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_182
    memberCount_182
    memberMetric_182
  }
`);

type FragmentResult3823 = ResultOf<typeof FRAGMENT_3823>;
type FragmentSelf3823 = NonNullable<FragmentResult3823>;

export type FragmentToken3823 =
  | FragmentSelf3823["__typename"]
  | FragmentSelf3823["typenameHint"] | FragmentToken3821 | FragmentToken3822;
