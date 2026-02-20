import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken3424 } from "./fragment3424";
import type { FragmentToken3425 } from "./fragment3425";

export const FRAGMENT_3426 = gql(`
  fragment Fragment3426 on Member65 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_65
    memberCount_65
    memberMetric_65
  }
`);

type FragmentResult3426 = ResultOf<typeof FRAGMENT_3426>;
type FragmentSelf3426 = NonNullable<FragmentResult3426>;

export type FragmentToken3426 =
  | FragmentSelf3426["__typename"]
  | FragmentSelf3426["typenameHint"] | FragmentToken3424 | FragmentToken3425;
