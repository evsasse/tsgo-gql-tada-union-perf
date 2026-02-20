import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3588 } from "./fragment3588";
import type { FragmentToken3589 } from "./fragment3589";

export const FRAGMENT_3590 = gql(`
  fragment Fragment3590 on Member229 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_229
    memberCount_229
    memberMetric_229
  }
`);

type FragmentResult3590 = ResultOf<typeof FRAGMENT_3590>;
type FragmentSelf3590 = NonNullable<FragmentResult3590>;

export type FragmentToken3590 =
  | FragmentSelf3590["__typename"]
  | FragmentSelf3590["typenameHint"] | FragmentToken3588 | FragmentToken3589;
