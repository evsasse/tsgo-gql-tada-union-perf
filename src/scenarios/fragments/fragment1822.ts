import { gql } from "../../gqlClient";
import type { ResultOf } from "../../gqlClient";
import type { FragmentToken1820 } from "./fragment1820";
import type { FragmentToken1821 } from "./fragment1821";

export const FRAGMENT_1822 = gql(`
  fragment Fragment1822 on Member141 {
    __typename
    typenameHint
    overlapA
    overlapB
    memberKey_141
    memberCount_141
    memberMetric_141
  }
`);

type FragmentResult1822 = ResultOf<typeof FRAGMENT_1822>;
type FragmentSelf1822 = NonNullable<FragmentResult1822>;

export type FragmentToken1822 =
  | FragmentSelf1822["__typename"]
  | FragmentSelf1822["typenameHint"] | FragmentToken1820 | FragmentToken1821;
