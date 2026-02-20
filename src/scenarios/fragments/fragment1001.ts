import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken999 } from "./fragment999";
import type { FragmentToken1000 } from "./fragment1000";

export const FRAGMENT_1001 = gql(`
  fragment Fragment1001 on Member160 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_160
    memberCount_160
    memberMetric_160
  }
`);

type FragmentResult1001 = ResultOf<typeof FRAGMENT_1001>;
type FragmentSelf1001 = NonNullable<FragmentResult1001>;

export type FragmentToken1001 =
  | FragmentSelf1001["__typename"]
  | FragmentSelf1001["typenameHint"] | FragmentToken999 | FragmentToken1000;
