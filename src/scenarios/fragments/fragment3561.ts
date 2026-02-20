import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3559 } from "./fragment3559";
import type { FragmentToken3560 } from "./fragment3560";

export const FRAGMENT_3561 = gql(`
  fragment Fragment3561 on Member200 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_200
    memberCount_200
    memberMetric_200
  }
`);

type FragmentResult3561 = ResultOf<typeof FRAGMENT_3561>;
type FragmentSelf3561 = NonNullable<FragmentResult3561>;

export type FragmentToken3561 =
  | FragmentSelf3561["__typename"]
  | FragmentSelf3561["typenameHint"] | FragmentToken3559 | FragmentToken3560;
