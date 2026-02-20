import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3521 } from "./fragment3521";
import type { FragmentToken3522 } from "./fragment3522";

export const FRAGMENT_3523 = gql(`
  fragment Fragment3523 on Member162 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_162
    memberCount_162
    memberMetric_162
  }
`);

type FragmentResult3523 = ResultOf<typeof FRAGMENT_3523>;
type FragmentSelf3523 = NonNullable<FragmentResult3523>;

export type FragmentToken3523 =
  | FragmentSelf3523["__typename"]
  | FragmentSelf3523["typenameHint"] | FragmentToken3521 | FragmentToken3522;
