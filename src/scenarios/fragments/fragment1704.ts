import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1702 } from "./fragment1702";
import type { FragmentToken1703 } from "./fragment1703";

export const FRAGMENT_1704 = gql(`
  fragment Fragment1704 on Member23 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_23
    memberCount_23
    memberMetric_23
  }
`);

type FragmentResult1704 = ResultOf<typeof FRAGMENT_1704>;
type FragmentSelf1704 = NonNullable<FragmentResult1704>;

export type FragmentToken1704 =
  | FragmentSelf1704["__typename"]
  | FragmentSelf1704["typenameHint"] | FragmentToken1702 | FragmentToken1703;
