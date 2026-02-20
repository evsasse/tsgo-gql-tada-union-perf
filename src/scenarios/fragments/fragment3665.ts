import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3663 } from "./fragment3663";
import type { FragmentToken3664 } from "./fragment3664";

export const FRAGMENT_3665 = gql(`
  fragment Fragment3665 on Member24 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_24
    memberCount_24
    memberMetric_24
  }
`);

type FragmentResult3665 = ResultOf<typeof FRAGMENT_3665>;
type FragmentSelf3665 = NonNullable<FragmentResult3665>;

export type FragmentToken3665 =
  | FragmentSelf3665["__typename"]
  | FragmentSelf3665["typenameHint"] | FragmentToken3663 | FragmentToken3664;
