import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1707 } from "./fragment1707";
import type { FragmentToken1708 } from "./fragment1708";

export const FRAGMENT_1709 = gql(`
  fragment Fragment1709 on Member28 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_28
    memberCount_28
    memberMetric_28
  }
`);

type FragmentResult1709 = ResultOf<typeof FRAGMENT_1709>;
type FragmentSelf1709 = NonNullable<FragmentResult1709>;

export type FragmentToken1709 =
  | FragmentSelf1709["__typename"]
  | FragmentSelf1709["typenameHint"] | FragmentToken1707 | FragmentToken1708;
