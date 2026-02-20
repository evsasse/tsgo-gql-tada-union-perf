import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1850 } from "./fragment1850";
import type { FragmentToken1851 } from "./fragment1851";

export const FRAGMENT_1852 = gql(`
  fragment Fragment1852 on Member171 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_171
    memberCount_171
    memberMetric_171
  }
`);

type FragmentResult1852 = ResultOf<typeof FRAGMENT_1852>;
type FragmentSelf1852 = NonNullable<FragmentResult1852>;

export type FragmentToken1852 =
  | FragmentSelf1852["__typename"]
  | FragmentSelf1852["typenameHint"] | FragmentToken1850 | FragmentToken1851;
