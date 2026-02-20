import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3255 } from "./fragment3255";
import type { FragmentToken3256 } from "./fragment3256";

export const FRAGMENT_3257 = gql(`
  fragment Fragment3257 on Member176 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_176
    memberCount_176
    memberMetric_176
  }
`);

type FragmentResult3257 = ResultOf<typeof FRAGMENT_3257>;
type FragmentSelf3257 = NonNullable<FragmentResult3257>;

export type FragmentToken3257 =
  | FragmentSelf3257["__typename"]
  | FragmentSelf3257["typenameHint"] | FragmentToken3255 | FragmentToken3256;
