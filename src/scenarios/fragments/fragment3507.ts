import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3505 } from "./fragment3505";
import type { FragmentToken3506 } from "./fragment3506";

export const FRAGMENT_3507 = gql(`
  fragment Fragment3507 on Member146 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_146
    memberCount_146
    memberMetric_146
  }
`);

type FragmentResult3507 = ResultOf<typeof FRAGMENT_3507>;
type FragmentSelf3507 = NonNullable<FragmentResult3507>;

export type FragmentToken3507 =
  | FragmentSelf3507["__typename"]
  | FragmentSelf3507["typenameHint"] | FragmentToken3505 | FragmentToken3506;
