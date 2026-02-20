import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1762 } from "./fragment1762";
import type { FragmentToken1763 } from "./fragment1763";

export const FRAGMENT_1764 = gql(`
  fragment Fragment1764 on Member83 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_83
    memberCount_83
    memberMetric_83
  }
`);

type FragmentResult1764 = ResultOf<typeof FRAGMENT_1764>;
type FragmentSelf1764 = NonNullable<FragmentResult1764>;

export type FragmentToken1764 =
  | FragmentSelf1764["__typename"]
  | FragmentSelf1764["typenameHint"] | FragmentToken1762 | FragmentToken1763;
