import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1706 } from "./fragment1706";
import type { FragmentToken1707 } from "./fragment1707";

export const FRAGMENT_1708 = gql(`
  fragment Fragment1708 on Member27 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_27
    memberCount_27
    memberMetric_27
  }
`);

type FragmentResult1708 = ResultOf<typeof FRAGMENT_1708>;
type FragmentSelf1708 = NonNullable<FragmentResult1708>;

export type FragmentToken1708 =
  | FragmentSelf1708["__typename"]
  | FragmentSelf1708["typenameHint"] | FragmentToken1706 | FragmentToken1707;
