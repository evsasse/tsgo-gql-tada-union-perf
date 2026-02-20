import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3609 } from "./fragment3609";
import type { FragmentToken3610 } from "./fragment3610";

export const FRAGMENT_3611 = gql(`
  fragment Fragment3611 on Member250 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_250
    memberCount_250
    memberMetric_250
  }
`);

type FragmentResult3611 = ResultOf<typeof FRAGMENT_3611>;
type FragmentSelf3611 = NonNullable<FragmentResult3611>;

export type FragmentToken3611 =
  | FragmentSelf3611["__typename"]
  | FragmentSelf3611["typenameHint"] | FragmentToken3609 | FragmentToken3610;
