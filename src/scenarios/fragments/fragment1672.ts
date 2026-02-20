import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1670 } from "./fragment1670";
import type { FragmentToken1671 } from "./fragment1671";

export const FRAGMENT_1672 = gql(`
  fragment Fragment1672 on Member271 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_271
    memberCount_271
    memberMetric_271
  }
`);

type FragmentResult1672 = ResultOf<typeof FRAGMENT_1672>;
type FragmentSelf1672 = NonNullable<FragmentResult1672>;

export type FragmentToken1672 =
  | FragmentSelf1672["__typename"]
  | FragmentSelf1672["typenameHint"] | FragmentToken1670 | FragmentToken1671;
