import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3254 } from "./fragment3254";
import type { FragmentToken3255 } from "./fragment3255";

export const FRAGMENT_3256 = gql(`
  fragment Fragment3256 on Member175 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_175
    memberCount_175
    memberMetric_175
  }
`);

type FragmentResult3256 = ResultOf<typeof FRAGMENT_3256>;
type FragmentSelf3256 = NonNullable<FragmentResult3256>;

export type FragmentToken3256 =
  | FragmentSelf3256["__typename"]
  | FragmentSelf3256["typenameHint"] | FragmentToken3254 | FragmentToken3255;
