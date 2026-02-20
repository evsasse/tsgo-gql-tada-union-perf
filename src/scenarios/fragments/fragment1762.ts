import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1760 } from "./fragment1760";
import type { FragmentToken1761 } from "./fragment1761";

export const FRAGMENT_1762 = gql(`
  fragment Fragment1762 on Member81 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_81
    memberCount_81
    memberMetric_81
  }
`);

type FragmentResult1762 = ResultOf<typeof FRAGMENT_1762>;
type FragmentSelf1762 = NonNullable<FragmentResult1762>;

export type FragmentToken1762 =
  | FragmentSelf1762["__typename"]
  | FragmentSelf1762["typenameHint"] | FragmentToken1760 | FragmentToken1761;
