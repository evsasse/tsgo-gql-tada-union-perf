import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3427 } from "./fragment3427";
import type { FragmentToken3428 } from "./fragment3428";

export const FRAGMENT_3429 = gql(`
  fragment Fragment3429 on Member68 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_68
    memberCount_68
    memberMetric_68
  }
`);

type FragmentResult3429 = ResultOf<typeof FRAGMENT_3429>;
type FragmentSelf3429 = NonNullable<FragmentResult3429>;

export type FragmentToken3429 =
  | FragmentSelf3429["__typename"]
  | FragmentSelf3429["typenameHint"] | FragmentToken3427 | FragmentToken3428;
