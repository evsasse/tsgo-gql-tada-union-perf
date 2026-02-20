import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1644 } from "./fragment1644";
import type { FragmentToken1645 } from "./fragment1645";

export const FRAGMENT_1646 = gql(`
  fragment Fragment1646 on Member245 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_245
    memberCount_245
    memberMetric_245
  }
`);

type FragmentResult1646 = ResultOf<typeof FRAGMENT_1646>;
type FragmentSelf1646 = NonNullable<FragmentResult1646>;

export type FragmentToken1646 =
  | FragmentSelf1646["__typename"]
  | FragmentSelf1646["typenameHint"] | FragmentToken1644 | FragmentToken1645;
