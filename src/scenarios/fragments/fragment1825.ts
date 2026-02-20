import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1823 } from "./fragment1823";
import type { FragmentToken1824 } from "./fragment1824";

export const FRAGMENT_1825 = gql(`
  fragment Fragment1825 on Member144 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_144
    memberCount_144
    memberMetric_144
  }
`);

type FragmentResult1825 = ResultOf<typeof FRAGMENT_1825>;
type FragmentSelf1825 = NonNullable<FragmentResult1825>;

export type FragmentToken1825 =
  | FragmentSelf1825["__typename"]
  | FragmentSelf1825["typenameHint"] | FragmentToken1823 | FragmentToken1824;
