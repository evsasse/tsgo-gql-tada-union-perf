import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3822 } from "./fragment3822";
import type { FragmentToken3823 } from "./fragment3823";

export const FRAGMENT_3824 = gql(`
  fragment Fragment3824 on Member183 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_183
    memberCount_183
    memberMetric_183
  }
`);

type FragmentResult3824 = ResultOf<typeof FRAGMENT_3824>;
type FragmentSelf3824 = NonNullable<FragmentResult3824>;

export type FragmentToken3824 =
  | FragmentSelf3824["__typename"]
  | FragmentSelf3824["typenameHint"] | FragmentToken3822 | FragmentToken3823;
