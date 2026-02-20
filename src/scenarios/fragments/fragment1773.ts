import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1771 } from "./fragment1771";
import type { FragmentToken1772 } from "./fragment1772";

export const FRAGMENT_1773 = gql(`
  fragment Fragment1773 on Member92 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_92
    memberCount_92
    memberMetric_92
  }
`);

type FragmentResult1773 = ResultOf<typeof FRAGMENT_1773>;
type FragmentSelf1773 = NonNullable<FragmentResult1773>;

export type FragmentToken1773 =
  | FragmentSelf1773["__typename"]
  | FragmentSelf1773["typenameHint"] | FragmentToken1771 | FragmentToken1772;
