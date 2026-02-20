import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken513 } from "./fragment513";
import type { FragmentToken514 } from "./fragment514";

export const FRAGMENT_515 = gql(`
  fragment Fragment515 on Member234 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_234
    memberCount_234
    memberMetric_234
  }
`);

type FragmentResult515 = ResultOf<typeof FRAGMENT_515>;
type FragmentSelf515 = NonNullable<FragmentResult515>;

export type FragmentToken515 =
  | FragmentSelf515["__typename"]
  | FragmentSelf515["typenameHint"] | FragmentToken513 | FragmentToken514;
