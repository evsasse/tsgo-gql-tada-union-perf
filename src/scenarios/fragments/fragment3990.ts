import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3988 } from "./fragment3988";
import type { FragmentToken3989 } from "./fragment3989";

export const FRAGMENT_3990 = gql(`
  fragment Fragment3990 on Member69 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_69
    memberCount_69
    memberMetric_69
  }
`);

type FragmentResult3990 = ResultOf<typeof FRAGMENT_3990>;
type FragmentSelf3990 = NonNullable<FragmentResult3990>;

export type FragmentToken3990 =
  | FragmentSelf3990["__typename"]
  | FragmentSelf3990["typenameHint"] | FragmentToken3988 | FragmentToken3989;
