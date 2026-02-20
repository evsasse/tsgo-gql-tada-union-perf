import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3820 } from "./fragment3820";
import type { FragmentToken3821 } from "./fragment3821";

export const FRAGMENT_3822 = gql(`
  fragment Fragment3822 on Member181 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_181
    memberCount_181
    memberMetric_181
  }
`);

type FragmentResult3822 = ResultOf<typeof FRAGMENT_3822>;
type FragmentSelf3822 = NonNullable<FragmentResult3822>;

export type FragmentToken3822 =
  | FragmentSelf3822["__typename"]
  | FragmentSelf3822["typenameHint"] | FragmentToken3820 | FragmentToken3821;
